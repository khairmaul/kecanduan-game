const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  }); //ini akan return token, jgn di kasih kurung

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true, //this important for browser cant modify any data and secure from the attacker
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https', //config khusus heroku gabisa pake di development
  };
  res.cookie('jwt', token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body); //req.body akan di filter otomatis oleh schema
  createSendToken(newUser, 201, req, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) return next(new AppError('User not found', 404));

  const correct = await user.correctPassword(password, user.password);

  if (!correct) {
    return next(new AppError('Incorrect password', 400));
  }

  createSendToken(user, 200, req, res);
});

exports.logout = (req, res) => {
  res.cookie('jwt', '', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    token: '',
    status: 'success',
  });
};

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token)
    return next(
      new AppError('You not logged in! Please log in to get access', 401)
    );
  // 2) Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3) Check if user still exists
  const currentUser = await User.findById(decoded.id);

  if (!currentUser)
    return next(
      new AppError('The user belonging to this token does not exist', 401)
    );

  // 4) Check if user changed password after the token was issued
  if (currentUser.changePasswordAfter(decoded.iat)) {
    return next(
      new AppError(
        'The user recently changed their password! Please login again',
        401
      )
    );
  }

  //GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser; // kalo udah manggil protect maka harus ada req.user pada request
  res.locals.user = currentUser; // ini khusus buat rendered website aja, gak akan ganggu yg lain
  next();
});

// FOR PROTECT ROUTES AND SEND RES RENDERED PAGES, NO ERROR
exports.isLoggedIn = async (req, res, next) => {
  try {
    if (req.cookies.jwt) {
      // 1) Verification token
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );
      // console.log(decoded);

      // 3) Check if user still exists
      const currentUser = await User.findById(decoded.id);

      if (!currentUser) return next();

      // 4) Check if user changed password after the token was issued
      if (currentUser.changePasswordAfter(decoded.iat)) return next();

      // THERE IS A LOGGED IN USER
      // res.locals merupakan variable object yang bisa di akses oleh pug templates
      res.locals.user = currentUser;
    }
    next();
  } catch (err) {
    return next(); //just skip and not call error handler
  }
};

exports.restrictTo =
  (...roles) =>
  (req, res, next) => {
    // roles is an array of ['admin', 'lead-guide', '................................];
    //memerlukan authController.protect di middleware sebelum ini
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You dont have permission to perform this action', 403)
      );
    }

    next();
  };

exports.updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('+password');

  const correctPassword = await user.correctPassword(
    req.body.passwordCurrent,
    user.password
  );

  if (!correctPassword)
    return next(new AppError('Your current password is incorrect', 401));

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save(); // User.findByIdAndUpdate will NOT work as intended!

  createSendToken(user, 200, req, res);
});

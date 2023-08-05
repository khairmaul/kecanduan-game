const multer = require('multer');
const sharp = require('sharp');
const User = require('../models/userModel');
const factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const multerStorage = multer.memoryStorage(); //image will be buffer stored in memory, data in req.file.buffer

const multerFilter = (req, file, cb) => {
  //cb ini maksudnya callback, fungsinya sama seperti next, cuma supaya gak tercampur sama express di ganti nama cb
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images', 400), false);
  }
};

//digunakan agar res.body nanti bisa dikirim melalui form-data, hasilnya akan ada di res.file
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
}); //cek video 199 -200

exports.uploadUserPhoto = upload.single('photo');

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next(); //req.file ini adalah form-data berbentuk file / bibawah field. Cek thunder client

  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer) //return promise
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`); //set quality ke 90%

  next();
});

exports.getAllUser = factory.getAll(User);
exports.getUserById = factory.getOne(User);
exports.updateUser = factory.updateOne(User); //validate schema tidak aktif disini
exports.deleteUser = factory.deleteOne(User);

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id; //need authController.protect or req.user before calling
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Create error of user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This routes not for password update. Please use /updateMyPassword',
        400
      )
    );
  }

  // 2) Filtered out unwanted fields names the are allowed to be update
  const filteredBody = filterObj(req.body, 'name', 'email');
  if (req.file) filteredBody.photo = req.file.filename; //untuk menambahkan field photo jika ada

  // 3) Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(
    req.user.id,
    { active: false },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(204).json({
    statusbar: 'success',
    data: null,
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not defined, please use sign up instead',
  });
};

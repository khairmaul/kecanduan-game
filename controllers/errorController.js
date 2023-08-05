/* eslint-disable no-console */
const AppError = require('../utils/appError');

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path} : ${err.value}`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
  const value = err.errmsg.match(/(["'])(?:\\.|[^\\])*?\1/)[0];
  const message = `Duplicate field value ${value}. Please use another value instead`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);

  const message = `Invalid input data ${errors.join('. ')} `;
  return new AppError(message, 400);
};

const handleJWTError = () =>
  new AppError('Invalid token. Please login again', 401); //es6 arrow finction, kalo gini dia akan otomatis returning

const handleJWTExpiredError = () =>
  new AppError('Your token is expired. Please login again', 401); //es6 arrow finction, kalo gini dia akan otomatis returning

const sendErrorDev = (err, req, res) => {
  console.log('💥ERROR from errorController', err);
  if (req.originalUrl.startsWith('/api')) {
    // A) API
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }
  // B) RENDERED WEBSITE
  return res.status(err.statusCode).render('error', {
    title: 'Terjadi kesalahan!',
    msg: err.message,
  });
};

const sendErrorProd = (err, req, res) => {
  console.log('💥ERROR from errorController', err);
  if (req.originalUrl.startsWith('/api')) {
    // A) API
    //Operational, trusted error: send message to client
    if (err.isOperational) {
      //err disini akan berasal dari appError.js, pahami alur nya
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }
    //programming or other unknown error : dont leak error details
    // err disini tidak berasal dari appError.js
    // 1) log error
    // console.error(err);

    // 2) Send generic message
    return res.status(500).json({
      status: 'error',
      message: 'Something went very wrong',
    });
  }

  // B) RENDERED WEBSITE
  const msg = err.isOperational ? err.message : 'Please try again later';
  return res.status(err.statusCode).render('error', {
    title: 'Terjadi kesalahan!',
    msg: msg,
  });
};

module.exports = (err, req, res, next) => {
  //  console.log(err.stack); //ini untuk melakukan trace error
  //  ketika ada middleware dg 4 parameter ini maka akan dideteksi sebagai global error handler
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else {
    // let error = { ...err }; //bugs

    if (err.name === 'CastError') err = handleCastErrorDB(err);
    if (err.code === 11000) err = handleDuplicateFieldsDB(err);
    if (err.name === 'ValidationError') err = handleValidationErrorDB(err);
    if (err.name === 'JsonWebTokenError') err = handleJWTError();
    if (err.name === 'TokenExpiredError') err = handleJWTExpiredError();

    sendErrorProd(err, req, res);
  }
};

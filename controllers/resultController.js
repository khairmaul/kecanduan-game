const Result = require('../models/resultModel');
const factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createItem = factory.createOne(Result);
exports.getAllItems = factory.getAll(Result);
exports.getItem = factory.getOne(Result);
exports.updateItem = factory.updateOne(Result);
exports.deleteItem = factory.deleteOne(Result);
exports.deleteAllItem = factory.deleteAll(Result);

exports.deletetByUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  if (!id) return next(new AppError('User not found', 404));
  await Result.deleteMany({ user: id });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

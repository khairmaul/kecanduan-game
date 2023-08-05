const Solution = require('../models/solutionModel');
const factory = require('./handlerFactory');

exports.createItem = factory.createOne(Solution);
exports.getAllItems = factory.getAll(Solution);
exports.getItem = factory.getOne(Solution);
exports.updateItem = factory.updateOne(Solution);
exports.deleteItem = factory.deleteOne(Solution);
exports.deleteAllItem = factory.deleteAll(Solution);

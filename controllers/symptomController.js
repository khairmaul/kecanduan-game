const Symptom = require('../models/symptomModel');
const factory = require('./handlerFactory');

exports.createItem = factory.createOne(Symptom);
exports.getAllItems = factory.getAll(Symptom);
exports.getItem = factory.getOne(Symptom);
exports.updateItem = factory.updateOne(Symptom);
exports.deleteItem = factory.deleteOne(Symptom);
exports.deleteAllItem = factory.deleteAll(Symptom);

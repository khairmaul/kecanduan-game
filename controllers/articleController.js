const Article = require('../models/articleModel');
const factory = require('./handlerFactory');

exports.createItem = factory.createOne(Article);
exports.getAllItems = factory.getAll(Article);
exports.getItem = factory.getOne(Article);
exports.updateItem = factory.updateOne(Article);
exports.deleteItem = factory.deleteOne(Article);

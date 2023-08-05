const express = require('express');
const authController = require('../controllers/authController');
const articleController = require('../controllers/articleController');

const router = express.Router();

router
  .route('/')
  .get(articleController.getAllItems)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    articleController.createItem
  );

router
  .route('/:id')
  .get(articleController.getItem)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    articleController.updateItem
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    articleController.deleteItem
  );

module.exports = router;

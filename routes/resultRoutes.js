const express = require('express');
const authController = require('../controllers/authController');
const resultController = require('../controllers/resultController');

const router = express.Router();

router
  .route('/')
  .get(resultController.getAllItems)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    resultController.createItem
  );

router
  .route('/delete-by-user/:id')
  .delete(
    authController.protect,
    authController.restrictTo('user'),
    resultController.deletetByUser
  );

router
  .route('/:id')
  .get(resultController.getItem)
  .patch(
    authController.protect,
    authController.restrictTo('user'),
    resultController.updateItem
  )
  .delete(
    authController.protect,
    authController.restrictTo('user'),
    resultController.deleteItem
  );

module.exports = router;

const express = require('express');
const authController = require('../controllers/authController');
const solutionController = require('../controllers/solutionController');

const router = express.Router();

router
  .route('/')
  .get(solutionController.getAllItems)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    solutionController.createItem
  );

router
  .route('/delete-all')
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    solutionController.deleteAllItem
  );

router
  .route('/:id')
  .get(solutionController.getItem)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    solutionController.updateItem
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    solutionController.deleteItem
  );

module.exports = router;

const express = require('express');
const authController = require('../controllers/authController');
const symptomController = require('../controllers/symptomController');

const router = express.Router();

router
  .route('/')
  .get(symptomController.getAllItems)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    symptomController.createItem
  );

router
  .route('/delete-all')
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    symptomController.deleteAllItem
  );

router
  .route('/:id')
  .get(symptomController.getItem)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    symptomController.updateItem
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    symptomController.deleteItem
  );

module.exports = router;

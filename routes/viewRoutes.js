const express = require('express');
const authController = require('../controllers/authController');
const viewController = require('../controllers/viewController');

const router = express.Router();

router.use(authController.isLoggedIn);

router.get('/', viewController.getOverview);
router.get('/article', viewController.getArticle);
router.get('/symptom', viewController.getSymptom);
router.get('/solution', viewController.getSolution);

router.use(authController.protect);

router.get(
  '/consultation',
  authController.restrictTo('user'),
  viewController.getConsult
);
router.get('/history', viewController.getHistory);
router.get('/result', viewController.getResult);

router.use(authController.restrictTo('admin'));
router.get('/user', viewController.getUser);

module.exports = router;

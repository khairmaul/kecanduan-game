const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.patch(
  '/updateMyPassword',
  authController.protect,
  authController.updatePassword
);

// DIBAWAH INI ADALAH PROTECTED ROUTES
router.use(authController.protect);

router.get('/me', userController.getMe, userController.getUserById);
router.patch(
  '/updateMe',
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe
);
router.delete('/deleteMe', userController.deleteMe);

module.exports = router;

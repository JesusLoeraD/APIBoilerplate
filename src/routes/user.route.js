const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router
  .route('/')
  .get(userController.getUsers);

router
  .route('/:userId')
  .get(userController.getUser)

module.exports = router;

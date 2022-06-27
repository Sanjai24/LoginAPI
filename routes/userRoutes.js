const express = require('express');
var router = express.Router();
const userController = require('../controllers/userController.js');

router.get('/login', userController.login_get);
router.get('/signup', userController.signup_get);
router.post('/login', userController.login_post);
router.post('/signup', userController.signup_post);

module.exports = router;
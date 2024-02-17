const express = require('express');
const userController = require('./../controllers/usercontroller');
const router = express.Router();

router.get('/', userController.getHomepage);
router.get('/login', userController.getLogin);
router.get('/register', userController.getRegister);
router.get('/logout', userController.getLogout);


module.exports = router;
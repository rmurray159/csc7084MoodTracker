const express = require('express');
const userController = require('./../controllers/usercontroller');
const { check } = require('express-validator');

const router = express.Router();

router.get('/', userController.getHomepage);
router.get('/login', userController.getLogin);
router.get('/register', userController.getRegister);
router.get('/registersuccess', userController.getRegisterSuccess);
router.get('/logout', userController.getLogout);

router.post('/register',
    [
        check('first_name')
            .exists({checkFalsy: true}).withMessage('Please enter your first name')
            .isLength({ min: 1 }).withMessage('First name must be at least 1 character long')
            .isAlpha().withMessage('First name must be alphabetic'),

        check('last_name')
            .exists({checkFalsy: true}).withMessage('Please enter your last name')    
            .isLength({ min: 1 }).withMessage('Last name must be at least 1 character long')
            .isAlpha().withMessage('Last name must be alphabetic'),

        check('email_address')
            .exists({checkFalsy: true}).withMessage('Please enter your email address')
            .isEmail().withMessage('Please enter a valid email address'),

        check('password')
            .exists({checkFalsy: true}).withMessage('Please enter your password')
            .isLength({ min: 3 }).withMessage('Password must be at least 3 characters long')
    ],
    userController.postRegister);



router.post('/login',
    [
        check('email_address')
        .exists({checkFalsy: true}).withMessage('Please enter your email address')
        .isEmail().withMessage('Please enter a valid email address'),

        check('password')
        .exists({checkFalsy: true}).withMessage('Please enter your password')
        .isLength({ min: 3 }).withMessage('Password must be at least 3 characters long')
    ],
    userController.postLogin);

module.exports = router;
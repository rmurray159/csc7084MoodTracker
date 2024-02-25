const express = require('express');
const controller = require('./../controllers/snapshotcontroller');
const { isAuth } = require('./../middleware/auth');
/*
const { validateInput } = require('./../middleware/validate');
*/
const { check } = require('express-validator');


const router = express.Router();

router.get('/new', isAuth, controller.getAddNewSnapshot);
router.get('/summary/:snapshotId', isAuth, controller.getSummarySnapshot)
router.get('/list', isAuth, controller.getSnapshotList);
router.get('/del/:snapshotid', isAuth, controller.getDeleteSingleSnapshot);
router.get('/edit/:snapshotid', isAuth, controller.getEditSnapshot);

router.post('/new', isAuth, 
    [
        check('notes')
            .isLength({ max: 500 }) // set max length of notes to 500
            .withMessage('Notes must be less than 500 characters')
            .optional({ nullable: true, checkFalsy: true })
    ],
    controller.postNewSnapshot
);

router.post('/edit/:snapshotid', controller.postEditSnapshot);
router.post('/del/:snapshotid', controller.postDeleteSnapshot);

module.exports = router;


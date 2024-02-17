const express = require('express');
const controller = require('./../controllers/snapshotcontroller');
const router = express.Router();

router.get('/new', controller.getAddNewSnapshot);
router.get('/summary/:snapshotId', controller.getSummarySnapshot)
router.get('/list', controller.getSnapshotList);
router.get('/del/:snapshotid', controller.getDeleteSingleSnapshot);
router.get('/edit/:snapshotid', controller.getEditSnapshot);

router.post('/new', controller.postNewSnapshot);
router.post('/edit/:snapshotid', controller.postEditSnapshot);
router.post('/del/:snapshotid', controller.postDeleteSnapshot);

module.exports = router;


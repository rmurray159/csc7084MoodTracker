const express = require('express');
const controller = require('./../controllers/snapshotcontroller');
const router = express.Router();

router.get('/new', controller.getAddNewSnapshot);

router.post('/new', controller.postNewSnapshot);

module.exports = router;
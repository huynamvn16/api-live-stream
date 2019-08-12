const express = require('express');
const router = express.Router();
const SampleController = require('../controller/sample-controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('API respond with a resource');
});

router.get('/sample', function(req, res, next) {
    console.log("sample route");
    SampleController.sampleGet(req, res, next);
});

module.exports = router;

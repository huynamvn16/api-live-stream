const express = require('express');
const router = express.Router();
const SampleController = require('../controller/sample-controller');
const VideoController = require('../controller/video-controller');
const VideoStreamController = require('../controller/video-stream-controller');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('API respond with a resource');
});

router.get('/sample', function(req, res, next) {
    console.log("sample route");
    SampleController.sampleGet(req, res, next);
});
router.get('/video', function(req, res, next) {
    console.log("video route");
    VideoController.videoGet(req, res, next);
});
router.get('/video/stream', function(req, res, next) {
    console.log("video route");
    VideoStreamController.videostreamGet(req, res, next);
});
module.exports = router;

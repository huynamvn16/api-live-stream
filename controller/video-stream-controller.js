const VideoService = require('../service/video-stream-service');
module.exports = {
    videostreamGet(req, res, next) {
        VideoService.getUser(req, res, next);
    }
};
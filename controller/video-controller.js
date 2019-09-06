const VideoService = require('../service/video-service');
module.exports = {
    videoGet(req, res, next) {
        VideoService.getUser(req, res, next);
    }
};
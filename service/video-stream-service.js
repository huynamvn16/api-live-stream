const Video = require('../models').live_video_stream;
module.exports = {
    getUser(req, res, next) {
        Video.findAll({attributes: ['id', 'url', 'name', 'thumbnail']})
            .then(users => {
                res.send(JSON.stringify(users, null, 4));
            }).catch(err => {
                 next(err);
            });
    }
};

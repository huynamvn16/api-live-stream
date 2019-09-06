const Video = require('../models').video;
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

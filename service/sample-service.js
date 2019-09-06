const MySqlSample = require('../models').MySqlSample;
module.exports = {
    getUser(req, res, next) {
        MySqlSample.findAll()
            .then(users => {
                res.send(JSON.stringify(users, null, 4));
            }).catch(err => {
                 next(err);
            });
    }
};


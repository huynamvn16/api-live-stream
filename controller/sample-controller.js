const SampleService = require('../service/sample-service');
module.exports = {
    sampleGet(req, res, next) {
        SampleService.getUser(req, res, next);
    }
};
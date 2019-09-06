const fs = require('fs');

module.exports = {
    development: {
        "username": "admin",
        "password": 12345678,
        "database": "live_stream",
        "host": "database-2.csmjb2ruuxrn.ap-southeast-1.rds.amazonaws.com",
        "dialect": "mysql",
        "operatorsAliases": false
    },
    test: {
        "username": "admin",
        "password": 12345678,
        "database": "live_stream",
        "host": "database-2.csmjb2ruuxrn.ap-southeast-1.rds.amazonaws.com",
        "dialect": "mysql",
        "operatorsAliases": false
    },
    production: {
        "username": "admin",
        "password": 12345678,
        "database": "live_stream",
        "host": "database-2.csmjb2ruuxrn.ap-southeast-1.rds.amazonaws.com",
        "dialect": "mysql",
        "operatorsAliases": false
        // dialectOptions: {
        //     ssl: {
        //         ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
        //     }
        // }
    }
};
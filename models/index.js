'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/mysql-config');
const db = {};

let sequelize;
if (env === 'development') {
  sequelize = new Sequelize(`mysql://${config.development.username}:${config.development.password}@${config.development.host}:3306/${config.development.database}`, {
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  });
} else {
    sequelize = new Sequelize(`mysql://${config.production.username}:${config.production.password}@${config.production.host}:3306/${config.production.database}`, {
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });
}

fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

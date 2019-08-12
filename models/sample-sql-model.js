'use strict';
module.exports = (sequelize, DataTypes) => {
    const mySqlSample = sequelize.define('MySqlSample', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        freezeTableName: true, // Always set
    });
    mySqlSample.associate = function(models) {
        // associations can be defined here
    };
    return mySqlSample;
};
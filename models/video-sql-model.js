'use strict';
module.exports = (sequelize, DataTypes) => {
    const Video = sequelize.define('video', {
        thumbnail: DataTypes.STRING,
        url: DataTypes.STRING,
        name: DataTypes.STRING
    }, {
        freezeTableName: true, // Always set
    });
    Video.associate = function(models) {
        // associations can be defined here
    };
    return Video;
};
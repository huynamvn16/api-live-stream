'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('video', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            thumbnail: {
                allowNull: false,
                type: Sequelize.STRING
            },
            url: {
                allowNull: false,
                type: Sequelize.STRING
            }
        });

    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('video');
    }
};
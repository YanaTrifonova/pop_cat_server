'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('instrumentsNotes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            instrumentId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'instruments',
                    key: 'id'
                },
            },
            a: {
                type: Sequelize.STRING
            },
            b: {
                type: Sequelize.STRING
            },
            c: {
                type: Sequelize.STRING
            },
            d: {
                type: Sequelize.STRING
            },
            e: {
                type: Sequelize.STRING
            },
            f: {
                type: Sequelize.STRING
            },
            g: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable('instrumentsNotes');
    }
};
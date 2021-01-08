'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('posts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id'
                },
            },
            catId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'cats',
                    key: 'id'
                },
            },
            instrumentId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'instruments',
                    key: 'id'
                },
            },
            song: {
                type: Sequelize.JSONB,
                allowNull: false,
            },
            postName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            postDescription: {
                type: Sequelize.TEXT,
                allowNull: false,
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
        await queryInterface.dropTable('posts');
    }
};
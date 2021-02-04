'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class favorite extends Model {
        static associate(models) {
            favorite.belongsTo(models.user);
            favorite.belongsTo(models.post);
        }
    }

    favorite.init({
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "id"
            }
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "posts",
                key: "id"
            }
        }
    }, {
        sequelize,
        modelName: 'favorite',
    });
    return favorite;
};
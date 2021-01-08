'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class like extends Model {
        static associate(models) {
            like.belongsTo(models.user);
            like.belongsTo(models.post);
        }
    }

    like.init({
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
        modelName: 'like',
    });
    return like;
};
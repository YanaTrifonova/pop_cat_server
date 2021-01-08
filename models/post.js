'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class post extends Model {
        static associate(models) {
            post.belongsTo(models.user);
            post.belongsTo(models.cat);
            post.belongsTo(models.instrument);

            post.belongsToMany(models.user, {
                through: models.like,
                foreignKey: "postId"
            });
            post.belongsToMany(models.user, {
                through: models.favorite,
                foreignKey: "postId"
            });
        }
    }

    post.init({
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: "users",
                key: "id"
            }
        },
        catId: {
            type: DataTypes.INTEGER,
            references: {
                model: "cats",
                key: "id"
            }
        },
        instrumentId: {
            type: DataTypes.INTEGER,
            references: {
                model: "instruments",
                key: "id"
            }
        },
        song: {
            type: DataTypes.JSONB,
            allowNull: false,
        },
        postName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postDescription: {
            type: DataTypes.TINYTEXT,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'post',
    });
    return post;
};
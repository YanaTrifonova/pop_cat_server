"use strict";

const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        static associate(models) {
            user.hasMany(models.post);

            user.belongsToMany(models.post, {
                through: models.like,
                foreignKey: "userId"
            });
            user.belongsToMany(models.post, {
                through: models.favorite,
                foreignKey: "userId"
            });
        }
    }

    user.init(
        {
            name: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            colour: {
                type: DataTypes.STRING,
            }
        },
        {
            sequelize,
            modelName: "user",
        }
    );
    return user;
};

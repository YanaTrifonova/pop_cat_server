'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class cat extends Model {
        static associate(models) {
            cat.hasMany(models.post);
        }
    }
    cat.init({
        name: DataTypes.STRING,
        url: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'cat',
    });
    return cat;
};
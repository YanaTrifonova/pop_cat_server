'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class instrument extends Model {
        static associate(models) {
            instrument.belongsTo(models.post);

            instrument.hasOne(models.instrumentnote);
        }
    }
    instrument.init({
        name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'instrument',
    });
    return instrument;
};
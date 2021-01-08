'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class instrumentsNote extends Model {
        static associate(models) {
            instrumentsNote.belongsTo(models.instrument);
        }
    }

    instrumentsNote.init({
        instrumentId: {
            type: DataTypes.INTEGER,
            references: {
                model: "instruments",
                key: "id"
            }
        },
        a: {
            type: DataTypes.STRING
        },
        b: {
            type: DataTypes.STRING
        },
        c: {
            type: DataTypes.STRING
        },
        d: {
            type: DataTypes.STRING
        },
        e: {
            type: DataTypes.STRING
        },
        f: {
            type: DataTypes.STRING
        },
        g: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'instrumentsNote',
    });
    return instrumentsNote;
};
const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../../utils/db/connection');
const { activeState, statesValues } = require('../../../utils/core/constants');

class Income extends Model { }

Income.init(
    {
        idPointMachine: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idUser: {
            type: DataTypes.STRING,
        },
        date: {
            type: DataTypes.STRING,
        },
        amount: {
            type: DataTypes.STRING,
        },
        typeIncome: {
            type: DataTypes.STRING,
        },
        isApproved: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.CHAR(1),
            defaultValue: activeState,
            validate: {isIn: statesValues}
        }
    },
    {
        sequelize,
        modelName: 'Income',
    },
);

module.exports = Income
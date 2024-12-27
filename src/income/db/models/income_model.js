const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../../utils/db/connection');
const { activeState, statesValues, typesIncome, forceModel } = require('../../../utils/core/constants');
const User = require('../../../user/db/models/user_model');
const PointMachine = require('../../../point_machine/db/models/point_machine_model');

class Income extends Model { }

Income.init(
    {
        description: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Date.now(),
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        typeIncome: {
            type: DataTypes.ENUM(typesIncome),
            allowNull: false,
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

(async () => {
    await Income.sync({force: false})
})();

Income.belongsTo(PointMachine, { foreignKey : 'idPointMachine'})
Income.belongsTo(User, { foreignKey : 'idUser'})

module.exports = Income
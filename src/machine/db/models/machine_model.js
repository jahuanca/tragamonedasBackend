const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../../utils/db/connection');
const { forceModel, statesValues, activeState, currenciesMachine, defaultCurrencyMachine } = require('../../../utils/core/constants');

class Machine extends Model { }

Machine.init(
    {
        name: {
        type: DataTypes.STRING(50),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(200),
        },
        observation: {
            type: DataTypes.STRING(200),
        },
        purchaseDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        currencyValue: {
            type: DataTypes.ENUM(
                currenciesMachine,
            ),
            defaultValue: defaultCurrencyMachine,
        },
        image: {
            type: DataTypes.STRING(200),
        },
        state: {
            type: DataTypes.CHAR(1),
            defaultValue: activeState,
            validate: {isIn: statesValues}
        }
    },
    {
        sequelize,
        modelName: 'Machine',
    },
);

(async () => {
    await sequelize.sync({ force: forceModel });
})();

module.exports = Machine
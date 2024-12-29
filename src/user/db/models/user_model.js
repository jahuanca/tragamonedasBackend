const { DataTypes, Model } = require('sequelize');
const {
    sequelize,
} = require('./../../../utils/db/connection');
const { forceModel, activeState, statesValues } = require('../../../utils/core/constants');

class User extends Model { }

User.init(
    {
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING(9),
            allowNull: false,
        },
        state: {
            type: DataTypes.CHAR(1),
            defaultValue: activeState,
            validate: {isIn: statesValues}
        }
    },
    {
        paranoid: true,
        sequelize,
        modelName: 'User',
    },
);

(async () => {
    await User.sync({ force: forceModel });
})();

module.exports = User
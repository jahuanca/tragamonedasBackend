const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../../utils/db/connection');
const { activeState, statesValues, forceModel } = require('../../../utils/core/constants');

class Point extends Model { }

Point.init(
  {
    alias: {
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
    address: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    latitude: {
      type: DataTypes.STRING(20),
    },
    longitude: {
      type: DataTypes.STRING(20),
    },
    phoneNumber: {
      type: DataTypes.STRING(9),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
    },
    porcentage: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    hasPointMachine: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    hasPointMachine: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    payWeekly: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    state: {
      type: DataTypes.CHAR(1),
      defaultValue: activeState,
      validate: { isIn: statesValues }
    }
  },
  {
    paranoid: true,
    sequelize,
    modelName: 'Point',
  },
);

(async () => {
  await Point.sync({ force: forceModel });
})();

module.exports = Point
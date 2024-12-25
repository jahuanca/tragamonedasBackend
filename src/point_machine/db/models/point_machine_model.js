const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../../utils/db/connection');
const { forceModel, activeState, statesValues } = require('../../../utils/core/constants');
const Point = require('../../../point/db/models/point_model');

class PointMachine extends Model { }

PointMachine.init(
    {
        idPoint: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idMachine: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        porcentage: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        state: {
            type: DataTypes.CHAR(1),
            defaultValue: activeState,
            validate: { isIn: statesValues }
        }
    },
    {
        sequelize,
        modelName: 'PointMachine',
    },
);

(async () => {
    await sequelize.sync({ force: forceModel });
})();

PointMachine.Point = PointMachine.belongsTo(Point);

module.exports = PointMachine
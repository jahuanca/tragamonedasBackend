const Point = require("../../point/db/models/point_model");
const { sequelize } = require("../../utils/db/connection");

const createPointMachineRepository = async ({
    idPoint,
    idMachine,
    porcentage,
}) => {
    const t = await sequelize.transaction()

    const point = await Point.findByPk(idPoint, {
        transaction: t
    })
    point.hasPointMachine = true
    await point.save({ transaction: t })

    const machine = await Machine.findByPk(idMachine, {
        transaction: t
    })
    machine.hasPointMachine = true
    await machine.save({ transaction: t })
    const pointMachine = await PointMachine.create({
        idPoint,
        idMachine,
        porcentage,
    }, { transaction: t })
    await t.commit()
    return pointMachine
}

module.exports = createPointMachineRepository
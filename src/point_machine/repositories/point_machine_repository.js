const Machine = require("../../machine/db/models/machine_model");
const Point = require("../../point/db/models/point_model");
const { sequelize } = require("../../utils/db/connection");
const PointMachine = require("../db/models/point_machine_model");

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

const getPointsMachineRepository = () => PointMachine.findAll({
    include: [
        {model: Point, required: true},
        {model: Machine, required: true}
    ]
})

module.exports = {
    getPointsMachineRepository,
    createPointMachineRepository,
}
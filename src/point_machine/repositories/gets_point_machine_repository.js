const Machine = require("../../machine/db/models/machine_model")
const Point = require("../../point/db/models/point_model")
const PointMachine = require("../db/models/point_machine_model")

const getPointsMachineRepository = () => PointMachine.findAll({
    include: [
        { model: Point, required: true },
        { model: Machine, required: true }
    ]
})

module.exports = getPointsMachineRepository
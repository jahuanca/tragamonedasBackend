const PointMachine = require("../db/models/point_machine_model");

const createPointMachineRepository = ({
    idPoint,
    idMachine,
    porcentage,
})=> PointMachine.create({
    idPoint,
    idMachine,
    porcentage,
})

module.exports = {
    createPointMachineRepository,
}
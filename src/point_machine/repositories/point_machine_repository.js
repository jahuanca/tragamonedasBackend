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

const getPointsMachineRepository = ()=> PointMachine.findAll({
    include: {all:true}
})

module.exports = {
    getPointsMachineRepository,
    createPointMachineRepository,
}
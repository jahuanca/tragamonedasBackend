const {
    createPointMachineRepository,
} = require("../repositories/point_machine_repository");

const createPointMachineUseCaseExecute = ({
    idPoint,
    idMachine,
    porcentage,
})=> createPointMachineRepository({
    idPoint,
    idMachine,
    porcentage,
})

module.exports = createPointMachineUseCaseExecute
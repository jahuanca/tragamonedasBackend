const {
    createPointMachineRepository,
} = require("../repositories");

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
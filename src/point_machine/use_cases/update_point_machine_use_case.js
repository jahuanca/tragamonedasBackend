const { updatePointMachineRepository } = require('./../repositories')

const updatePointMachineExecute = ({
    id,
    idMachine,
    idPoint,
    porcentage,
}) => updatePointMachineRepository({
    id,
    idMachine,
    idPoint,
    porcentage,
})

module.exports = updatePointMachineExecute
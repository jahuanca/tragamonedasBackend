const { getMachinesRepository } = require("../repositories/machine_repository");

const getMachinesUseCaseExecute = ({
    hasPointMachine,
}) => getMachinesRepository({
    hasPointMachine
})

module.exports = getMachinesUseCaseExecute
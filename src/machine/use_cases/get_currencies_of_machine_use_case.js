const { getCurrenciesRepository } = require("../repositories/machine_repository")

const getCurrenciesOfMachineUseCaseExecute = () => getCurrenciesRepository()

module.exports = getCurrenciesOfMachineUseCaseExecute
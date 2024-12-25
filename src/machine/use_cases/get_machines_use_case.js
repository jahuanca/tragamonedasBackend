const { getMachinesRepository } = require("../repositories/machine_repository");

const getMachinesUseCaseExecute = () => getMachinesRepository()

module.exports = getMachinesUseCaseExecute
const { getPointsMachineRepository } = require("../repositories/point_machine_repository");

const getPointsMachineUseCaseExecute = ()=> getPointsMachineRepository()

module.exports = getPointsMachineUseCaseExecute
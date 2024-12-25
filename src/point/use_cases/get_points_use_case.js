const { getPointsRepository } = require("../repositories/point_repository");

const getPointsUseCaseExecute = ()=> getPointsRepository()

module.exports = getPointsUseCaseExecute
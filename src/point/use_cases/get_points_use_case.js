const { getPointsRepository } = require("../repositories/point_repository");

const getPointsUseCaseExecute = ({
    hasPointMachine,
})=> getPointsRepository({
    hasPointMachine,
})

module.exports = getPointsUseCaseExecute
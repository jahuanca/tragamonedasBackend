const { getIncomesRepository } = require("../repositories/income_repository");

const getIncomesUseCaseExecute = ()=> getIncomesRepository()

module.exports = getIncomesUseCaseExecute
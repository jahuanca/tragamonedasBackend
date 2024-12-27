const {getTypesIncomeRepository} = require("../repositories/income_repository");

const getTypesIncomeUseCaseExecute = ()=> getTypesIncomeRepository()

module.exports = getTypesIncomeUseCaseExecute
const { createIncomeRepository } = require("../repositories/income_repository");

const createIncomeUseCaseExecute = ({
    description,
    date,
    amount,
    typeIncome,
    idUser,
    idPointMachine,
    hasExit,
})=> createIncomeRepository({
    description,
    date,
    amount,
    typeIncome,
    idUser,
    idPointMachine,
    hasExit,
})

module.exports = createIncomeUseCaseExecute
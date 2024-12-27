const { createIncomeRepository } = require("../repositories/income_repository");

const createIncomeUseCaseExecute = ({
    description,
    date,
    amount,
    typeIncome,
    idUser,
    idPointMachine,
})=> createIncomeRepository({
    description,
    date,
    amount,
    typeIncome,
    idUser,
    idPointMachine,
})

module.exports = createIncomeUseCaseExecute
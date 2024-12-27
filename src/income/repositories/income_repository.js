const { typesIncome } = require("../../utils/core/constants");
const Income = require("../db/models/income_model");

const getTypesIncomeRepository = () => typesIncome

const getIncomesRepository = ()=> Income.findAll() 

const createIncomeRepository = ({
    description,
    date,
    amount,
    typeIncome,
    idUser,
    idPointMachine,
}) => Income.create({
    description,
    date,
    amount,
    typeIncome,
    idUser,
    idPointMachine,
})

module.exports = { 
    getTypesIncomeRepository, 
    createIncomeRepository,
    getIncomesRepository,
}
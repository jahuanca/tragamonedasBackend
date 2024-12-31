const { typesIncome } = require("../../utils/core/constants");
const { initialOfDay, finalOfDay } = require("../../utils/core/helpers");
const Income = require("../db/models/income_model");
const { Op } = require("sequelize");

const getTypesIncomeRepository = () => typesIncome

const getIncomesRepository = ({
    idPointMachine,
    firstDate,
    lastDate,
}) => {
    let where = {}
    if (idPointMachine) where.idPointMachine = idPointMachine
    if (firstDate && lastDate) {
        const first = initialOfDay(firstDate);
        const last = finalOfDay(lastDate);
        where.date = { [Op.between]: [first, last] }
    }
    return Income.findAll({ where: where, order: [['date', 'DESC']] })
}

const createIncomeRepository = ({
    description,
    date,
    amount,
    typeIncome,
    idUser,
    idPointMachine,
    hasExit,
}) => Income.create({
    description,
    date,
    amount,
    typeIncome,
    idUser,
    idPointMachine,
    hasExit,
})

module.exports = {
    getTypesIncomeRepository,
    createIncomeRepository,
    getIncomesRepository,
}
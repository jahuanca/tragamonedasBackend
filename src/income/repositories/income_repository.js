const Point = require("../../point/db/models/point_model");
const PointMachine = require("../../point_machine/db/models/point_machine_model");
const { typesIncome } = require("../../utils/core/constants");
const { initialOfDay, finalOfDay } = require("../../utils/core/helpers");
const Income = require("../db/models/income_model");
const { Op } = require("sequelize");

const getTypesIncomeRepository = () => typesIncome

const getIncomesRepository = ({
    idPointMachine,
    firstDate,
    lastDate,
    includeModels,
}) => {
    const options = { 
        order: [['date', 'DESC']],
    };
    const where = {}
    if (idPointMachine) {
        where.idPointMachine = idPointMachine
        options.where = where
    }
    if (firstDate && lastDate) {
        const first = initialOfDay(firstDate);
        const last = finalOfDay(lastDate);
        where.date = { [Op.between]: [first, last] }
        options.where = where
    }
    if(includeModels){
        options.include = [
            {model: PointMachine, require: true, include : [{model: Point}]}
        ]
    }
    return Income.findAll(options)
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
const { currenciesMachine } = require("../../utils/core/constants");
const Machine = require("../db/models/machine_model");

const createMachineRepository = ({
    name,
    description,
    observation,
    purchaseDate,
    currencyValue,
    image,
}) => Machine.create({
    name,
    description,
    observation,
    purchaseDate,
    currencyValue,
    image,
})

const getMachinesRepository = ({
    hasPointMachine,
}) => {
    const where = {}
    if(hasPointMachine != undefined) where.hasPointMachine = hasPointMachine;
    return Machine.findAll({
        where: where,
    });
}

const getCurrenciesRepository = () => currenciesMachine

module.exports = {
    createMachineRepository,
    getCurrenciesRepository,
    getMachinesRepository,
}
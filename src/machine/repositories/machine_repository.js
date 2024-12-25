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

const getMachinesRepository = () => Machine.findAll()

const getCurrenciesRepository = () => currenciesMachine

module.exports = {
    createMachineRepository,
    getCurrenciesRepository,
    getMachinesRepository,
}
const { getIncomesRepository } = require("../repositories/income_repository");

const getIncomesUseCaseExecute = ({
    idPointMachine,
    firstDate,
    lastDate,
})=> getIncomesRepository({
    idPointMachine,
    firstDate,
    lastDate,
})

module.exports = getIncomesUseCaseExecute
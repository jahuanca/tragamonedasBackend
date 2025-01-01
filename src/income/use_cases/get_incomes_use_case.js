const { getIncomesRepository } = require("../repositories/income_repository");

const getIncomesUseCaseExecute = ({
    idPointMachine,
    firstDate,
    lastDate,
    includeModels,
})=> getIncomesRepository({
    idPointMachine,
    firstDate,
    lastDate,
    includeModels,
})

module.exports = getIncomesUseCaseExecute
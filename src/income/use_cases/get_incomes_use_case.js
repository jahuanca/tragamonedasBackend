const { getIncomesRepository } = require("../repositories/income_repository");

const getIncomesUseCaseExecute = ({
    idPointMachine,
})=> getIncomesRepository({
    idPointMachine,
})

module.exports = getIncomesUseCaseExecute
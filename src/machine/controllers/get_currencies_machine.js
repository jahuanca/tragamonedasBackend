const getCurrenciesOfMachineUseCaseExecute = require("../use_cases/get_currencies_of_machine_use_case")

const getCurrenciesMachineController = (req, res)=> {
    const values = getCurrenciesOfMachineUseCaseExecute();
    return res.status(200).json(values)
}

module.exports = getCurrenciesMachineController
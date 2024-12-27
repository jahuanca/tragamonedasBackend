const getTypesIncomeUseCaseExecute = require("../use_cases/get_types_income_use_case")

const getTypesIncomeController = (req, res)=> {
    
    return res.status(200).json(
        getTypesIncomeUseCaseExecute()
    )
}

module.exports = getTypesIncomeController
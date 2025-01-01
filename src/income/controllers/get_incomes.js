const { getPromise } = require("../../utils/core/helpers")
const getIncomesUseCaseExecute = require("../use_cases/get_incomes_use_case")

const getIncomesController = async (req, res)=> {
    const {
        idPointMachine,
        firstDate,
        lastDate,
        includeModels,
    } = req.query
    const [err, incomes] = await getPromise(getIncomesUseCaseExecute({
        idPointMachine,
        firstDate,
        lastDate,
        includeModels,
    }))
    if(err) return res.status(500).json(err)
    return res.status(200).json(incomes)
}

module.exports = getIncomesController
const { getPromise } = require("../../utils/core/helpers")
const getMachinesUseCaseExecute = require("../use_cases/get_machines_use_case")

const getMachinesController =  async (req, res) => {
    const {
        hasPointMachine
    } = req.query
    const [err, machines] = await getPromise(getMachinesUseCaseExecute({
        hasPointMachine,
    }))
    if(err) return res.status(500).json(err)
    return res.status(200).json(machines)
}

module.exports = getMachinesController
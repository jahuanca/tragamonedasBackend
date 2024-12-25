const { getPromise } = require("../../utils/core/helpers")
const createPointMachineUseCaseExecute = require("../use_cases/create_point_machine_use_case")

const createPointMachineController = async (req, res) => {
    const {
        idPoint,
    idMachine,
    porcentage,
    } = req.body
    const [err, pointMachine] = await getPromise(createPointMachineUseCaseExecute({
        idPoint,
    idMachine,
    porcentage,
    }))
    if(err) return res.status(500).json(err)
    return res.status(200).json(pointMachine)
}

module.exports = createPointMachineController
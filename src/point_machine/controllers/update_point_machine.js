const { getPromise } = require("../../utils/core/helpers")
const updatePointMachineExecute = require("../use_cases/update_point_machine_use_case")

const updatePointMachineController = async (req, res) => {
    const {
        id,
        idMachine,
        idPoint,
        porcentage,
    } = req.body

    const [err, pointMachine] = await getPromise(updatePointMachineExecute({
        id,
        idMachine,
        idPoint,
        porcentage,
    }))
    if (err) return res.status(500).json({message: err.message})
    return res.status(200).json(pointMachine)
}

module.exports = updatePointMachineController
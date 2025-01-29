const { getPromise } = require("../../utils/core/helpers")
const deletePointMachineExecute = require("../use_cases/delete_point_machine_use_case")

const deletePointMachineController = async (req, res) => {
    const {id} = req.params

    const [err, pointMachine] = await getPromise(deletePointMachineExecute({id}))
    if (err) return res.status(500).json({message: err.message})
    return res.status(200).json(pointMachine)
}

module.exports = deletePointMachineController
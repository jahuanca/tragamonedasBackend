const { getPromise } = require("../../utils/core/helpers")
const getPointsMachineUseCaseExecute = require("../use_cases/get_points_machine_use_case")

const getPointsMachineController = async (req, res)=> {
    const [err, pointsMachine] = await getPromise(getPointsMachineUseCaseExecute())
    if(err) return res.status(500).json(err)
    return res.status(200).json(pointsMachine)
}

module.exports = getPointsMachineController
const { getPromise } = require("../../utils/core/helpers")
const getPointsUseCaseExecute = require("../use_cases/get_points_use_case")

const getPointsController = async (req, res)=> {
    const {
        hasPointMachine,
    } = req.query
    const [err, points] = await getPromise(getPointsUseCaseExecute({
        hasPointMachine,
    }))
    if(err) return res.status(500).json(err)
    return res.status(200).json(points)
}

module.exports = getPointsController
const { getPromise } = require("../../utils/core/helpers")
const createPointUseCaseExecute = require("../use_cases/create_point_use_case")

const createPointController = async (req, res) => {
    const {
        alias,
        firstName,
        lastName,
        address,
        latitude,
        longitude,
        phoneNumber,
        email,
        porcentage,
    } = req.body

    const [err, point] = await getPromise(createPointUseCaseExecute(
        {
            alias,
            firstName,
            lastName,
            address,
            latitude,
            longitude,
            phoneNumber,
            email,
            porcentage,
        }
    ))
    if (err) return res.status(500).json(err)
    return res.status(200).json(point)
}

module.exports = createPointController
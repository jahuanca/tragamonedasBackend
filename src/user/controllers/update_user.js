const { getPromise } = require("../../utils/core/helpers")
const updateUserUseCaseExecute = require("../use_cases/update_user_use_case")

const updateUserController = async (req, res) => {
    const {
        id,
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
    } = req.body
    const [err, user] = await getPromise(updateUserUseCaseExecute(
        {
            id,
            email,
            password,
            firstName,
            lastName,
            phoneNumber,
        }
    ))
    if (err) return res.status(500).json(err)
    res.status(200).json(user)
}

module.exports = updateUserController
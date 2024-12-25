const { getPromise } = require("../../utils/core/helpers")
const createUserUseCaseExecute = require("../use_cases/create_user_use_case")

const createUserController = async (req, res) => {
    const {
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
    } = req.body
    const [err, user] = await getPromise(createUserUseCaseExecute(
        {
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

module.exports = createUserController
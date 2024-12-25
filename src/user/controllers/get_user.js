const { getPromise } = require("../../utils/core/helpers")
const getUserUseCaseExecute = require("../use_cases/get_user_use_case")

const getUsersController = async (req, res) => {
    const [err, users] = await getPromise(getUserUseCaseExecute())
    res.status(200).json(users)
}

module.exports = getUsersController
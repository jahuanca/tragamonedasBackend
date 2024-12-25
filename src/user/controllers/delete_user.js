const { getPromise } = require("../../utils/core/helpers");
const deleteUserCaseExecute = require("../use_cases/delete_user_use_case");

const deleteUserController = async (req, res) => {
    const [err, user] = await getPromise(deleteUserCaseExecute())
    if(err) res.status(200).json(err)
    res.status(200).json(user)
}

module.exports = deleteUserController
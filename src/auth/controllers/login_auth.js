const { getPromise } = require("../../utils/core/helpers");
const loginUseCaseExecute = require("../use_cases/login_use_case");

const loginAuthController = async (req, res) => {
    let { email, password } = req.body;
    const [err, user] = await getPromise(loginUseCaseExecute(email, password))
    if (err) return res.status(500).json(err)
    return res.status(200).json(user)
}

module.exports = loginAuthController
const loginRepository = require("../repositories/auth_repository");

const loginUseCaseExecute = (
    email,
    password,
) => loginRepository(email, password)

module.exports = loginUseCaseExecute
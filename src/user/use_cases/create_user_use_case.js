const { createUserRepository } = require("../repositories/user_repository");


const createUserUseCaseExecute = (
    {
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
    }
) => createUserRepository({
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
})

module.exports = createUserUseCaseExecute
const { updateUserRepository } = require("../repositories/user_repository");

const updateUserUseCaseExecute = (
    {
        id,
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
    }
) => updateUserRepository({
    id,
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
})

module.exports = updateUserUseCaseExecute
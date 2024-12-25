const User = require("../db/models/user_model");

const getUserRepository = () => User.findAll()
const createUserRepository = ({
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
}) => User.create({
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
})

const updateUserRepository = async ({
    id,
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
}) => {
    new Promise(async (success, fail) => {
        try {
            let user = await User.findByPk(id)
            user.email = email
            user.password = password
            user.firstName = firstName
            user.lastName = lastName
            user.phoneNumber = phoneNumber
            await user.save()
            success(user)
        } catch (error) {
            fail(error)
        }
    });
}

const deleteUserRepository = (id) => {
    new Promise(async (success, fail) => {
        try {
            let user = await User.findByPk(id)
            await user.destroy();
            success(user)
        } catch (error) {
            fail(error)
        }
    })   
}

module.exports = {
    getUserRepository,
    createUserRepository,
    updateUserRepository,
    deleteUserRepository,
}
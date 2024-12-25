const createUserController = require("./create_user");
const deleteUserController = require("./delete_user");
const getUsersController = require("./get_user");
const updateUserController = require("./update_user");


module.exports = {
    getUsersController,
    createUserController,
    updateUserController,
    deleteUserController,
}
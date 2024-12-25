const { deleteUserRepository } = require("../repositories/user_repository");

const deleteUserCaseExecute = (id) => deleteUserRepository(id)

module.exports = deleteUserCaseExecute
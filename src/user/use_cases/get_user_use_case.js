const { getUserRepository } = require("../repositories/user_repository");

const getUserUseCaseExecute = async () => await getUserRepository()

module.exports = getUserUseCaseExecute
const { where } = require("sequelize");
const User = require("../../user/db/models/user_model");

const loginRepository = (
    email,
    password,
)=> User.findOne({
    where: {email, password}
})

module.exports = loginRepository
const { Router } = require("express");
const { loginAuthController } = require('./../controllers/auth_controller');
const { postLoginUrl } = require("../core/auth_urls");

const authRoutes = Router()

authRoutes.post(postLoginUrl, loginAuthController)

module.exports = authRoutes
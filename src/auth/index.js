const { authModuleUrl } = require("../utils/core/modules_urls")
const authRoutes = require("./routes/auth_routes")

const setModuleAuth = (server) => {
    server.use(authModuleUrl, authRoutes)
}

module.exports = setModuleAuth
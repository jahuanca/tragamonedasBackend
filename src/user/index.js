const { getUserUrl } = require('./core/user_urls')
const userRoute = require('./routes/user_route')

const setModuleUser = (server) => {
    server.use(getUserUrl, userRoute)
}

module.exports = setModuleUser
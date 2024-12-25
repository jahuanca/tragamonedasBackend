const pointRoutes = require("./routes/point_routes")

const setModulePoint = (server) => {
    server.use('/point', pointRoutes)
}

module.exports = setModulePoint
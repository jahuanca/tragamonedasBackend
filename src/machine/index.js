const machineRoutes = require("./routes/machine_routes")

const setModuleMachine = (server) => {
    server.use('/machine', machineRoutes)
}

module.exports = setModuleMachine
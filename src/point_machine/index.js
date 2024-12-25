const pointMachineRoutes = require("./routes/point_machine_routes")

const setModulePointMachine = (server) => {
    server.use('/point-machine', pointMachineRoutes)
}

module.exports = setModulePointMachine
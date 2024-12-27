const incomeRoutes = require("./routes/income_routes")

const setModuleIncome = (server)=> {
    server.use('/income', incomeRoutes)
}   

module.exports = setModuleIncome
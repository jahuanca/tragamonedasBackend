const { Router } = require("express");
const { 
    createMachineController, 
    getCurrenciesMachineController, 
    getMachinesController,
} = require("../controllers/machine_controller");

const machineRoutes = Router()

machineRoutes.get('/', getMachinesController)
machineRoutes.post('/create', createMachineController)
machineRoutes.get('/currency-values', getCurrenciesMachineController)

module.exports = machineRoutes
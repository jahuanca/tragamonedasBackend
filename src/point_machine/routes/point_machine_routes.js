const { Router } = require("express");
const {
    createPointMachineController,
} = require("../controllers/point_machine_controller");

const pointMachineRoutes = Router()

pointMachineRoutes.post('/create', createPointMachineController)

module.exports = pointMachineRoutes
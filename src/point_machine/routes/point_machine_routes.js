const { Router } = require("express");
const {
    getPointsMachineController,
    createPointMachineController,
} = require("../controllers/point_machine_controller");

const pointMachineRoutes = Router()

pointMachineRoutes.get('/', getPointsMachineController)
pointMachineRoutes.post('/create', createPointMachineController)

module.exports = pointMachineRoutes
const { Router } = require("express");
const {
    getPointsMachineController,
    createPointMachineController,
    updatePointMachineController,
    deletePointMachineController,
} = require("../controllers");

const pointMachineRoutes = Router()

pointMachineRoutes.get('/', getPointsMachineController)
pointMachineRoutes.post('/create', createPointMachineController)
pointMachineRoutes.put('/update', updatePointMachineController)
pointMachineRoutes.delete('/delete', deletePointMachineController)

module.exports = pointMachineRoutes
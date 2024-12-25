const { Router } = require("express");
const { 
    createPointController,
    getPointsController,
 } = require("../controllers/point_controller");

const pointRoutes = Router()

pointRoutes.get('/', getPointsController)
pointRoutes.post('/create', createPointController)

module.exports = pointRoutes
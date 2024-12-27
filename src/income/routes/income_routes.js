const { Router } = require("express");
const {
    getIncomesController,
    getTypesIncomeController,
    createIncomeController,
} = require("../controllers/income_controller");

const incomeRoutes = Router()

incomeRoutes.get('/', getIncomesController)
incomeRoutes.post('/create', createIncomeController)
incomeRoutes.get('/types-income', getTypesIncomeController)

module.exports = incomeRoutes
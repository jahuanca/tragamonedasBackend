const { Router } = require("express");
const {
    getTypesIncomeController
} = require("../controllers/income_controller");

const incomeRoutes = Router()

incomeRoutes.get('/types-income', getTypesIncomeController)

module.exports = incomeRoutes
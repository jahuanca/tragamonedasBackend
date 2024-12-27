const { typeIncomeExit, typeIncomeInsert } = require("../../utils/core/constants")
const { getPromise } = require("../../utils/core/helpers")
const createIncomeUseCaseExecute = require("../use_cases/create_income_use_case")

const createIncomeController = async (req, res) => {
    const {
        date,
        amount,
        typeIncome,
        idUser,
        idPointMachine,
        
        description,
        withPayForClient,
        payForClient,
    } = req.body
    if (typeIncome == typeIncomeInsert && withPayForClient) {
        //create first ingreso
        const [errInsert, insertMoney] = await getPromise(createIncomeUseCaseExecute({
            description: 'Ingreso de dinero por retiro a maquina',
            date,
            amount,
            typeIncome,
            idUser: 1,
            idPointMachine,
        }))
        if (errInsert) return res.status(500).json(errInsert)
        const [errExit, exitMoney] = await getPromise(createIncomeUseCaseExecute({
            description: 'Salida de dinero por pago a cliente',
            date,
            amount: payForClient,
            typeIncome: typeIncomeExit,
            idUser: 1,
            idPointMachine,
        }))
        if (errExit) return res.status(500).json(errExit)
        return res.status(200).json(insertMoney)
        //create second salida
    } else {
        const [errExit, exitMoney] = await getPromise(createIncomeUseCaseExecute({
            description,
            date,
            amount,
            typeIncome,
            idUser,
            idPointMachine,
        }))
        if (errInsert) return res.status(500).json(errInsert)
        return res.status(200).json(exitMoney)
    }
}

module.exports = createIncomeController
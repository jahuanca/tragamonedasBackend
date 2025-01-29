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
    if (typeIncome == typeIncomeInsert) {
        const [errInsert, insertMoney] = await getPromise(createIncomeUseCaseExecute({
            description: 'Ingreso de dinero por retiro a maquina',
            date,
            amount,
            typeIncome,
            idUser: 1,
            idPointMachine,
            hasExit: withPayForClient ?? false,
        }))
        if (errInsert) return res.status(500).json(errInsert)
        if (withPayForClient) {
            const [errExit, exitMoney] = await getPromise(createIncomeUseCaseExecute({
                description: 'Pago a cliente',
                date,
                amount: payForClient,
                typeIncome: typeIncomeExit,
                hasExit: true,
                idUser: 1,
                idPointMachine,
            }))
            if (errExit) return res.status(500).json(errExit)
        }
        return res.status(200).json(insertMoney)
    } else {
        const [errExit, exitMoney] = await getPromise(createIncomeUseCaseExecute({
            description,
            date,
            amount,
            typeIncome,
            idUser,
            hasExit: true,
            idPointMachine,
        }))
        if (errExit) return res.status(500).json(errExit)
        return res.status(200).json(exitMoney)
    }
}

module.exports = createIncomeController
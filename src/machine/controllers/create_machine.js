const createMachineUseCaseExecute = require("../use_cases/create_machine_use_case")
const { getPromise } = require("../../utils/core/helpers");

const createMachineController = async (req, res) => {
    const {
        name,
        description,
        observation,
        purchaseDate,
        currencyValue,
        image,
    } = req.body

    const [err, machine] = await getPromise(createMachineUseCaseExecute({
        name,
        description,
        observation,
        purchaseDate,
        currencyValue,
        image,
    }))
    if(err) return res.status(500).json(err)
    return res.status(200).json(machine)
} 

module.exports = createMachineController
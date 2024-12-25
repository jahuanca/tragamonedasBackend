const {
    createMachineRepository
} = require("../repositories/machine_repository");

const createMachineUseCaseExecute = ({
    name,
    description,
    observation,
    purchaseDate,
    currencyValue,
    image,
}) => createMachineRepository({
    name,
    description,
    observation,
    purchaseDate,
    currencyValue,
    image,
})

module.exports = createMachineUseCaseExecute
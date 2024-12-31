const {
    createPointRepository
} = require("../repositories/point_repository");

const createPointUseCaseExecute = ({
    alias,
    firstName,
    lastName,
    address,
    latitude,
    longitude,
    phoneNumber,
    email,
    porcentage,
    payWeekly,
}) => createPointRepository({
    alias,
    firstName,
    lastName,
    address,
    latitude,
    longitude,
    phoneNumber,
    email,
    porcentage,
    payWeekly,
})

module.exports = createPointUseCaseExecute
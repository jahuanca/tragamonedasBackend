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
})

module.exports = createPointUseCaseExecute
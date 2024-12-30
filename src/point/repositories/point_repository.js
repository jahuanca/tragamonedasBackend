const Point = require("../db/models/point_model");

const createPointRepository = ({
    alias,
    firstName,
    lastName,
    address,
    latitude,
    longitude,
    phoneNumber,
    email,
    porcentage,
})=> Point.create({
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

const getPointsRepository = ({
    hasPointMachine,
})=> Point.findAll({
    where: {hasPointMachine}
})

module.exports = {
    getPointsRepository,
    createPointRepository,
}
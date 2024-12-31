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
    payWeekly,
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
    payWeekly,
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
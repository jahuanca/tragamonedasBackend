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

const getPointsRepository = ()=> Point.findAll()

module.exports = {
    getPointsRepository,
    createPointRepository,
}
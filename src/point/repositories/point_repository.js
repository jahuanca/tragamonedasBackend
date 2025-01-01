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
})=>{
    const where = {}
    if(hasPointMachine != undefined) where.hasPointMachine = hasPointMachine;
    return  Point.findAll({
        where: where
    });
}

module.exports = {
    getPointsRepository,
    createPointRepository,
}
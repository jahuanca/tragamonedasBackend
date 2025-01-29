const PointMachine = require("../db/models/point_machine_model")

const updatePointMachineRepository = async ({
    id,
    idMachine,
    idPoint,
    porcentage,
}) => {
    const pointMachineToUpdate = await PointMachine.findByPk(id)
    if (pointMachineToUpdate == null) throw Error('No se encontro registro')
    pointMachineToUpdate.idMachine = idMachine
    pointMachineToUpdate.idPoint = idPoint
    pointMachineToUpdate.porcentage = porcentage

    await pointMachineToUpdate.save()
    return pointMachineToUpdate
}

module.exports = updatePointMachineRepository
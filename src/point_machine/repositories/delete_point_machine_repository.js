const PointMachine = require("../db/models/point_machine_model")

const deletePointMachineRepository = async ({ id }) => {
    const pointMachineToDelete = await PointMachine.findByPk(id)
    if (pointMachineToDelete == null) throw Error('No se encontro registro')
    await pointMachineToDelete.destroy()
    return pointMachineToDelete
}

module.exports = deletePointMachineRepository
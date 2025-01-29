const { deletePointMachineRepository } = require('./../repositories')

const deletePointMachineExecute = ({id}) => deletePointMachineRepository({id})

module.exports = deletePointMachineExecute
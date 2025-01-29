const createPointMachineRepository = require("./create_point_machine_repository");
const deletePointMachineRepository = require("./delete_point_machine_repository");
const getPointsMachineRepository = require("./gets_point_machine_repository");
const updatePointMachineRepository = require("./update_point_machine_repository");

module.exports = {
    getPointsMachineRepository,
    createPointMachineRepository,
    updatePointMachineRepository,
    deletePointMachineRepository,
}
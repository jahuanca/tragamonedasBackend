const createPointMachineController = require("./create_point_machine");
const deletePointMachineController = require("./delete_point_machine");
const getPointsMachineController = require("./get_points_machine");
const updatePointMachineController = require("./update_point_machine");

module.exports = {
    getPointsMachineController,
    createPointMachineController,
    updatePointMachineController,
    deletePointMachineController,
}
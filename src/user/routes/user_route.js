const { Router } = require("express");
const {
    createUserController,
    getUsersController,
    updateUserController,
} = require('./../controllers/user_controller');

const router = Router()

router.get('/', getUsersController)
router.post('/create', createUserController)
router.put('/update', updateUserController)

module.exports = router
const express = require('express')
const setModuleUser = require('./user')
const { startConnection } = require('./utils/db/connection')
const setMiddleware = require('./utils/core/middlewares')
const setModuleAuth = require('./auth')
const setModuleMachine = require('./machine')
const setModulePoint = require('./point')
const setModulePointMachine = require('./point_machine')
const app = express()

startConnection()
setMiddleware(app)
setModuleUser(app)
setModuleAuth(app)
setModulePointMachine(app)
setModuleMachine(app)
setModulePoint(app)

module.exports = app
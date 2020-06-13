const express = require('express')
const routes = express.Router()
const controller = require('../controllers/instructorController')


routes.get('/instructors', controller.viewIndex)

routes.post('/instructors', controller.createInstructor)

routes.get('/instructors/create', controller.viewFormInstructor)
routes.get('/members', controller.viewMembers)


module.exports = routes
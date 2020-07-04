const express = require('express')
const routes = express.Router()
const controller = require('../controllers/instructorController')


routes.get('/', controller.viewIndex)
routes.get('/instructors', controller.viewIndex)
routes.post('/instructors', controller.createInstructor)
routes.get('/instructors/create', controller.viewFormInstructor)
routes.get('/instructors/:id', controller.viewInstructors)
routes.get('/instructors/:id/edit', controller.editInstructor)
routes.get('/members', controller.viewMembers)


module.exports = routes
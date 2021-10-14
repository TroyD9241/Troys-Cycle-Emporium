const router = require('express').Router();
const asyncHandler = require('express-async-handler')
const Repair = require('../../models/Repair');

//GET all scheduled repair appointments http://localhost:3000/api/repairs
router.get('/', asyncHandler(async (request, response, next) => {
    const repairs = await Repair.find();
    response.json(repairs)
}))

// POST new repair appointment to the database http://localhost:3000/api/repairs
router.post('/', asyncHandler(async (request, response, next) => {
    const { completed, repairInstructions, appointmentDate, preferredContactMethod } = request.body
    const repair = new Repair({
        completed: completed,
        repairInstructions: repairInstructions,
        appointmentDate: appointmentDate,
        preferredContactMethod: preferredContactMethod
    })
    await repair.save()
    response.json('confirmed!')
}))

// GET a single repair appointment by ID http://localhost:3000/api/repairs/1
router.get('/:id', asyncHandler(async (request, response, next) => {
    const repairAppointment = await Repair.findById(request.params.id)
    response.json(repairAppointment)
}))

// PUT edit repair info by ID(update) http://localhost:3000/api/repairs/1
router.put('/:{id}', asyncHandler(async (request, response, next) => {
    response.send('testing PUT Route to api/repairs/{id}')
}))

// DELETE repair by ID http://localhost:3000/api/repairs/1
router.delete('/:{id}', asyncHandler(async (request, response, next) => {
    response.send('testing DELETE Route to api/repairs/{id}')
}))

// POST repair date change by ID http://localhost:3000/api/repairs/1/schedule
router.post('/:{id}/schedule', asyncHandler(async (request, response, next) => {
    response.send('testing POST Route to api/repairs/{id}/schedule')
}))

module.exports = router

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
    const { completed, repairInstructions, appointmentDate, preferredContactMethod, customerEmail } = request.body
    const repair = new Repair({
        customerEmail: customerEmail,
        completed: completed,
        repairInstructions: repairInstructions,
        appointmentDate: appointmentDate,
        preferredContactMethod: preferredContactMethod
    })
    await repair.save()
    response.json(repair)
}))

// GET a single repair appointment by ID http://localhost:3000/api/repairs/1
router.get('/:id', asyncHandler(async (request, response, next) => {
    const repairAppointment = await Repair.findById(request.params.id)
    response.json(repairAppointment)
}))

// PUT edit repair info by ID(update) http://localhost:3000/api/repairs/1
router.put('/:id', asyncHandler(async (request, response, next) => {
    const { completed, repairInstructions, appointmentDate, preferredContactMethod, customerEmail } = request.body
    const updatedRepair = await Repair.updateOne({ _id: request.params.id },
        {
            $set:
            {
                customerEmail: customerEmail,
                completed: completed,
                repairInstructions: repairInstructions,
                appointmentDate: appointmentDate,
                preferredContactMethod: preferredContactMethod
            }
        })
    response.json(updatedRepair)
}));

// DELETE repair by ID http://localhost:3000/api/repairs/1
router.delete('/:id', asyncHandler(async (request, response, next) => {
    const deletedRepair = await Repair.findByIdAndDelete({ _id: request.params.id })
    response.json(deletedRepair)
}))

// POST repair date change by ID http://localhost:3000/api/repairs/1/schedule
router.post('/:{id}/schedule', asyncHandler(async (request, response, next) => {
    response.send('testing POST Route to api/repairs/{id}/schedule')
}))

module.exports = router

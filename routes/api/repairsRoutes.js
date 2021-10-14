const router = require('express').Router();
const asyncHandler = require('express-async-handler')

//GET all scheduled repair appointments http://localhost:3000/api/repairs
router.get('/', asyncHandler(async (request, response, next) => {
    response.send('testing get route to api/repairs/')
}))

// POST new repair appointment to the database http://localhost:3000/api/repairs
router.post('/', asyncHandler(async (request, response, next) => {
    response.send('testing post route to api/repairs/')
}))

// GET a single repair appointment by ID http://localhost:3000/api/repairs/1
router.get('/:{id}', asyncHandler(async (request, response, next) => {
    response.send('testing get route to api/repairs/{id}')
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

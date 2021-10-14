const router = require('express').Router();
const asyncHandler = require('express-async-handler')

//GET all customers http://localhost:3000/api/customers
router.get('/', asyncHandler(async (request, response, next) => {
    response.json('testing get route to api/customers/')
}))

// POST a new customer to the database http://localhost:3000/api/customers
router.post('/', asyncHandler(async (request, response, next) => {
    response.send('testing post route to api/customers')
}))

// GET a single customer by ID http://localhost:3000/api/customers/1
router.get('/:{id}', asyncHandler(async (request, response, next) => {
    response.send('testing get route to api/customers/{id}')
}))

// PUT new customer information by ID(update) http://localhost:3000/api/customers/1
router.put('/:{id}', asyncHandler(async (request, response, next) => {
    response.send('testing PUT Route to api/customers/{id}/update')
}))

// DELETE customer by ID http://localhost:3000/api/customers/1
router.delete('/:{id}', asyncHandler(async (request, response, next) => {
    response.send('testing DELETE Route to api/customers/{id}')
}))

module.exports = router

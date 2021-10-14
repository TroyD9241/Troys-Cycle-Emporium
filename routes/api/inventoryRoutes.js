const router = require('express').Router();
const asyncHandler = require('express-async-handler')

//GET all items in the inventory http://localhost:3000/api/invetory
router.get('/', asyncHandler(async (request, response, next) => {
    response.send('testing get route to api/inventory/')
}))

// POST a new inventory item to the database http://localhost:3000/api/inventory
router.post('/', asyncHandler(async (request, response, next) => {
    response.send('testing post route to api/inventory')
}))

// GET a single inventory item by ID http://localhost:3000/api/inventory/1
router.get('/:{id}', asyncHandler(async (request, response, next) => {
    response.send('testing get route to api/inventory/{id}')
}))

// PUT new inventory item information by ID(update) http://localhost:3000/api/inventory/1
router.put('/:{id}', asyncHandler(async (request, response, next) => {
    response.send('testing PUT Route to api/inventory/{id}')
}))

// DELETE inventory item by ID http://localhost:3000/api/inventory/1
router.delete('/:{id}', asyncHandler(async (request, response, next) => {
    response.send('testing DELETE Route to api/inventory/{id}')
}))

module.exports = router

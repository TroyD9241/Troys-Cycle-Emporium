const router = require('express').Router();
const e = require('express');
const asyncHandler = require('express-async-handler');
const Customer = require('../../models/Customer');
//GET all customers http://localhost:3000/api/customers
router.get('/', asyncHandler(async (request, response, next) => {
    const customers = await Customer.find();
    response.json(customers)
}));

// POST a new customer to the database http://localhost:3000/api/customers
router.post('/', asyncHandler(async (request, response, next) => {
    const { name, email, phoneNumber } = request.body
    const customer = new Customer({
        name: name,
        email: email,
        phoneNumber: phoneNumber
    })
    await customer.save()
    response.json('confirmed!')
}));

// GET a single customer by ID http://localhost:3000/api/customers/1
router.get('/:id', asyncHandler(async (request, response, next) => {
    const customer = await Customer.findById(request.params.id)
    response.json(customer)
}));

// PUT new customer information by ID(update) http://localhost:3000/api/customers/1
router.put('/:id', asyncHandler(async (request, response, next) => {
    const { name, email, phoneNumber } = request.body
    const updatedCustomer = await Customer.updateOne({ _id: request.params.id },
        {
            $set:
            {
                name: name,
                email: email,
                phoneNumber: phoneNumber
            }
        })
    response.json(updatedCustomer)
}));

// DELETE customer by ID http://localhost:3000/api/customers/1
router.delete('/:id', asyncHandler(async (request, response, next) => {
    const deletedCustomer = await Customer.remove({ _id: request.params.id })
    response.json(deletedCustomer)
}));

module.exports = router;

const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const Customer = require('../../models/Customer');

// api testing go to http://localhost:3000/api-docs

/**
 * @openapi
 * components:
 *   schemas:
 *     Customer:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - phoneNumber
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the Customer
 *         name:
 *           type: string
 *           description: The customers name.
 *         email:
 *           type: string
 *           description: The customers email address.
 *         phoneNumber:
 *           type: string
 *           description: The customers phone number.
 *       example:
 *         id: d5fE_asz
 *         name: Troy
 *         email: troy@troy.com
 *         phoneNumber: '222222'
 */


//GET all customers http://localhost:3000/api/customers
router.get('/', asyncHandler(async (request, response, next) => {
    const customers = await Customer.find();
    response.json(customers)
    /**
      * @openapi
     * /api/customers:
     *   get:
     *     summary: Returns the list of all the customers
     *     tags: [Customers]
     *     responses:
     *       200:
     *         description: The list of the customers
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Customer'
     */
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
    response.json(customer)
}));

/**
* @openapi
* /api/customers:
*   post:
*     summary: Create a new customer
*     tags: [Customers]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Customer'
*     responses:
*       200:
*         description: The user was successfully created.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Customer'
*/


// GET a single customer by ID http://localhost:3000/api/customers/1
router.get('/:id', asyncHandler(async (request, response, next) => {
    const customer = await Customer.findById(request.params.id)
    response.json(customer)
}));

/**
 * @openapi
 * /api/customers/{id}:
 *   get:
 *     summary: Get the customer by id
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The customer Id.
 *     responses:
 *       200:
 *         description: The costumer id, get by running the get all customers method & copying the _id field.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 */


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

/**
 * @openapi
 * /api/customers/{id}:
 *  put:
 *    summary: Update the customer by the id
 *    tags: [Customers]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The customer id, get by running the get all customers method & copying the _id field.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Customer'
 *    responses:
 *      200:
 *        description: The customer information was updated.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Customers'
 */

// DELETE customer by ID http://localhost:3000/api/customers/1
router.delete('/:id', asyncHandler(async (request, response, next) => {
    const deletedCustomer = await Customer.findByIdAndDelete({ _id: request.params.id })
    response.json(deletedCustomer)
}));

/**
 * @openapi
 * /api/customers/{id}:
 *   delete:
 *     summary: Remove the customer by id
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The customer id, get by running the get all customers method & copying the _id field.
 *
 *     responses:
 *       200:
 *         description: The customer was deleted
 */

module.exports = router;

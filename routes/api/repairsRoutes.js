const router = require('express').Router();
const asyncHandler = require('express-async-handler')
const Repair = require('../../models/Repair');

// api testing go to http://localhost:3000/api-docs

/**
 * @openapi
 * components:
 *   schemas:
 *     Repairs:
 *       type: object
 *       required:
 *         - customerEmail
 *         - completed
 *         - repairInstructions
 *         - preferredContactMethod
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the repair
 *         customerEmail:
 *           type: string
 *           description: The customers email.
 *         completed:
 *           type: boolean
 *           description: Is the repair completed ?.
 *         repairInstructions:
 *           type: string
 *           description: What needs to be done.
 *         preferredContactMethod:
 *           type: string
 *           description: How to contact the customer
 *       example:
 *         id: d5fE_asz
 *         customerEmail: troy@troy.com
 *         completed: false
 *         repairInstructions: Change my front tire.
 *         preferredContactMethod: Text
 */
//GET all scheduled repair appointments http://localhost:3000/api/repairs
router.get('/', asyncHandler(async (request, response, next) => {
    const repairs = await Repair.find();
    response.json(repairs)
}))

/**
  * @openapi
 * /api/repairs:
 *   get:
 *     summary: Returns the list of all repairs
 *     tags: [Repairs]
 *     responses:
 *       200:
 *         description: The list of the repairs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Repairs'
 */

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

/**
* @openapi
* /api/repairs:
*   post:
*     summary: Create a new repair appointment
*     tags: [Repairs]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Repairs'
*     responses:
*       200:
*         description: The repair was successfully scheduled.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Repairs'
*/

// GET a single repair appointment by ID http://localhost:3000/api/repairs/1
router.get('/:id', asyncHandler(async (request, response, next) => {
    const repairAppointment = await Repair.findById(request.params.id)
    response.json(repairAppointment)
}))

/**
 * @openapi
 * /api/repairs/{id}:
 *   get:
 *     summary: Get the customer by id
 *     tags: [Repairs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The repair Id.
 *     responses:
 *       200:
 *         description: The repair id.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Repairs'
 */


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

/**
 * @openapi
 * /api/repairs/{id}:
 *  put:
 *    summary: Update the repair by the id
 *    tags: [Repairs]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The repair id.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Repairs'
 *    responses:
 *      200:
 *        description: The repair appointment was updated.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Repairs'
 */


// DELETE repair by ID http://localhost:3000/api/repairs/1
router.delete('/:id', asyncHandler(async (request, response, next) => {
    const deletedRepair = await Repair.findByIdAndDelete({ _id: request.params.id })
    response.json(deletedRepair)
}))

/**
 * @openapi
 * /api/repairs/{id}:
 *   delete:
 *     summary: Remove the appointment by id
 *     tags: [Repairs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The repair Id.
 *
 *     responses:
 *       200:
 *         description: The appointment was deleted
 */

// POST repair date change by ID http://localhost:3000/api/repairs/1/schedule
router.post('/:{id}/schedule', asyncHandler(async (request, response, next) => {
    response.send('testing POST Route to api/repairs/{id}/schedule')
}))


module.exports = router

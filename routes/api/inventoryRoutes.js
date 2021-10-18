const router = require('express').Router();
const { Router } = require('express');
const asyncHandler = require('express-async-handler')
const Inventory = require('../../models/Inventory');
const Customer = require('../../models/Customer');
const Repair = require('../../models/Repair');

//? api testing go to http://localhost:3000/api-docs

/**
 * @openapi
 * components:
 *   schemas:
 *     Inventory:
 *       type: object
 *       required:
 *         - itemName
 *         - itemDescription
 *         - bicycle
 *         - accessories
 *         - parts
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the Inventory Item
 *         itemName:
 *           type: string
 *           description: The name of the item in the Inventory.
 *         itemDescription:
 *           type: string
 *           description: Description of the item.
 *         bicycle:
 *           type: boolean
 *           description: is the item a bicycle ?
 *         accessories:
 *           type: boolean
 *           description: is the item an accessory ?
 *         parts:
 *            type: boolean
 *            description: is the item parts?
 *         currentStock:
 *            type: number
 *            description: How many are in stock?
 *       example:
 *         id: d5fE_asz32t33t
 *         itemName: Huffy
 *         itemDescription: A black huffy bicycle
 *         bicycle: true
 *         parts: false
 *         accessories: false
 *         currentStock: 1
 */


//! GET all items in the inventory http://localhost:3000/api/invetory
router.get('/', asyncHandler(async (request, response, next) => {
    const inventory = await Inventory.find();
    response.json(inventory)
    /**
      * @openapi
     * /api/inventory:
     *   get:
     *     summary: Returns the list of all the inventory items.
     *     tags: [Inventory]
     *     responses:
     *       200:
     *         description: The list of the items in the inventory
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Inventory'
     */
}))

//! POST a new inventory item to the database http://localhost:3000/api/inventory
router.post('/', asyncHandler(async (request, response, next) => {
    // destructuring request
    const { itemName, itemDescription, bicycle, parts, accessories, currentStock, ownerEmail, owner } = request.body

    // creating new database record
    const inventoryItem = new Inventory({
        itemName: itemName,
        itemDescription: itemDescription,
        bicycle: bicycle,
        parts: parts,
        accessories: accessories,
        currentStock: currentStock,
        owner: owner,
        ownerEmail: ownerEmail
    });
    await inventoryItem.save()

    if (owner && bicycle === true) {
        await Customer.findOneAndUpdate({ email: ownerEmail }, { $push: { bikes: inventoryItem } })
    } else {
        console.log('added to Inventory!')
    };
    if (owner && bicycle === true) {
        await Repair.findOneAndUpdate({ completed: false }, { $push: { bike: inventoryItem } })
    } else {
        console.log('this bike already is being serviced, plus update your appointment!')
    };


    response.json(inventoryItem)
    /**
    * @openapi
    * /api/inventory:
    *   post:
    *     summary: Create a new inventory item
    *     tags: [Inventory]
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/Inventory'
    *     responses:
    *       200:
    *         description: The inventory item was successfully created.
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Inventory'
    */
}))

//! GET a single inventory item by ID http://localhost:3000/api/inventory/1
router.get('/:id', asyncHandler(async (request, response, next) => {
    const id = request.params.id
    const inventoryItem = await Inventory.findById(id)
    response.json(inventoryItem)
    /**
     * @openapi
     * /api/inventory/{id}:
     *   get:
     *     summary: Get the inventory item by id.
     *     tags: [Inventory]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The item Id.
     *     responses:
     *       200:
     *         description: The inventory item id
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Inventory'
     */
}))


//! PUT new inventory item information by ID(update) http://localhost:3000/api/inventory/1
router.put('/:id', asyncHandler(async (request, response, next) => {
    // destructuring request
    const { itemName, itemDescription, bicycle, parts, accessories, amountAvailable } = request.body

    // editing the item
    const updatedInventoryItem = await Inventory.updateOne({ _id: request.params.id },
        {
            $set:
            {
                itemName: itemName,
                itemDescription: itemDescription,
                bicycle: bicycle,
                parts: parts,
                accessories: accessories,
                amountAvailable: amountAvailable
            }
        })
    response.json(updatedInventoryItem)
    /**
     * @openapi
     * /api/inventory/{id}:
     *  put:
     *    summary: Update the item by Id
     *    tags: [Inventory]
     *    parameters:
     *      - in: path
     *        name: id
     *        schema:
     *          type: string
     *        required: true
     *        description: The item id.
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/schemas/Inventory'
     *    responses:
     *      200:
     *        description: The items information was updated.
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Inventory'
     */
}))

//! DELETE inventory item by ID http://localhost:3000/api/inventory/1
router.delete('/:id', asyncHandler(async (request, response, next) => {
    const deletedInventoryItem = await Inventory.findByIdAndDelete({ _id: request.params.id })
    response.json(deletedInventoryItem)
    /**
     * @openapi
     * /api/inventory/{id}:
     *   delete:
     *     summary: Remove the inventory item by id
     *     tags: [Inventory]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The item id.
     *
     *     responses:
     *       200:
     *         description: The item was deleted
     */
}))


module.exports = router

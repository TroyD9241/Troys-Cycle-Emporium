const router = require('express').Router();
const asyncHandler = require('express-async-handler')
const Inventory = require('../../models/Inventory');

//GET all items in the inventory http://localhost:3000/api/invetory
router.get('/', asyncHandler(async (request, response, next) => {
    const inventory = await Inventory.find();
    response.json(inventory)
}))

// POST a new inventory item to the database http://localhost:3000/api/inventory
router.post('/', asyncHandler(async (request, response, next) => {
    const { itemName, itemDescription, bicycle, parts, accessories, amountAvailable } = request.body
    console.log(request.body)
    const inventoryItem = new Inventory({
        itemName: itemName,
        itemDescription: itemDescription,
        bicycle: bicycle,
        parts: parts,
        accessories: accessories,
        amountAvailable: amountAvailable
    })
    await inventoryItem.save()
    response.json('confirmed!')
}))

// GET a single inventory item by ID http://localhost:3000/api/inventory/1
router.get('/:id', asyncHandler(async (request, response, next) => {
    const inventoryItem = await Inventory.findById(request.params.id)
    response.json(inventoryItem)
}))

// PUT new inventory item information by ID(update) http://localhost:3000/api/inventory/1
router.put('/:id', asyncHandler(async (request, response, next) => {
    const { itemName, itemDescription, bicycle, parts, accessories, amountAvailable } = request.body
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
}))

// DELETE inventory item by ID http://localhost:3000/api/inventory/1
router.delete('/:id', asyncHandler(async (request, response, next) => {
    const deletedInventoryItem = await Inventory.remove({ _id: request.params.id })
    response.json(deletedInventoryItem)
}))

module.exports = router

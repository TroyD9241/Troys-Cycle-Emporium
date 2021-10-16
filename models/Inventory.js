const { Schema, model } = require('mongoose')

const InventorySchema = Schema({
    itemName: {
        type: String,
        required: true
    },

    itemDescription: {
        type: String,
        required: true,
    },

    bicycle: {
        type: Boolean,
        required: true,
    },

    accessories: {
        type: Boolean,
        required: true,
    },
    parts: {
        type: Boolean,
        required: false,
    },
})

module.exports = model('Inventory', InventorySchema)

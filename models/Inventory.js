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
        required: false,
    },

    accessories: {
        type: Boolean,
        required: false,
    },
    parts: {
        type: Boolean,
        required: false,
    },

    ownerEmail: {
        type: String,
        required: true,
    },
})

module.exports = model('Inventory', InventorySchema)

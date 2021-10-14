const mongoose = require('mongoose');

const InventorySchema = mongoose.Schema({
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
    amountAvailable: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('Inventory', InventorySchema)

const mongoose = require('mongoose');

const RepairsSchema = mongoose.Schema({
    completed: {
        type: Boolean,
        required: true
    },
    appointmentDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    repairInstructions: {
        type: String,
        required: true,
    },

    preferredContactMethod: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Repairs', RepairsSchema)

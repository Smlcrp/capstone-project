const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    parts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Inventory'
    },
    customer: {
        type: String,
        required: [true, 'Please enter a customer name']
    },
    phone: {
        type: String,
        required: [true, 'Please enter a customer phone number']
    },
    job_description: {
        type: String,
        required: [true, 'Please enter a job description']
    }
},
{
    timestamps: true,
})


const job = mongoose.model('Job', jobSchema);
module.exports = job;
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
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
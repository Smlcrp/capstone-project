const asyncHandler = require('express-async-handler');
const Jobs = require('../models/jobs.model');


// @desc  Create job
// @route  POST /api/jobs
const createJobs = asyncHandler(async (req, res) => {
    if(!req.body.customer || !req.body.phone || !req.body.job_description || !req.body.parts) {
       res.status(400)
       throw new Error('Please fill out all fields')
    }

    const job = await Jobs.create({
        customer: req.body.customer,
        phone: req.body.phone,
        job_description: req.body.job_description,
        parts: req.body.parts,
    })

    res.status(200).json(job)
})

// @desc  Get jobs
// @route  GET /api/jobs
const getJobs = asyncHandler(async (req, res) => {
    const jobs = await Jobs.find()

    res.status(200).json(jobs)
})

// @desc  Get a job
// @route  GET /api/jobs/:id
const getOneJob = asyncHandler(async (req, res) => {
    const job = await Jobs.findById(req.params.id)

    res.status(200).json(job)
})

// @desc  Update job
// @route  PUT /api/jobs/:id
const updateJobs = asyncHandler(async (req, res) => {
    const job = await Jobs.findById(req.params.id)

    if(!job) {
        res.status(400)
        throw new Error('Job not found')
    }

    const updatedJob = await Jobs.findByIdAndUpdate(req.params.id, req.body, {new: true}) 

    res.status(200).json(updatedJob)
})

// @desc  Delete job
// @route  DELETE /api/jobs/:id
const deleteJobs = asyncHandler(async (req, res) => {
    const job = await Jobs.findById(req.params.id)

    if(!job) {
        res.status(400)
        throw new Error('Job not found')
    }

    const deletedJob = await Jobs.findByIdAndRemove(req.params.id, req.body)

    res.status(200).json('Delete Successful')
})


module.exports = {
    getJobs,
    getOneJob,
    createJobs,
    updateJobs,
    deleteJobs,
}
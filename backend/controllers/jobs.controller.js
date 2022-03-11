
// @desc  Create job
// @route  POST /api/jobs
const createJobs = (req, res) => {
    res.status(200).json({ message: 'Create Jobs'})
}

// @desc  Get jobs
// @route  GET /api/jobs
const getJobs = (req, res) => {
    res.status(200).json({ message: 'Get Jobs'})
}

// @desc  Get a job
// @route  GET /api/jobs/:id
const getOneJob = (req, res) => {
    res.status(200).json({ message: `get job ${req.params.id}` })
}

// @desc  Update job
// @route  PUT /api/jobs/:id
const updateJobs = (req, res) => {
    res.status(200).json({ message: `update job ${req.params.id}` })
}

// @desc  Delete job
// @route  DELETE /api/jobs/:id
const deleteJobs = (req, res) => {
    res.status(200).json({ message: `delete job ${req.params.id}` })
}


module.exports = {
    getJobs,
    getOneJob,
    createJobs,
    updateJobs,
    deleteJobs,
}
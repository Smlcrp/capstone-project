const express = require('express');
const router = express.Router();
const { getJobs, createJobs, updateJobs, getOneJob, deleteJobs } = require('../controllers/jobs.controller');



router.get('/', getJobs)

router.post('/', createJobs)

router.get('/:id', getOneJob)

router.put('/:id', updateJobs)

router.delete('/:id', deleteJobs)


module.exports = router;
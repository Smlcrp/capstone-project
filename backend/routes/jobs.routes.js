const express = require('express');
const router = express.Router();
const { getJobs, createJobs, updateJobs, getOneJob, deleteJobs } = require('../controllers/jobs.controller');
const { protect } = require('../middleware/auth.middleware');


router.get('/', protect, getJobs)

router.post('/', protect, createJobs)

router.get('/:id', protect, getOneJob)

router.put('/:id', protect, updateJobs)

router.delete('/:id', protect, deleteJobs)


module.exports = router;
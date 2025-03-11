const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobcontrollers');

// Job Routes
router.get('/', jobController.getJobs);
router.get('/:id', jobController.getJobById);
router.post('/', jobController.createJob);
router.put('/:id', jobController.updateJob);
router.delete('/:id', jobController.deleteJob);

module.exports = router;

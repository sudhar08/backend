// src/routes/job.routes.js

const express = require('express');
const {
  httpGetAllJobs,
  httpGetJobById,
  httpCreateJob,
  httpUpdateJob,
  httpDeleteJob,
} = require('../controllers/jobcontrollers');

const jobRouter = express.Router();

// Route for getting all jobs and creating a new job
jobRouter.route('/jobs')
  .get(httpGetAllJobs)
  .post(httpCreateJob);

// Routes for a specific job by its ID
jobRouter.route('/jobs/:id')
  .get(httpGetJobById)
  .put(httpUpdateJob)
  .delete(httpDeleteJob);

module.exports = jobRouter;
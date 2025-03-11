const db = require('../config/db');

// Fetch all jobs
const getAllJobs = (callback) => {
  db.query('SELECT * FROM jobs', callback);
};

// Fetch a single job by ID
const getJobById = (id, callback) => {
  db.query('SELECT * FROM jobs WHERE id = ?', [id], callback);
};

// Create a new job
const createJob = (jobData, callback) => {
  db.query('INSERT INTO jobs SET ?', jobData, callback);
};

// Update job by ID
const updateJob = (id, jobData, callback) => {
  db.query('UPDATE jobs SET ? WHERE id = ?', [jobData, id], callback);
};

// Delete job by ID
const deleteJob = (id, callback) => {
  db.query('DELETE FROM jobs WHERE id = ?', [id], callback);
};

module.exports = { getAllJobs, getJobById, createJob, updateJob, deleteJob };

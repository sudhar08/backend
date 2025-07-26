// src/controllers/job.controller.js

const JobModel = require('../model/jobmodels');

// --- GET All Jobs ---
async function httpGetAllJobs(req, res) {
  const { data, error } = await JobModel.getAllJobs();
  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json(data);
}

// --- GET Job by ID ---
async function httpGetJobById(req, res) {
  const { id } = req.params;
  const { data, error } = await JobModel.getJobById(id);
  if (error) return res.status(500).json({ error: error.message });
  if (!data) return res.status(404).json({ error: 'Job not found' });
  return res.status(200).json(data);
}

// --- POST New Job ---
async function httpCreateJob(req, res) {
  const newJob = req.body;
  const { data, error } = await JobModel.createJob(newJob);
  if (error) return res.status(500).json({ error: error.message });
  return res.status(201).json(data);
}

// --- PUT (Update) Job ---
async function httpUpdateJob(req, res) {
  const { id } = req.params;
  const jobUpdates = req.body;
  const { data, error } = await JobModel.updateJob(id, jobUpdates);
  if (error) return res.status(500).json({ error: error.message });
  if (!data) return res.status(404).json({ error: 'Job not found' });
  return res.status(200).json(data);
}

// --- DELETE Job ---
async function httpDeleteJob(req, res) {
  const { id } = req.params;
  const { error } = await JobModel.deleteJob(id);
  if (error) return res.status(500).json({ error: error.message });
  return res.status(204).send(); // 204 No Content
}

module.exports = {
  httpGetAllJobs,
  httpGetJobById,
  httpCreateJob,
  httpUpdateJob,
  httpDeleteJob,
};
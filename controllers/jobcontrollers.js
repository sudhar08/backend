const Job = require('../model/jobmodels');

// Get all jobs
const getJobs = (req, res) => {
  Job.getAllJobs((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// Get job by ID
const getJobById = (req, res) => {
  const { id } = req.params;
  Job.getJobById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: "Job not found" });
    res.status(200).json(results[0]);
  });
};

// Create a new job
// Create a new job
const createJob = (req, res) => {
    const {
      title,
      company,
      location,
      jobType,
      minSalary,
      maxSalary,
      applicationDeadline,
      jobDescription,
    } = req.body;
  
    // Validate required fields
    if (
      !title ||
      !company ||
      !location ||
      !jobType ||
      !minSalary ||
      !maxSalary ||
      !applicationDeadline ||
      !jobDescription
    ) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    // Capture job data
    const jobData = {
      job_title: title,
      company_name: company,
      location,
      job_type: jobType,
      min_salary: minSalary,
      max_salary: maxSalary,
      application_deadline: applicationDeadline,
      job_description: jobDescription,
      created_at: new Date(), // Current timestamp
    };
    console.log("🔍 Received jobData:", req.body);

    // Call the model to insert the job
    Job.createJob(jobData, (err, results) => {
      if (err) {
        console.error('Error inserting job:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.status(201).json({ id: results.insertId, ...jobData });
    });
  };
  

// Update a job
const updateJob = (req, res) => {
  const { id } = req.params;
  const jobData = req.body;
  Job.updateJob(id, jobData, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ message: "Job not found" });
    res.status(200).json({ id, ...jobData });
  });
};

// Delete a job
const deleteJob = (req, res) => {
  const { id } = req.params;
  Job.deleteJob(id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ message: "Job not found" });
    res.status(200).json({ message: "Job deleted successfully" });
  });
};

module.exports = { getJobs, getJobById, createJob, updateJob, deleteJob };

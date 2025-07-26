// src/models/job.model.js

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Fetches all jobs
async function getAllJobs() {
  return await supabase.from('jobs').select('*');
}

// Fetches a single job by its ID
async function getJobById(id) {
  return await supabase.from('jobs').select('*').eq('id', id).single();
}

// Creates a new job
async function createJob(newJob) {
  return await supabase.from('jobs').insert(newJob).select();
}

// Updates an existing job
async function updateJob(id, jobUpdates) {
  return await supabase.from('jobs').update(jobUpdates).eq('id', id).select().single();
}

// Deletes a job
async function deleteJob(id) {
  return await supabase.from('jobs').delete().eq('id', id);
}

module.exports = {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
};
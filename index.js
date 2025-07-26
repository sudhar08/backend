

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const jobRouter = require('./routes/jobroutes'); // <-- Check this path

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json()); // <-- Make sure this line exists

// Mount the router
app.use('/api', jobRouter); // <-- Make sure this line exists and has '/api'

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Express server running on http://localhost:${PORT}`);
});
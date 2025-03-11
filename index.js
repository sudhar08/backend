const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/db');
const jobRoutes = require('./routes/jobroutes');

dotenv.config();
const app = express();
//const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Routes
app.use('/api/jobs', jobRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Job API');
});

// Start server
app.listen(5000, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${5000}`);
});

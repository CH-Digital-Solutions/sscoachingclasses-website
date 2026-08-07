require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
const contactRoute = require('./src/routes/contact');
const demoRoute = require('./src/routes/demo');
app.use('/api/contact', contactRoute);
app.use('/api/demo', demoRoute);

// Serve frontend static build
const distPath = path.join(__dirname, '../frontend/dist');
app.use(express.static(distPath));

// SPA fallback — serve index.html for any non-API route
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

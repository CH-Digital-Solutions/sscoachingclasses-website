require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
const contactRoute = require('./src/routes/contact');
app.use('/api/contact', contactRoute);

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});

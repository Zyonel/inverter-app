const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Static files for main site
app.use(express.static(path.join(__dirname)));

// File to store data
const DATA_FILE = path.join(__dirname, 'data.json');

// --- ROUTES --- //

// Handle form submissions
app.post('/submit', (req, res) => {
  const newOrder = req.body;
  let data = [];

  try {
    if (fs.existsSync(DATA_FILE)) {
      const fileContent = fs.readFileSync(DATA_FILE, 'utf-8');
      if (fileContent.trim()) {
        data = JSON.parse(fileContent);
      }
    }
  } catch (err) {
    console.error('Error reading data file:', err);
    data = [];
  }

  data.push({ ...newOrder, date: new Date().toISOString() });

  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    res.json({ success: true, message: 'Order received successfully' });
  } catch (err) {
    console.error('Error writing data file:', err);
    res.status(500).json({ success: false, message: 'Error saving order' });
  }
});

// Fetch all orders (for admin page)
app.get('/orders', (req, res) => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const fileContent = fs.readFileSync(DATA_FILE, 'utf-8');
      const data = fileContent.trim() ? JSON.parse(fileContent) : [];
      res.json(data);
    } else {
      res.json([]);
    }
  } catch (err) {
    console.error('Error reading orders:', err);
    res.status(500).json({ success: false, message: 'Error loading orders' });
  }
});

// Serve admin page at /admin
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// --- START SERVER ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

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


// Serve static files (your HTML, CSS, JS)
app.use(express.static(__dirname));

const DATA_FILE = 'data.json';

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

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

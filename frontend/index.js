const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 8080;

app.get('/', async (req, res) => {
  try {
    const response = await fetch('http://backend:5000/');
    const message = await response.text();
    res.send(`<h1>Front-end Service</h1><p>${message}</p>`);
  } catch (error) {
    res.send('Error connecting to the backend service.');
  }
});

app.listen(PORT, () => {
  console.log(`Front-end service running on http://localhost:${PORT}`);
});


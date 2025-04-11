// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('🚀 Hello from Express API on Render, this is second commit!');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello world!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



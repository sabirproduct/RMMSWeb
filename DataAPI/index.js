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

app.get('/users', async (req, res) => {
    try {
      const result = await db.query('SELECT * FROM users');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });

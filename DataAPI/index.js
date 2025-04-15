// index.js
const express = require('express');
const app = express();
const db = require('./firebase');
const cors = require('cors');
const { processApiRequest } = require('./dataProcessing');

app.use(cors()); // Allow all origins (you can restrict later)
app.use(express.json());

app.get('/api/users', async (req, res) => {
  const ref = db.ref('users');
  ref.once('value', (snapshot) => {
    res.json(snapshot.val());
  });
});

app.post('/api/users', async (req, res) => {
  const { name, email } = req.body;
  const ref = db.ref('users');
  const newUserRef = ref.push();
  newUserRef.set({ name, email });
  res.json({ id: newUserRef.key, name, email });
});

// Endpoint to handle dynamic API requests
// This endpoint will process the request based on the method name and parameters provided in the query string
// Example query: {"methodName":"getUser","params":{"id":1}}
app.post('/api', (req, res) => {
  try {

    const query = req.query.json;
    const result = processApiRequest(query);
    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(400).send(`Error processing request: ${error.message}`);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});

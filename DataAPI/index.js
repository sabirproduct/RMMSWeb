// index.js
const express = require('express');
const app = express();
const db = require('./firebase');
const cors = require('cors');


app.use(cors()); // Allow all origins (you can restrict later)
app.use(express.json());

app.get('/api/:node', async (req, res) => {
  const { node } = req.params;
  const ref = db.ref(node);
  ref.once('value', (snapshot) => {
    res.json(snapshot.val());
  });
});

app.post('/api/:node', async (req, res) => {
  const { node } = req.params;
  const data = req.body;
  const ref = db.ref(node);
  const newRef = ref.push();
  newRef.set(data);
  res.json({ id: newRef.key, ...data });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});

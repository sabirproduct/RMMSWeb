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

app.get('/api/:node/:id', async (req, res) => {
  const { node, id } = req.params;
  const ref = db.ref(`${node}/${id}`);
  ref.once('value', (snapshot) => {
    if (snapshot.exists()) {
      res.json(snapshot.val());
    } else {
      res.status(404).json({ error: 'Data not found' });
    }
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

app.put('/api/:node/:id', async (req, res) => {
  const { node, id } = req.params;
  const data = req.body;
  const ref = db.ref(`${node}/${id}`);
  ref.update(data, (error) => {
    if (error) {
      res.status(500).json({ error: 'Failed to update data' });
    } else {
      res.json({ id, ...data });
    }
  });
});

app.delete('/api/:node/:id', async (req, res) => {
  const { node, id } = req.params;
  const ref = db.ref(`${node}/${id}`);
  ref.remove((error) => {
    if (error) {
      res.status(500).json({ error: 'Failed to delete data' });
    } else {
      res.json({ message: 'Data deleted successfully', id });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});

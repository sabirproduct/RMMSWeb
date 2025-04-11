// index.js
const express = require('express');
const app = express();
const db = require('./firebase');
const cors = require('cors');


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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});

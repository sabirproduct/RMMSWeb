const admin = require('firebase-admin');
const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG_JSON);

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
  databaseURL: 'https://rmmsweb-itsol-default-rtdb.asia-southeast1.firebasedatabase.app', // replace with your URL
});

const db = admin.database();
module.exports = db;

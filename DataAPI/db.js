// db.js
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // safer to load from env vars
  ssl: {
    rejectUnauthorized: false, // important for Render SSL
  }
});

module.exports = pool;

const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'mysql-db',
  user: process.env.DB_USER || 'yourdbuser',
  password: process.env.DB_PASSWORD || 'yourdbpassword',
  database: process.env.DB_NAME || 'yourdbname',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Route to get all champions from MySQL
app.get('/api/champions', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM champions');
    connection.release();
    res.json(rows);
  } catch (err) {
    console.error('MySQL query error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Sample champion data (in a real-world scenario, this would be fetched from a database)
const champions = [
  {
    name: 'Ahri',
    description: 'Ahri is a charismatic champion with magical abilities.',
    imageUrl: 'https://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/Ahri.png'
  },
  {
    name: 'Ezreal',
    description: 'Ezreal is an adventurous explorer armed with arcane abilities.',
    imageUrl: 'https://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/Ezreal.png'
  }
  // Add more champion data as needed
];

// Route to get all champions locally
app.get('/api/champions/local', (req, res) => {
  res.json(champions);
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');
const { processCSV } = require('./index');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'Yheison123@', 
  database: 'server_ca2'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Successfully connected to MySQL');
});

// Route to serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'form.html'));
});

// Route to handle form submission
app.post('/submit', (req, res) => {
  const { first_name, second_name, email, phone_number, eircode } = req.body;

  const sql = `INSERT INTO mysql_table (first_name, second_name, email, phone_number, eircode)
               VALUES (?, ?, ?, ?, ?)`;

  db.query(sql, [first_name, second_name, email, phone_number, eircode], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Failed to insert data');
    } else {
      console.log('Record inserted with ID:', result.insertId);
      res.send('Data successfully inserted');
    }
  });
});

// Route to trigger CSV validation and insertion (Part A)
app.get('/upload', (req, res) => {
  processCSV('person_info.csv');
  res.send('Validation and insertion process started.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

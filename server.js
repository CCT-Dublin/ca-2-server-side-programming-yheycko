// server.js
const express = require('express');
const app = express();
const port = 3000;
const { processCSV } = require('./index');
//in app.get can active automatically by (/)
app.get('/', (req, res) => {
  processCSV('person_info.csv');
  res.send('Validation and insertion process started.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

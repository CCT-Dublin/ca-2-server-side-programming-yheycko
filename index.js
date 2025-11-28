const fs = require ('fs');
const csv = require('csv-parser');
const db = require('./database');
//function to validate records

function validateRecord(mediaRecorder, rowNumber) {
let errors = [];

//Example validations 
if (!mediaRecorder.first_name || mediaRecorder.first_name.trim()=== '') {
errors.push(`Row ${rowNumber}: first_name is empty`);
}  
if (!mediaRecorder.second_name || mediaRecorder.second_name.trim() === '') {
errors.push(`Row ${rowNumber}: Second_name is empty`);
}  
if (!mediaRecorder.email || !mediaRecorder.email.includes('@')) {
errors.push(`Row ${rowNumber}: email is invalid`);    
}  
if (!mediaRecorder.phone_number || !/^\d{10}$/.test(mediaRecorder.phone_number)) {
errors.push(`Row ${rowNumber}: phone_number is invalid`);
} 
if (!mediaRecorder.eircode || !/^[A-Z0-9]{7}$/.test(mediaRecorder.eircode)) {
errors.push(`Row ${rowNumber}: eircode must be 7 alphanumeric characters`);
}

return errors;
}

//Read CSV and validate
function processCSV(filePath) {
let rowNumber = 1;
let validRecords = [];

fs.createReadStream(filePath)
.pipe(csv())
.on('data',(row) => {
const errors = validateRecord(row, rowNumber);
if (errors.length >0) {
errors.forEach(err => console.error(err));
} else {
validRecords.push(row);
}
rowNumber++;
})

.on('end', () => {
console.log('Validation finished. Inserting valid records...');
insertRecords(validRecords);    
});
}

//Insert valid records
function insertRecords(records) {
records.forEach(record => {
const query = `
INSERT INTO mysql_table(first_name, second_name, email, phone_number)
VALUES (?, ?, ?, ?)
`;

      db.query(query, [
      record.first_name,
      record.second_name,
      record.email,
      record.phone_number
    ], (err) => {
      if (err) {
        console.error('Error inserting record:', err);
      } else {
        console.log('Record successfully inserted');
      }
    });
  });
}

//Execute

processCSV('person_info.csv');
module.exports = { processCSV };



     
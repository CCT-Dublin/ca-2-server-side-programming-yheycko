// importing the mysql library which provides modern MySQL features
const mysql = require('mysql2');
//creatting a connection object with the database credentials
const connection =mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'Yheison123@',
database: 'Server_ca2'
}); 
//attempting to establish the connection
connection.connect((err) => {
if (err) {
//if  connection fails, log the error for debugging
console.error('Error  connecting to MySQL:', err);
} else {
// if successful, confirm the connection in the console    
console.log('successful connected to MySQL');
}
});
//exporting the connection so other files cause it

module.exports = connection;   
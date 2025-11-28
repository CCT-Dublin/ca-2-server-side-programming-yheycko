const mysql = require('mysql2');
const connection =mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'Yheison123@',
database: 'Server_ca2'
}); 

connection.connect((err) => {
if (err) {
console.error('Error  connecting to MySQL:', err);
} else {
console.log('successful connected to MySQL');
}
});

module.exports = connection;   
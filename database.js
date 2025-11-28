const mysql = require('mysql2');
const connection =mysql.createConnection({
host: 'localhost',
user: 'Yheycko-CCT',
password: 'Yheison123@',
database: 'Server_ca2'
}); 

connection.connect((err) => {
if (err) {
console.error('Error when you connect the database:',err);
} else {
console.log('successful conexion in database');
}
});

MediaSourceHandle.exports = connection;    
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dbuser',
  password : 's3kreee7'
});

module.exports = connection;
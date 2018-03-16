const config = require('../config.json');

// Return a connection pool
const mysql = require('promise-mysql');

module.exports = mysql.createPool(config.db);

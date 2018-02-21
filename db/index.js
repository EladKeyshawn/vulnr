const config = require('../config.json');

// Return a connection pool
const mysql = require('promise-mysql');

module.defaultParams = mysql.createPool(config.db);
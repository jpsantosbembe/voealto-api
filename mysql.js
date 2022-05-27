const mysql = require('mysql2')

var pool = mysql.createPool({
    "user" : process.env.MYSQL_USER,
    "password" : process.env.MYSQL_PASS,
    "database" : process.env.MYSQL_DATA,
    "host" : process.env.MYSQL_HOST,
    "port" : 3306
})

exports.pool = pool
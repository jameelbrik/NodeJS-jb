const mysql = require('mysql2');
const util = require('util');

const pool = mysql.createPool({
    ost: "localhost",
    user: "username",
    password: "password",
    database: 'mydb',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
});

pool.query = util.promisify(pool.query);

module.exports = (req, res, next) => {
    req.db = pool;
    next();
}
const mysql = require('mysql2');
const util = require('util');


const connection = mysql.createConnection({
    host: "localhost",
    user: "username",
    password: "password",
    database: "mydb",
});

connection.connect = util.promisify(connection.connect);
connection.query = util.promisify(connection.query);

(async () => {
    try {
        await connection.connect();

        console.log("Connected!");

        await connection.query(`
            CREATE TABLE IF NOT EXISTS users (
                id int auto_increment,
                github_id varchar(255) not null,
                primary key (id)
            )
        `);
        console.log("created table users!");

        await connection.query(`
            CREATE TABLE IF NOT EXISTS users_symbol (
                id int auto_increment,
                user_id int not null,
                symbol varchar(5) not null,
                primary key (id)
            )
        `);
        console.log("created table users_symbol!");
    } catch (err) {
        console.log(err);
    } finally {
        process.exit();
    }
})();
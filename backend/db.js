const mysql = require("mysql2");

const databaseConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const dbConnection = mysql.createConnection({
  ...databaseConfig,
  database: "",
});

dbConnection.query(
  "CREATE DATABASE IF NOT EXISTS customer_posts",
  function (err) {
    if (err) throw err;
    console.log("Database customer_posts created successfully");

    dbConnection.query("USE customer_posts", (err) => {
      if (err) throw err;

      const blogTableQuery = `
      CREATE TABLE IF NOT EXISTS post(
        id INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(100) NOT NULL,
        text VARCHAR(255) NOT NULL,
        image VARCHAR(100) NOT NULL,
        primary key (id)

      )`;
      dbConnection.query(blogTableQuery, (err) => {
        if (err) throw err;
        console.log("Post Table created successfully");
      });

      const loginTableQuery = `
      CREATE TABLE IF NOT EXISTS users(
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        surname VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(255) NOT NULL,
        primary key (id)

      )`;
      dbConnection.query(loginTableQuery, (err) => {
        if (err) throw err;
        console.log("users table successfully added");
      });
    });
  }
);

module.exports = {
  dbConnection,
};

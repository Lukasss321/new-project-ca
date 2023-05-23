const express = require("express");
const { dbConection } = require("../db");
const { defaultCallback } = require("../helpers/dbHelper");
const router = express.Router();

router.get("/post", (req, res) => {
  dbConnection.execute(`SELECT * FROM post`, (err, result) => {
    defaultCallback(err, result, res);
  });
});

module.exports = router;

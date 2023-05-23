const express = require("express");
const { dbConnection } = require("../db");
const { defaultCallback } = require("../helpers/dbHelper");
const router = express.Router();

router.get("/post", (req, res) => {
  dbConnection.execute(`SELECT * FROM post`, (err, result) => {
    defaultCallback(err, result, res);
  });
});

router.post("/post", (req, res) => {
  const { title, text, image } = req.body;

  const postQuery = "INSERT INTO post (title, text, image) VALUES (?, ?, ?)";

  dbConnection.execute(postQuery, [title, text, image], (err, result) => {
    defaultCallback(err, result, res);
  });
});

module.exports = router;

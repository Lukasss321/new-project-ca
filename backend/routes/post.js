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

// router.delete("/post/delete/:id", (req, res) => {
//   const id = req.params.id * 1;
//   const deleteQuery = "DELETE FROM post WHERE id = ?";

//   res.send("Post deleted successfully");

//   // Istrinti is DB pagal id/ logika istrint is duomenu bazes
// });

router.delete("/post/delete/:id", (req, res) => {
  const { id } = req.params;
  console.log("mano id", id);
  const deleteQuery = "DELETE FROM post WHERE id = ?";

  dbConnection.execute(deleteQuery, [id], (err, result) => {
    defaultCallback(err, result, res);
  });
});

// Assuming you have already set up the required dependencies and established the MySQL connection

// DELETE route for deleting a post by ID
// router.delete("/post/delete/:id", (req, res) => {
//   const { postId } = req.params; // Get the post ID from the request URL parameter

// Perform the delete operation in the MySQL database
// const deleteQuery = "DELETE FROM post WHERE id=?";
// dbConnection.execute(deleteQuery, [postId], (error, results) => {
//   if (error) {
//     console.error("Error deleting post:", error);
//     res.status(500).json({ error: "Error deleting post" });
//   } else {
//     res.status(200).json({ message: "Post deleted successfully" });
//   }
// });

//  dbConnection.execute(
//     "DELETE FROM post WHERE id=?",
//     [postId],
//     (error, results) => defaultCallback(error, results, res)
//   );
// });

// Export the router
module.exports = router;

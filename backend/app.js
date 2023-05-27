require("dotenv").config();
const express = require("express");
const cors = require("cors");
const postsRouter = require("./routes/post");
const authenticationRouter = require("./routes/authentication");

const app = express();

app.use(cors());
app.use(express.json());
app.use(postsRouter);
app.use(authenticationRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

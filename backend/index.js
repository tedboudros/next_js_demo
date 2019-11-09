const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;

const userRoutes = require("./routes/user");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/forum_io", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Database connection successful");
});

app.use("/user", userRoutes);

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

if (process.env.NODE_ENV !== "production") {
  process.on("uncaughtException", function(err) {
    console.error("FATAL: Uncaught exception.");
    console.error(err.stack || err);
  });
}

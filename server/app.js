const express = require("express");
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("We are live!");
});

// Listen to port 8080
app.listen(8080);

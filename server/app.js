const express = require("express");

var cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(cors());

// ROUTES
app.get("/", (req, res) => {
  res.send("We are live!");
});

const userRoutes = require("./routes/login");
app.use("/user", userRoutes);

const friendRoutes = require("./routes/friends");
app.use("/friend", friendRoutes);

const eventRoutes = require("./routes/events");
app.use("/event", eventRoutes);

const searchRoutes = require("./routes/search");
app.use("/search", searchRoutes);

// Middleware
app.use("/", () => {
  console.log("Middleware Running");
});

// Connect to db
mongoose
  .connect(
    "mongodb+srv://admin:adminpassword@cluster1.mzahmt0.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

// Listen to port 8080
app.listen(8080);

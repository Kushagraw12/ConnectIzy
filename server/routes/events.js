const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", (req, res) => {
  res.send("Events are live!");
});

// Get all events of a user
router.post("/getAll", async (req, res, next) => {
  try {
    const uid = req.body.userID;
    const user = await User.findOne({ _id: uid });
    if (user) {
      res.status(200).send(user.eventsAttended);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    next(error);
  }
});

// Add a event for a User
router.put("/addEvent", async (req, res, next) => {
  try {
    const uid = req.body.userID;
    const event = req.body.event;
    const user = await User.findOne({ _id: uid });
    user.eventsAttended.push(event);
    user.save().then(console.log("Event Added!"));
    res.status(200).send(user.eventsAttended);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

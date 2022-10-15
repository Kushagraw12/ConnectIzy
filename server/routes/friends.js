const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", (req, res) => {
  res.send("Friends are live!");
});

// Get all friends of a user
router.post("/getAll", async (req, res, next) => {
  try {
    const uid = req.body.userID;
    const user = await User.findOne({ _id: uid });
    if (user) {
      res.status(200).send(user.friends);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    next(error);
  }
});

// Add a friend for a User
router.put("/addFriend", async (req, res, next) => {
  try {
    const uid = req.body.userID;
    const fid = req.body.friendID;
    const user = await User.findOne({ _id: uid });
    user.friends.push({ dateAdded: new Date(), friend: fid });
    user.save().then(console.log("Friend Added!"));
    res.status(200).send(user.friends);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

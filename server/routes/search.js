const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", (req, res) => {
  res.send("Search are live!");
});

// SEARCH API'S
router.post("/find_by_name", async (req, res, next) => {
  try {
    const txt = req.body.name;
    console.log(req.body);
    var user = await User.findOne({ firstName: txt });
    if (!user) {
      user = await User.findOne({ lastName: txt });
    }
    if (user) {
      console.log("User found!");
      res.status(200).send(user);
    } else {
      res.status(404).send("User Not Found!");
    }
  } catch (error) {
    next(error);
  }
});

router.post("/find_by_email", async (req, res, next) => {
  try {
    const txt = req.body.email;
    const user = await User.findOne({ email: txt });
    if (user) {
      console.log("User found!");
      res.status(200).send(user);
    } else {
      res.status(404).send("User Not Found!");
    }
  } catch (error) {
    next(error);
  }
});

router.post("/find_by_date", async (req, res, next) => {
  try {
    console.log(req.body);
    const uid = req.body.usedID;
    const sdate = req.body.startDate;
    const edate = req.body.endDate;
    const user = await User.findOne({ _id: uid });
    console.log(user);
    if (user) {
      for (var i = 0; i < user.friends.length; ++i) {
        if (
          user.friends[i].dateAdded.getTime() <= edate.getTime() &&
          user.friends[i].dateAdded.getTime() >= stade.getTime()
        ) {
          res.status(200).send(user.friends[i].friend);
        }
      }
      res.status(404).send("No Friend found in this date range");
    } else {
      res.status(404).send("User Not Found!");
    }
  } catch (error) {
    next(error);
  }
});

router.post("/find_by_mobile", async (req, res, next) => {
  try {
    console.log(req.body);
    const mob = req.body.mobileNum;
    const user = await User.find({ mobileNum: mob });
    if (user) {
      console.log("User found!");
      res.status(200).send(user);
    } else {
      res.status(404).send("User Not Found!");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;

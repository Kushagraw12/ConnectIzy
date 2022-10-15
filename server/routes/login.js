const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", (req, res) => {
  res.send("Users are live!");
});

// Add a new User - REGISTRATION
router.post("/register", async (req, res, next) => {
  try {
    if (typeof req.body.firstName === "undefined") {
      res.status(400).send("Firstname is required");
    }
    if (typeof req.body.lastName === "undefined") {
      res.status(400).send("Lastname is required");
    }
    if (typeof req.body.password === "undefined") {
      res.status(400).send("Password is required");
    }
    if (typeof req.body.emailid === "undefined") {
      res.status(400).send("Email id is required");
    }
    if (typeof req.body.linkedinProfile === "undefined") {
      res.status(400).send("LinkedIn Priofle Link is required");
    }
    if (typeof req.body.company === "undefined") {
      res.status(400).send("Current company is required");
    }
    if (typeof req.body.univ_attended === "undefined") {
      res.status(400).send("University Attended is required");
    }
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      emailid: req.body.emailid,
      mobileNum: req.body.mobileNum,
      qr_code: "abcdefgh",
      isAdmin: req.body.isAdmin === null ? false : req.body.isAdmin,
      linkedinProfile: req.body.linkedinProfile,
      friends: [],
      company: req.body.company,
      eventsAttended: [],
      univ_attended: req.body.univ_attended,
    });
    console.log(`${req.body} registered!`);
    user.save();
    res.status(200).send(user);
  } catch (err) {
    next(err);
  }
});

// Login
router.post("/login", async (req, res, next) => {
  try {
    const cred_email = req.body.email;
    const cred_pass = req.body.password;

    const user = await User.findOne({ password: cred_pass });
    if (user) {
      if (user.emailid === cred_email) {
        console.log(`${user} logged in`);
        res.status(200).send(user);
      } else {
        res.status(400).send("Invalid Email!");
      }
    } else {
      console.log("Invalid Email/Password");
      res.status(400).send("Invaild Email/Password");
    }
  } catch (error) {
    next(error);
  }
});

// Find a user
router.post("/getUser", async (req, res, next) => {
  try {
    const uid = req.body.userID;
    const user = await User.findOne({ _id: uid });
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;

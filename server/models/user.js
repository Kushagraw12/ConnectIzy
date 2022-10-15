const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  emailid: {
    type: String,
    required: true,
  },
  mobileNum: {
    type: String,
    required: true,
  },
  qr_code: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  linkedinProfile: {
    type: String,
    required: true,
  },
  friends: {
    type: Array,
    default: [],
  },
  company: {
    type: String,
    required: true,
  },
  eventsAttended: {
    type: Array,
    default: [],
  },
  univ_attended: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Users", UserSchema);

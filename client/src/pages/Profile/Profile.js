import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const user = {
  _id: "634afad21f47e2af438e80da",
  firstName: "Kushagra",
  lastName: "Wadhwa",
  password: "kushagra",
  emailid: "wadhwakushagra01@gmail.com",
  mobileNum: "9205104557",
  qr_code: "abcdefgh",
  isAdmin: true,
  linkedinProfile: "https://www.linkedin.com/in/kushagra-wadhwa12/",
  friends: [],
  company: "Samsung Research & Development, Bangalore",
  eventsAttended: [],
  univ_attended: "Delhi Technological University",
  __v: { $numberInt: "0" },
};

function Profile() {
  return (
    <div style={{ marginTop: "10%", marginLeft: "10%" }}>
      <div>
        {user.firstName} {user.lastName}
      </div>
      <div>
        <QRCodeCanvas
          id="qrCode"
          value={user._id}
          size={200}
          bgColor={"#ffffff"}
          level={"H"}
        />
      </div>
      <div>Email: {user.emailid}</div>
      <div>Mobile Number: {user.mobileNum}</div>
      <div>LinkedIn Profile: {user.linkedinProfile}</div>
      <div>Current Company: {user.company}</div>
      <div>University: {user.univ_attended}</div>
    </div>
  );
}

export default Profile;

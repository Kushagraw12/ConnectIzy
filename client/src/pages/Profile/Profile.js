import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./profile.css";
import { useSelector } from "react-redux";
import Link from "@mui/material/Link";
import GetFriend from "./GetFriend";

function Profile() {
  const user = useSelector((state) => state.auth.authData);

  console.log(user);
  return (
    <div>
      <div className="profileBanner">
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
      </div>
      <div>Email: {user.email}</div>
      <div>Mobile Number: {user.mobileNum}</div>
      <Link href={user.linkedinProfile} variant="body2" target="_blank">
        LinkedIn Profile
      </Link>
      <div>Current Company: {user.company}</div>
      <div>University: {user.univ_attended}</div>
      <div>
        Friends:
        {user.friends.map((item) => {
          return <GetFriend uid={item.friend} />;
        })}
      </div>
      <div>
        Events Attended:
        {user.eventsAttended.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    </div>
  );
}

export default Profile;

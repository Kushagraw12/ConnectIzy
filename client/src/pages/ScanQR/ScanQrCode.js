import { Typography } from "@mui/material";
import React from "react";
import QrReader from "react-qr-scanner";
import ButtonAppBar from "../../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ScanQrCode() {
  const navigate = useNavigate();
  const handleScan = (data) => {
    if (data) {
      const uid = localStorage.getItem("uid");
      axios
        .put("http://localhost:8080/friend/addFriend", {
          userID: uid,
          friendID: data.text,
        })
        .then(() => {
          alert("User added as your Friend!");
        })
        .then(() => {
          navigate("/profile");
        });
    }
  };
  const handleError = (err) => {
    console.log(err);
  };
  const previewStyle = {
    height: 400,
    width: 1000,
    display: "flex",
    "justify-content": "center",
  };
  return (
    <div>
      <ButtonAppBar page="qrscan" />
      <Typography variant="h3" style={{ textAlign: "center", padding: "2rem" }}>
        SCAN YOUR QR CODE HERE
      </Typography>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "auto" }}>
          <QrReader
            delay={100}
            style={previewStyle}
            onError={handleError}
            onScan={handleScan}
          />
        </div>
      </div>
      <div>Result: Scacnned Succesfully!</div>
    </div>
  );
  // take access for camera, scan qr, read the id, send it in post api: /user/getUser with "userID" as body
}

export default ScanQrCode;

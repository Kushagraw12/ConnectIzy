import { Typography } from "@mui/material";
import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import ButtonAppBar from "../../components/Navbar";

function ScanQrCode() {
  const [res, setRes] = useState("");
  const handleScan = (data) => {
    if (data) {
      setRes(data.text);
      console.log("RES:", res, "Data: ", data);
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
      <ButtonAppBar />
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
      <div>Result: {res}</div>
    </div>
  );
  // take access for camera, scan qr, read the id, send it in post api: /user/getUser with "userID" as body
}

export default ScanQrCode;

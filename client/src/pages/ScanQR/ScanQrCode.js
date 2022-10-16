import React, { useState } from "react";
import QrReader from "react-qr-scanner";

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
    height: 700,
    width: 1000,
    display: "flex",
    "justify-content": "center",
  };
  return (
    <div>
      Scanner for QR Codes here
      <div>
        <QrReader
          delay={100}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
        />
      </div>
      <div>Result: {res}</div>
    </div>
  );
  // take access for camera, scan qr, read the id, send it in post api: /user/getUser with "userID" as body
}

export default ScanQrCode;

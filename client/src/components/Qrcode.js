// 
import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QrCode = () => {
  const [url, setUrl] = useState("");
  const qrRef = useRef();

  const downloadQRCode = (e) => {
    e.preventDefault();
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setUrl("");
  };

  const qrCodeEncoder = (e) => {
    setUrl(e.target.value);
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={300}
      bgColor={"#00ff00"}
      level={"H"}
    />
  );
  return (
    <div className="qrcode__container">
      <div  ref={qrRef}>{qrcode}</div>
      <div className="input__group">
        <form onSubmit={downloadQRCode}>
          <label>Enter URL</label>
          <input
            type="text"
            value={url}
            onChange={qrCodeEncoder}
            placeholder="https://hackernoon.com"
          />
          <button type="submit" disabled={!url}>
            Download QR code
          </button>
        </form>
      </div>
    </div>
  );
};

export default QrCode;
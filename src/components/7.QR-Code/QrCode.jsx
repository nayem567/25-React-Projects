import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

const QrCode = () => {
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [input, setInput] = useState('');

    const handleSubmit = () =>{
        setQrCodeValue(input)
        setInput("")
        console.log(qrCodeValue);
    }

  return (
    <div className="qr-code-container">
      <h1>QrCode</h1>
      <div>
        <input onChange={(e) => setInput(e.target.value)} type="text" name="QRCode" placeholder="Enter your Name" />
        <button onClick={handleSubmit} disabled={input && input.trim() !== '' ? false : true}>Generate</button>
      </div>
      <div>
        <QRCode
          id="qr-code-value"
          size={256}
          style={{
            height: "auto",
            maxWidth: "100%",
            width: "100%",
            background: "white",
          }}
          value={qrCodeValue}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
};

export default QrCode;

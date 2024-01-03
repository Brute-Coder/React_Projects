import React from "react";
import QRCODE from "react-qr-code";
function QRcode() {
  const [input, setInput] = React.useState("");
  const [qrcodeData, setQrCodedata] = React.useState("");

  function handleClick() {
    if (input && input.trim()) {
      setQrCodedata(input);
      setInput("");
    } else alert("Enter Some Value To Encode");
  }
  return (
    <div>
      <h2> QR CODE GENERATOR </h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="qr-code"
          value={input}
          style={{
            padding: "10px",
            marginRight: "5px",
            backgroundColor: "#fff",
            color: "#000",
          }}
          placeholder="enter text to encode in qr"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          style={{ backgroundColor: "green", padding: "5px" }}
          onClick={() => handleClick()}
        >
          Generate
        </button>
      </div>
      {qrcodeData && <QRCODE id="qrcodevalue" value={qrcodeData} />}
    </div>
  );
}

export default QRcode;

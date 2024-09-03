import { useEffect, useState } from "react";
import "./styles.css";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const handleHexColor = () => {
    const hex = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    let newColor = "#";

    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.floor(Math.random() * hex.length);
      newColor += hex[randomNumber];
    }
    setColor(newColor);
  };
  const handleRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setColor(`RGB(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleRgbColor();
    } else handleHexColor();
  }, [typeOfColor]);

  return (
    <div className="container" style={{ background: color }}>
      <h1>Generate Random Colors</h1>
      <div>
        <button onClick={() => setTypeOfColor("hex")}>
          Generate HEX Colors
        </button>
        <button onClick={() => setTypeOfColor("rgb")}>
          Generate RGB Colors
        </button>
        <button
          onClick={typeOfColor === "hex" ? handleHexColor : handleRgbColor}
        >
          Generate Random Colors
        </button>
        <div className="content_text">
          <h3>{typeOfColor === "rgb" ? "RGB Color : " : "Hex Color : "}</h3>
          <h2>{color}</h2>
        </div>
      </div>
    </div>
  );
};

export default RandomColor;

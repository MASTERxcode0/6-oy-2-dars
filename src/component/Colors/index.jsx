import React from "react";
import "./index.css";

const ColorList = () => {
  const colors = [
    { name: "Qizil", code: "red" },
    { name: "Yashil", code: "green" },
    { name: "Moviy", code: "blue" },
    { name: "Sariq", code: "yellow" },
    { name: "To'q qizil", code: "maroon" },
  ];

  return (
    <div className="color-list">
      {colors.map((color, index) => (
        <div key={index} className="color-item">
          <div
            className="color-box"
            style={{ backgroundColor: color.code }}
          ></div>
          <p>{color.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ColorList;

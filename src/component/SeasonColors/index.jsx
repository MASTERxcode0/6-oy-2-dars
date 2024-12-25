import React from "react";
import "./index.css";

const SeasonColors = () => {
  const seasons = [
    { name: "Bahor", color: "green" },
    { name: "Yoz", color: "yellow" },
    { name: "Kuz", color: "orange" },
    { name: "Qish", color: "lightblue" },
  ];

  return (
    <div className="seasons-container">
      <h2>Fasl ranglari</h2>
      <div className="seasons-list">
        {seasons.map((season, index) => (
          <div key={index} className="season">
            <span>{season.name}</span>
            <div
              className="color-box"
              style={{ backgroundColor: season.color }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonColors;

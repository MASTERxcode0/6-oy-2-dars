import React from "react";
import "./index.css";

const WeekDays = () => {
  const days = [
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba",
    "Yakshanba",
  ];

  return (
    <div>
      <h2>Hafta kunlari</h2>
      <ul>
        {days.map((day, index) => (
          <li key={index}>{day}</li>
        ))}
      </ul>
    </div>
  );
};

export default WeekDays;

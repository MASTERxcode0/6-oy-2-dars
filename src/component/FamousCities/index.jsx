import React from "react";
import "./index.css"; 

const FamousCities = () => {
  const cities = [
    { name: "Parij", country: "Fransiya" },
    { name: "Tokio", country: "Yaponiya" },
    { name: "Nyu-York", country: "AQSh" },
    { name: "London", country: "Angliya" },
    { name: "Toshkent", country: "O'zbekiston" },
  ];

  return (
    <div className="cities-list">
      <h2>Mashhur shaharlar</h2>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>
            <strong>{city.name}</strong> – {city.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FamousCities;

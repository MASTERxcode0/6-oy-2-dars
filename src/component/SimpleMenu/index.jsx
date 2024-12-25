import React from "react";
import "./index.css";

const SimpleMenu = () => {
  const menuItems = ["Bosh sahifa", "Biz haqimizda", "Aloqa", "Yangiliklar"];

  return (
    <nav className="menu-container">
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SimpleMenu;

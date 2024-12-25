import React from "react";
import "./index.css";
import dog from "../../assets/images/dog.jpg";
import cat from "../../assets/images/cat.jpg";
import elephant from "../../assets/images/Elephant.jpg";
import lion from "../../assets/images/Lion.jpg";
import bird from "../../assets/images/Bird.jpg";

const AnimalGallery = () => {
  return (
    <div className="gallery">
      <div className="card">
        <p>It 🐶</p>
        <img src={dog} alt="It" />
      </div>
      <div className="card">
        <p>Mushuk 🐱</p>
        <img src={cat} alt="Mushuk" />
      </div>
      <div className="card">
        <p>Fil 🐘</p>
        <img src={elephant} alt="Fil" />
      </div>
      <div className="card">
        <p>Sher 🦁</p>
        <img src={lion} alt="Sher" />
      </div>
      <div className="card">
        <p>Qush 🐦</p>
        <img src={bird} alt="Qush" />
      </div>
    </div>
  );
};

export default AnimalGallery;

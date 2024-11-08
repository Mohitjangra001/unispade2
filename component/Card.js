import React from "react";
import "./Card.css";

function Card({ title, description, image, isImageLeft }) {
  return (
    <div className="card-container">
      <div className={`card-content ${isImageLeft ? "image-left" : "image-right"}`}>
        <div className="card-text">
          <h1 className="card-title">{title}</h1>
          <p className="card-description">{description}</p>
        </div>
        <div className="card-image-wrapper">
          <img src={image} alt={title} className="card-image" />
        </div>
      </div>
      <div className="card-divider"></div>
    </div>
  );
}

export default Card;

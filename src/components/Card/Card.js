import React from "react";

function Card({ label, image, ingredients, url }) {
  return (
    <div className="card-wrapper">
      <img src={image} alt={label} className="card-image" />
      <div className="card-body">
        <h3>{label}</h3>
      </div>
    </div>
  );
}

export default Card;

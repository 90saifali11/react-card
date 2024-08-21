// Card.js
import React from 'react';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button>add to cart</button>
      </div>
    </div>
  );
};

export default Card;

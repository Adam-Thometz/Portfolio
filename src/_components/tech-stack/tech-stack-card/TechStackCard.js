import React from "react";
import './TechStackCard.css';

const TechStackCard = ({ name, icon }) => {
  return (
    <div className="TechStackCard">
      <div className="TechStackCard-img-wrapper">
        <img src={icon} alt={name} />
      </div>
      <span className="TechStackCard-caption">{name}</span>
    </div>
  );
};

export default TechStackCard;
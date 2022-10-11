import React from "react";
import './TechStackCard.css';

const TechStackCard = ({ name, icon }) => {
  return (
    <figure className="TechStackCard" tabIndex={0}>
      <img className="TechStackCard-img" src={icon} alt={name} />
      <figcaption className="TechStackCard-caption">{name}</figcaption>
    </figure>
  );
};

export default TechStackCard;
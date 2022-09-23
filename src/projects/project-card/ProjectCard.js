import React from 'react'

import './ProjectCard.css'

const ProjectCard = ({ name, img, shortDescription }) => {
  const cssClass = name.toLowerCase().replaceAll(' ', '-').replace('8', 'eight');
  return (
    <figure className={`ProjectCard ${cssClass}`}>
      <figcaption>
        <h2>{name}</h2>
        <p>{shortDescription}</p>
      </figcaption>
      <img src={img} alt={name} />
    </figure>
  )
}

export default ProjectCard
import React from 'react';
import './Veterinaria.css';

export const Veterinaria = ({ name, information, image }) => {


  return (
    <div className="veterinarie-card">
      <img className='veterinarie-card__image' src={image} alt='' />
      <div className='veterinarie-card__info'>
        <h3 className='veterinarie-card__name heading--3 color-primary'>{name}</h3>
        <p className='paragraph'>{information}</p>
      </div>
    </div>
  );
};

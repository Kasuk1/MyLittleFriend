import React, { useState } from 'react';
import './Veterinaria.css';

export const Veterinaria = ({ _id, name, detail, location, avatar_url, services }) => {
  const [showServices, setShowServices] = useState(false);

  return (
    <div className="veterinarie-card">
      <img
        className='veterinarie-card__image'
        src={avatar_url ? avatar_url : 'https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
        alt={`${name} Veterinary`}
      />
      <div className='veterinarie-card__info position-relative'>
        {showServices ?
          (
            <>
              <ol className='veterinarie-card__services'>
                <i
                  className="fas fa-arrow-circle-down arrow-down"
                  onClick={() => setShowServices(!showServices)}
                >
                </i>
                {services.map(service => <li key={service._id}>{service.name}</li>)}
              </ol>
            </>
          )
          :
          (
            <>
              <i className="fas fa-arrow-circle-up arrow-up" onClick={() => setShowServices(!showServices)}></i>
              <h3 className='veterinarie-card__name heading--3 color-primary'>{name}</h3>
              <p className='veterinarie-card__detail paragraph mb-2'>{detail}</p>
              <p className='veterinarie-card__location'>{location}</p>
            </>
          )
        }

      </div>

    </div>
  );
};

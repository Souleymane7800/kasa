import React from 'react';
import { Link } from 'react-router-dom';
import './apartmentCard.css';

function ApartmentCard() {
  return (
    <Link to="/flat">
      <div className='apartment'>
        {/* <img src="https://picsum.photos/300/200" alt='' className='apartment__card__image'/> */}
        <div className='apartment__subtitle'>Titre de la location</div>
      </div>
    </Link>
  )
}

export default ApartmentCard

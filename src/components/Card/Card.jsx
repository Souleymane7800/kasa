import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';
// import datas from '../../data/data.json'

function ApartmentCard({ id, title, cover}) {

  return (
    <Link to={`/flat/${id}`}>
      <div className='apartment'>
        <img src={cover} alt={title} className='apartment__card__image'/>

        <h3 className='apartment__subtitle'>{title}</h3>
      </div>
    </Link>
  )
}

export default ApartmentCard

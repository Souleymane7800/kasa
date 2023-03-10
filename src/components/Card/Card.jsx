import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';
// import datas from '../../data/data.json'

function Card({ id, title, cover}) {

  return (
    <Link to={`/flat/${id}`}>
      <div className='card'>
        <img src={cover} alt={title} className='card__image'/>

        <h3 className='card__subtitle'>{title}</h3>
      </div>
    </Link>
  )
}

export default Card

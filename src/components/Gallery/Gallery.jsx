import React from 'react';
import Apartment from '../Apartment/Apartment';
import './gallery.css';


function Gallery() {
  return (
    <div className='home__gallery'>
      <Apartment />
      <Apartment/>
      <Apartment/>
      <Apartment/>
    </div>
  )
}

export default Gallery

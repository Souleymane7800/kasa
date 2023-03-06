import React from 'react';
import ApartmentCard from '../ApartmentCard/ApartmentCard';
import './gallery.css';


function Gallery() {
  return (
    <div className='home__gallery'>
      <ApartmentCard />
      <ApartmentCard/>
      <ApartmentCard/>
      <ApartmentCard/>
    </div>
  )
}

export default Gallery

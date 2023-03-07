import React from 'react';
import ApartmentCard from '../ApartmentCard/ApartmentCard';
import './gallery.css';
import datas from '../../data/data.json'


function Gallery() {
  return (
    <section className='home__gallery'>
      {datas.map(data => {
        return (
          <ApartmentCard
            key={data.id} 
            id={data.id} 
            title={data.title} 
            cover={data.cover} 
          />
        )
      })}
      {/* <ApartmentCard />
      <ApartmentCard/>
      <ApartmentCard/>
      <ApartmentCard/> */}
    </section>
  )
}

export default Gallery

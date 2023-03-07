import React from 'react';
import './homePage.css';
import Banner from '../../layout/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery';

function HomePage() {
  return (
    <div className='home'>
      <Banner />
      <Gallery />
    </div>
  );
}

export default HomePage

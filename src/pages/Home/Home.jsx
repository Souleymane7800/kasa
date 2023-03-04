import React from 'react';
import './home.css';
import Banner from '../../components/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery';
import Header from '../../components/Header/Header';

function Home() {
  return (
    <div className='home'>
      {/* <Header /> */}
      <Banner />
      <Gallery />

    </div>
  )
}

export default Home

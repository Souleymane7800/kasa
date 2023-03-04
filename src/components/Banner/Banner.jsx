import React from 'react';
import './banner.css';
import bannerImg from '../../assets/banner.png'

function Banner() {
  return (
    <section className='banner'>
      {/* <img src={bannerImg} alt='' className='banner__img' /> */}
      <h2 className='banner__text'>Chez vous, partout et ailleurs</h2>
    </section>
  )
}

export default Banner

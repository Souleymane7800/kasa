import React from 'react';
import './imageBanner.css'

export function ImageBanner(props) {

  return (
    <div className='image__banner_img'>
      <img src={props.imageUrl} alt='' />
    </div>
  )
}



import React, { useState } from 'react';
import './slideShow.css';
import aboutBanner from '../../assets/aboutbannerDesktop.png'

export function SlideShow(props) {

  // const imageUrl = props.imageUrl ? props.imageUrl: aboutBanner;
  const pictures = props.pictures;

  const [ currentPicture, setCurrentPicture ] = useState(0);

  const getClassName = (index) => {
    if (index === currentPicture) return "show";
    return "";
  };

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1)
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };

  const isPicturesAvailable = () => {
    return pictures && pictures.length > 0;
  };

  const getCarouselorImgDefault = () => {
    if (!isPicturesAvailable()) {
      return <img src={aboutBanner} alt="image banner" className='show' />
    }
    return pictures.map((pic, index) => (
      <img key={pic} src={pic} alt="" className={getClassName(index)}></img>
      ));
  };


  return (

    <div className='image__banner_img'>
      <div className="image__container">
        {getCarouselorImgDefault()}
      </div>
          {isPicturesAvailable() && 
          <>
            <button id='button' className='btn btn-previous' onClick={moveToPrevious}>
              <i className='fas fa-chevron-left'></i>
            </button>
            <span className='slide__counter'>
              {currentPicture + 1} / {pictures.length}
            </span>
            <button className='btn btn-next' onClick={moveToNext}>
              <i className='fas fa-chevron-right'></i>
            </button>
          </>
          }
    </div>
  )
}



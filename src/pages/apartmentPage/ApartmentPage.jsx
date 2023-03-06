import React from 'react';
import './apartmentPage.css';
import { DescriptionPanel } from '../../components/DescriptionPanel/DescriptionPanel';
// import data from '../../data/data.json';
// import greyStar from '../../assets/grey_star.png';
import { ImageBanner } from '../../components/ImageBanner/ImageBanner';
import ApartmentHeader from '../../components/apartmentHeader/ApartmentHeader';



function ApartmentPage() {
  return (
    <div className='apartment-page'>
      <ImageBanner />
      <ApartmentHeader />
      <div className="apartment__desc_area">
            <DescriptionPanel />
            <DescriptionPanel />
      </div>
    </div>
  );
}

export default ApartmentPage

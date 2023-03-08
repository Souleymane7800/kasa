import React, { useEffect, useState } from 'react';
import './apartmentPage.css';
import { DescriptionPanel } from '../../components/DescriptionPanel/DescriptionPanel';
import datas from '../../data/data.json';
// import greyStar from '../../assets/grey_star.png';
import { ImageBanner } from '../../components/ImageBanner/ImageBanner';
import ApartmentHeader from '../../components/apartmentHeader/ApartmentHeader';
import { useParams } from 'react-router-dom';



function ApartmentPage() {

  const [image, setImage] = useState([]);

  const idApartment = useParams("id").id;
  const currentApartment = datas.filter(data => data.id === idApartment);

  useEffect(() => {
		const currentApartment = datas.filter(data => data.id === idApartment);
		setImage(currentApartment[0].pictures);
	}, [idApartment]);

  return (
    <div className='apartment-page'>
      <ImageBanner pictures={currentApartment[0].pictures} />
      <ApartmentHeader currentApartment={currentApartment[0]} />
      <div className='apartment__desc_area'>
        <DescriptionPanel title="Description" content={currentApartment[0].description} />
        <DescriptionPanel title="Equipements" content={currentApartment[0].equipments.map((eq, index) => (
          <li key={index}>{eq}</li>
        ))} />
      </div>
    </div>
  );
}

export default ApartmentPage

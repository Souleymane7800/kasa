import React from 'react';
import { DescriptionPanel } from '../../components/DescriptionPanel/DescriptionPanel';
import { ImageBanner } from '../../components/ImageBanner/ImageBanner';
import './about.css';

function About() {
  return (
    <>
      <ImageBanner />
      <div className="about__container">
            <DescriptionPanel title="Fiabilité" content="C'est très important"/>
            <DescriptionPanel title="Respect" content="C'est très important" />
            <DescriptionPanel title="Servive" content="C'est très important" />
            <DescriptionPanel title="Responsabilité" content="C'est très important" />
      </div>
    </>
  )
}

export default About

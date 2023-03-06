import React from 'react';
import { DescriptionPanel } from '../../components/DescriptionPanel/DescriptionPanel';
import { ImageBanner } from '../../components/ImageBanner/ImageBanner';
import './about.css';

function About() {
  return (
    <>
      <ImageBanner />
      <div className="about__container">
            <DescriptionPanel />
            <DescriptionPanel />
            <DescriptionPanel />
            <DescriptionPanel />
      </div>
    </>
  )
}

export default About

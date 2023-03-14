import React from 'react';
import { Collapse } from '../../components/Collapse/Collapse';
import { SlideShow } from '../../components/SlideShow/SlideShow';
import './about.css';
import aboutData from '../../data/aboutData.json'
import Main from '../../layout/Main/Main'

function About() {
  console.log("aboutdataaaaaaaaaaaaa", aboutData)
  return (
    <>
    <div className='about__banner'>
      <SlideShow />

    </div>
      <section className="about__container">
        {aboutData.map(data => {
          return (
            <div key={data.id} className='collapse__panel'>
                <Collapse title={data.title} content={data.content} />
            </div>
          )
        })}
      </section>
    </>
  )
}

export default About

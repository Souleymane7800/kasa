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
      <SlideShow />
      <section className="about__container">
        {aboutData.map(data => {
          return (
            <div key={data.id} className='collapse__content'>
              <Main>
                <Collapse title={data.title} content={data.content} />
              </Main>
            </div>
          )
        })}
            {/* <Collapse title="Fiabilité" content="C'est très important"/>
            <Collapse title="Respect" content="C'est très important" />
            <Collapse title="Servive" content="C'est très important" />
            <Collapse title="Responsabilité" content="C'est très important" /> */}
      </section>
    </>
  )
}

export default About

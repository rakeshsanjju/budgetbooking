import React from 'react'
import './AboutBanner.css'
import AboutBanner from './AboutBanner'
import TestimonialsCard from './Testimonialscard'
import FAQ from './faq';
import FindPackage from './FindPackage';
import AboutWhyChoose from './AboutWhyChoose';
import AboutMisssion from './aboutmisssion';
import AboutTeam from './AboutTeam';

const About = () => {
  return (
    <div>
      <AboutBanner />
      <AboutWhyChoose />
      <AboutMisssion />
      <AboutTeam />
      <TestimonialsCard />



      <FAQ />
    </div>
  )
}

export default About
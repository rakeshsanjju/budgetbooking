import React from 'react'
import Slider from './Slider'
import Facilitiescard from './Facilitiescard'
import Homefilter from './Homefilter'
import HSection4 from './HSection4'
import HSection5 from './Hsection5'
import Testimonials from './Testimonials'
import TestimonialsCard from './Testimonialscard'
import ServicesandHotels from './ServicesandHotels'
import FAQ from './faq'

const Home = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <Slider />
      <Facilitiescard />
      <Homefilter />
      <HSection4 />
      <HSection5 />
      <ServicesandHotels />
      <TestimonialsCard />
      <FAQ />
    </div>
  )
}

export default Home
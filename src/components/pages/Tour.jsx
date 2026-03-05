import React from 'react'
import TourismBanner from './TourismBanner'
import TourPackages from './TourPackages'
import TestimonialsCard from './Testimonialscard'
import FAQ from './faq'

const Tour = () => {
  return (
    <div>
      <TourismBanner />
      <TourPackages />
      <TestimonialsCard />
      <FAQ />
    </div>
  )

}

export default Tour
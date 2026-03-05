import React from 'react'
import './Testimonialscard.css'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'USA Tours',
      image: '/usa-tour.png',
      alt: 'Statue of Liberty'
    },
    {
      id: 2,
      title: 'India Tours',
      image: '/india-tour.png',
      alt: 'Taj Mahal'
    },
    {
      id: 3,
      title: 'Australia Tours',
      image: '/australia-tour.png',
      alt: 'Sydney Opera House'
    },
    {
      id: 4,
      title: 'Canada Tours',
      image: '/canada-tour.png',
      alt: 'Canadian Landscape'
    }
  ]

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <img 
                src={service.image} 
                alt={service.alt}
                className="service-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

import React from 'react'
import './ServicesandHotels.css'

const ServicesandHotels = () => {
    const services = [
        {
            id: 1,
            title: 'USA Tours',
              image: './s1 (1).png',
            alt: 'Statue of Liberty'
        },
        {
            id: 2,
            title: 'India Tours',
              image: './s1 (1).png',
            alt: 'Taj Mahal'
        },
        {
            id: 3,
            title: 'Australia Tours',
              image: './s1 (1).png',
            alt: 'Sydney Opera House'
        },
        {
            id: 4,
            title: 'Canada Tours',
            image: './s1 (1).png',
            alt: 'Canadian Landscape'
        }
    ]

    const hotels = [
        {
            id: 1,
            name: 'Crowne Plaza',
            logo: './i1.png',
            alt: 'Crowne Plaza Hotels & Resorts'
        },
        {
            id: 2,
            name: 'CSH Earth',
            logo: './i1.png',
            alt: 'CSH Earth Hotels'
        },
        {
            id: 3,
            name: 'TAJ',
            logo: './i1.png',
            alt: 'Taj Hotels'
        },
        {
            id: 4,
            name: 'Crowne Plaza',
            logo: './i1.png',
            alt: 'Crowne Plaza Hotels & Resorts'
        }
    ]

    return (
        <section className="services-hotels-container">
            {/* Services Section */}
            <div className="services-wrapper">
                <div className="services-header">
                    <h2 className="services-title">Our Services</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-item">
                            <img
                                src={service.image}
                                alt={service.alt}
                                className="service-image"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Affiliated Hotels Section */}
            <div className="hotels-wrapper">
                <h2 className="hotels-title">Affiliated hotels</h2>

                <div className="hotels-grid">
                    {hotels.map((hotel) => (
                        <div key={hotel.id} className="hotel-item">
                            <img
                                src={hotel.logo}
                                alt={hotel.alt}
                                className="hotel-logo"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesandHotels

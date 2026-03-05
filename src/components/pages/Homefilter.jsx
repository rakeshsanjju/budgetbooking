import React from 'react'
import './Homefilter.css'

const Homefilter = () => {
    const tourPackages = [
        {
            id: 1,
            image: '/exclusive.png',

        },
        {
            id: 2,
            image: '/exclusive.png',

        },
        {
            id: 3,
            image: '/exclusive.png',

        },
        {
            id: 4,
            image: '/exclusive.png',
        },
         {
            id: 5,
            image: '/exclusive.png',
        },
         {
            id: 6,
            image: '/exclusive.png',
        }
    ]

    return (
        <section className="homefilter-section">
            <div className="homefilter-container">
                {/* Header Section */}
                <div className="homefilter-header">
                    <h1>Tour Packages – Customized Holiday Packages</h1>
                    <p>
                        Discover the joy of travel with our Customized Holiday Packages, designed to match your dream getaway.
                        Whether you're planning a romantic escape, a family vacation, an adventure trip, or a peaceful retreat, we curate every detail
                        to suit your interests and budget. Choose from a wide range of destinations, premium stays, guided tours, and exclusive experiences.
                        Our travel experts personalize your itinerary to ensure comfort, convenience, and unforgettable memories. Enjoy hassle-free planning,
                        24/7 support, and the freedom to travel your way.
                    </p>
                </div>

                {/* Exclusive Luxury Tours Section */}
                <div className="exclusive-section">
                    <h2>Exclusive Luxury Tours</h2>

                    {/* Tour Cards Grid */}
                    <div className="tour-grid">
                        {tourPackages.map((pkg) => (
                            <div key={pkg.id} className="tour-card">
                                {/* Card Image */}
                                <div className="card-image-wrapper">
                                    <img src={pkg.image} alt={pkg.title} className="card-image" />

                                    {/* Exclusive Badge */}

                                </div>


                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Homefilter

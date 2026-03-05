import React from 'react';
import './TourPackages.css';

const TourPackages = () => {
  const packages = [
    {
      id: 1,
      image: './package-1.png',
      duration: '3 Days 2 Nights',
      title: 'Holiday Package',
      locations: 'Myanmar | Houseboat',
      amenities: ['Hotel', 'Sightseeing', 'Tour Guide', 'Food']
    },
    {
      id: 2,
      image: './package-2.png',
      duration: '3 Days 2 Nights',
      title: 'Holiday Package',
      locations: 'New York | Manhattan',
      amenities: ['Hotel', 'Sightseeing', 'Tour Guide', 'Food']
    },
    {
      id: 3,
      image: './package-3.png',
      duration: '3 Days 2 Nights',
      title: 'Holiday Package',
      locations: 'Myanmar | Houseboat',
      amenities: ['Hotel', 'Sightseeing', 'Tour Guide', 'Food']
    },
    {
      id: 4,
      image: './package-1.png',
      duration: '3 Days 2 Nights',
      title: 'Holiday Package',
      locations: 'Myanmar | Houseboat',
      amenities: ['Hotel', 'Sightseeing', 'Tour Guide', 'Food']
    },
    {
      id: 5,
      image: './package-2.png',
      duration: '3 Days 2 Nights',
      title: 'Holiday Package',
      locations: 'New York | Manhattan',
      amenities: ['Hotel', 'Sightseeing', 'Tour Guide', 'Food']
    },
    {
      id: 6,
      image: './package-3.png',
      duration: '3 Days 2 Nights',
      title: 'Holiday Package',
      locations: 'Myanmar | Houseboat',
      amenities: ['Hotel', 'Sightseeing', 'Tour Guide', 'Food']
    },
    {
      id: 7,
      image: './package-1.png',
      duration: '3 Days 2 Nights',
      title: 'Holiday Package',
      locations: 'Myanmar | Houseboat',
      amenities: ['Hotel', 'Sightseeing', 'Tour Guide', 'Food']
    },
    {
      id: 8,
      image: './package-2.png',
      duration: '3 Days 2 Nights',
      title: 'Holiday Package',
      locations: 'New York | Manhattan',
      amenities: ['Hotel', 'Sightseeing', 'Tour Guide', 'Food']
    },
    {
      id: 9,
      image: './package-3.png',
      duration: '3 Days 2 Nights',
      title: 'Holiday Package',
      locations: 'Myanmar | Houseboat',
      amenities: ['Hotel', 'Sightseeing', 'Tour Guide', 'Food']
    },
    {
      id: 10,
      image: './package-1.png',
      duration: '3 Days 2 Nights',
      title: 'Holiday Package',
      locations: 'Myanmar | Houseboat',
      amenities: ['Hotel', 'Sightseeing', 'Tour Guide', 'Food']
    },
    {
      id: 11,
      image: './package-2.png',
      duration: '3 Days 2 Nights',
      title: 'Holiday Package',
      locations: 'New York | Manhattan',
      amenities: ['Hotel', 'Sightseeing', 'Tour Guide', 'Food']
    },
    {
      id: 12,
      image: './package-3.png',
      duration: '3 Days 2 Nights',
      title: 'Holiday Package',
      locations: 'Myanmar | Houseboat',
      amenities: ['Hotel', 'Sightseeing', 'Tour Guide', 'Food']
    }
  ];

  const amenityIcons = {
    'Hotel': '🏨',
    'Sightseeing': '🏔️',
    'Tour Guide': '👤',
    'Food': '🍽️'
  };

  return (
    <section className="tour-packages">
      <div className="packages-container">
        <div className="packages-grid">
            
          {packages.map(pkg => (
            <div key={pkg.id} className="package-card">
              <div className="card-image">
                <img src={pkg.image} alt={pkg.title} />
              </div>
              
              <div className="card-content">
                <p className="duration">{pkg.duration}</p>
                <h3 className="package-title">{pkg.title}</h3>
                <p className="locations">
                  Locations: <span>{pkg.locations}</span>
                </p>
                
                <a href="/" className="view-details">View Details</a>
                
                <div className="amenities">
                  {pkg.amenities.map((amenity, index) => (
                    <div key={index} className="amenity-item">
                      <span className="amenity-icon">{amenityIcons[amenity]}</span>
                      <span className="amenity-name">{amenity}</span>
                    </div>
                  ))}
                </div>
                
                <div className="card-buttons">
                  <button className="btn btn-outline">Call Details</button>
                  <button className="btn btn-primary">Book Now</button>
                  <button className="btn btn-outline">View More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages;

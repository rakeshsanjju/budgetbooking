import React from 'react';
import './AboutTeam.css';

const AboutTeam = () => {
  return (
    <section className="about-team">
      <div className="team-container">
        <div className="team-content">
          <div className="team-image">
            <img src="./team.png" alt="Our Team" />
          </div>
          <div className="team-info">
            <h2>Our Team</h2>
            <p>
              At BuilgetBooking, our team is the driving force behind every memorable journey you experience with us. 
              We are a diverse group of passionate travel enthusiasts, experienced tour planners, and dedicated customer 
              service professionals united by a shared vision: to make travel accessible, enjoyable, and transformative 
              for everyone.
            </p>
            <p>
              Our team brings together decades of combined expertise in the travel and tourism industry. From seasoned 
              destination specialists to innovative marketing strategists, each member plays a vital role in curating 
              exceptional experiences. We understand that travel is more than just visiting new places—it's about creating 
              lasting memories and expanding horizons.
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;

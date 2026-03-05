import React from 'react'
import './Hsection5.css'

const HSection5 = () => {
  return (
    <section className="hsection5-container">
      <div className="hsection5-card">
        {/* Left Side - Image */}
        <div className="hsection5-image-wrapper">
          <img 
            src="./couple.png" 
            alt="Happy Couple" 
            className="hsection5-image"
          />
        </div>

        {/* Right Side - Content */}
        <div className="hsection5-content">
          <h2 className="hsection5-title">We Guarantee the Trip You Book With Us!</h2>
          
          <p className="hsection5-description">
            From the moment you smile, we ensure every detail of your holiday is taken care of. Enjoy the comfort of trusting drivers ready to receive you cordially. Be rest assured that you'll stand out in our itineraries for smooth and well-coordinated trip logistics. Everything is crafted for your happiness, and all you need to do is relax, explore, and make unforgettable memories. Your trip is our promise — and we're always here to support you anytime.
          </p>

          {/* Author Section */}
          <div className="hsection5-author">
            <p className="author-name">Mahesh & Sneakran</p>
            <p className="author-title">Managing Director & Director-Sales | Paradise Holidays</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HSection5

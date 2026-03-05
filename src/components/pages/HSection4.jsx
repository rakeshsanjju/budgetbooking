import React, { useState } from 'react'
import './HSection4.css'

const HSection4 = () => {
  const [mobileNumber, setMobileNumber] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (mobileNumber.trim()) {
      console.log('Mobile Number:', mobileNumber)
      setSubmitted(true)
      setMobileNumber('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="hsection4-container">
      <div className="hsection4-card">
        {/* Left Side - Image */}
        <div className="hsection4-image-wrapper">
          <img 
            src="/paradise.png" 
            alt="Paradise Holidays" 
            className="hsection4-image"
          />
        </div>

        {/* Right Side - Content */}
        <div className="hsection4-content">
          <h2 className="hsection4-title">Paradise Holidays</h2>
          
          <p className="hsection4-description">
            Paradise Holidays is a 17-year-old, Kerala Tourism-accredited company with 250+ staff. A trusted wedding and honeymoon specialist, we've served 50,000+ satisfied customers over the years. With more than 1,500 5-star reviews online, we are recognized as Kerala's leading and most reliable tour operator. Proudly employing a 60% women workforce—driven mainly from the local community—we stand as champions of gender equality and women's empowerment.
          </p>

          {/* Call Back Section */}
          <div className="hsection4-callback">
            <h3 className="callback-title">Get a call back</h3>
            
            <form onSubmit={handleSubmit} className="callback-form">
              <input
                type="tel"
                placeholder="Enter your Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="callback-input"
                required
              />
              <button type="submit" className="callback-submit">
                SUBMIT
              </button>
            </form>

            {submitted && (
              <p className="callback-success">Thank you! We'll call you soon.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HSection4
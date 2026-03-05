import React from 'react'
import { useState } from 'react'

const FindPackage = () => {
    const [mobileNumber, setMobileNumber] = useState('')
    
      const handleSubmit = (e) => {
        e.preventDefault()
        if (mobileNumber.trim()) {
          console.log('Mobile Number:', mobileNumber)
          setMobileNumber('')
          setTimeout(() => setSubmitted(false), 3000)
        }
      }
  return (
    <div className="findPackage">
        <div className='findPackage-content'>
            <h2>Can't find right package? Get a call back Now</h2>
        </div>
        <div className='findPackage-form'>
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

        </div>
    </div>
  )
}

export default FindPackage
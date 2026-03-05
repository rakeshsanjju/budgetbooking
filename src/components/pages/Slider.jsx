import React, { useState, useEffect } from 'react'
import './Slider.css'

const Slider = () => {
  const images = [
    './Mask group.png',
    './Mask group.png',
    './Mask group.png',
    './Mask group.png',
    './Mask group.png'
    
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-play slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        {/* Slider track */}
        <div 
          className="slider-track"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: 'transform 0.5s ease-in-out'
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button className="slider-button prev-button" onClick={goToPrevious}>
          &#10094;
        </button>
        <button className="slider-button next-button" onClick={goToNext}>
          &#10095;
        </button>
      </div>

      {/* Dots indicator */}
      <div className="slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="slider-counter">
        {currentSlide + 1} / {images.length}
      </div>
    </div>
  )
}

export default Slider
import React from 'react'
import './footer.css'

const Footer = () => {
  const services = [
    'Tour Packages',
    'Hotel Booking',
    'Boutique Hotels',
    'Staycation Tourism',
    'Corporate Tourism',
    'Educational Tourism',
    'Cruises &amp; Sailing',
    'Destination Weddings'
  ]

  const tourByDuration = [
    '1 Days / 1 Nights',
    '3 Days / 2 Nights',
    '4 Days / 3 Nights',
    '5 Days / 4 Nights',
    '6 Days / 5 Nights',
    '7 Days / 6 Nights',
    '8 Days / 7 Nights',
    '9 Days / 8 Nights'
  ]

  const tourPackages = [
    'Gab Packages',
    'Packages',
    'Tour Packages',
    'Holiday Packages',
    'Honeymoon Packages',
    'Women Only Tour',
    'Family Tours',
    'Luxury Tours'
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section - Logo & About */}
        <div className="footer-section footer-about">
          <div className="footer-logo-wrapper">
            <img 
              src='/logo.png' 
              alt="BudgetBooking Logo"
              className="footer-logo-image"
            />
          </div>
          <h3 className="footer-brand">BUDGETBOOKING</h3>
          <p className="footer-tagline">
            Every success venture has a story behind it, we too have a rich story. The journey of an entrepreneur
          </p>
        </div>

        {/* Services Column */}
        <div className="footer-section footer-links">
          <h4 className="footer-section-title">Our Services</h4>
          <ul className="footer-list">
            {services.map((service, index) => (
              <li key={index}>
                <a href="#services">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Tour by Duration Column */}
        <div className="footer-section footer-links">
          <h4 className="footer-section-title">Tour by duration</h4>
          <ul className="footer-list">
            {tourByDuration.map((duration, index) => (
              <li key={index}>
                <a href="#duration">{duration}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Tour Packages Column */}
        <div className="footer-section footer-links">
          <h4 className="footer-section-title">Tour Packages</h4>
          <ul className="footer-list">
            {tourPackages.map((pkg, index) => (
              <li key={index}>
                <a href="#packages">{pkg}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-copyright">
            © 2025 BudgetBooking. All Rights Reserved
          </p>
          <div className="footer-links-bottom">
            <a href="#privacy" className="footer-link">Privacy policy</a>
            <span className="footer-separator">|</span>
            <a href="#disclaimer" className="footer-link">Disclaimer</a>
            <span className="footer-separator">|</span>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
          <div className="footer-social">
            <a href="#facebook" className="social-link" title="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#twitter" className="social-link" title="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#instagram" className="social-link" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

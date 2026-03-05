import React from 'react'
import './AboutWhyChoose.css'

const Chevron = () => (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
		<path d="M7 6L12 11L7 16" stroke="#31434a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M11 6L16 11L11 16" stroke="#31434a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
)

const AboutWhyChoose = () => {
	return (
		<div className="about-why-choose-wrapper">
			<div className="about-why-card">
				<div className="why-left">
					<h2 className="why-title">Why Choose Us</h2>
					<ul className="why-list">
						<li><span className="bullet"><Chevron/></span><span className="why-text">5+ Years Of Trusted Travel Expertise</span></li>
						<li><span className="bullet"><Chevron/></span><span className="why-text">Handpicked Hotels & Verified Stays</span></li>
						<li><span className="bullet"><Chevron/></span><span className="why-text">Customizable Itineraries Based On Your Style</span></li>
						<li><span className="bullet"><Chevron/></span><span className="why-text">Budget-Friendly Packages For All Travelers</span></li>
						<li><span className="bullet"><Chevron/></span><span className="why-text">24/7 Customer Support Throughout Your Journey</span></li>
						<li><span className="bullet"><Chevron/></span><span className="why-text">Easy Booking, Secure Payments, Transparent Pricing</span></li>
					</ul>
				</div>
				<div className="why-right">
					<div className="why-right-inner">
						<img src="./why-choose-us-1.png" alt="Why Choose Us" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutWhyChoose


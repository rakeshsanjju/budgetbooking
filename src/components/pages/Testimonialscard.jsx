import React from 'react'
import './Testimonialscard.css'

const TestimonialsCard = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Emma Johnson',
            title: 'Product Manager, Tech Solutions',
            rating: 5,
            image: './user profile.png',
            text: 'Our trip was perfectly planned from start to finish. Excellent hotels, friendly drivers, and a stress-free holiday experience. Highly recommended for memorable vacations.'
        },
        {
            id: 2,
            name: 'Emma Johnson',
            title: 'Product Manager, Tech Solutions',
            rating: 5,
            image: './user profile.png',
            text: 'Our holiday was seamless and memorable. The team managed everything with great care and attention to detail, delivering fantastic coordination. Truly a delightful and stress-free travel experience for our family.'
        },
        {
            id: 3,
            name: 'Emma Johnson',
            title: 'Product Manager, Tech Solutions',
            rating: 5,
            image: './user profile.png',
            text: 'Very professional team. Everything – from airport pickup to sightseeing – was smooth and well-coordinated. Highly appreciated the care provided throughout the trip. Great choice for family and couple travel.'
        }
    ]

    const renderStars = (rating) => {
        return '★'.repeat(rating)
    }

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <h2 className="testimonials-title">Our Customer Stories!</h2>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="testimonial-header">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="testimonial-avatar"
                                />
                                <div className="testimonial-info">
                                    <h3 className="testimonial-name">{testimonial.name}</h3>
                                    <p className="testimonial-title">{testimonial.title}</p>
                                </div>
                            </div>

                            <div className="testimonial-rating">
                                <span className="stars">{renderStars(testimonial.rating)}</span>
                            </div>

                            <p className="testimonial-text">
                                {testimonial.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsCard

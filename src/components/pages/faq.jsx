import React, { useState } from 'react'
import './faq.css'

const FAQ = () => {
  const [expandedId, setExpandedId] = useState(null)

  const faqs = [
    {
      id: 1,
      question: 'How do I choose the right destination for my vacation?',
      answer: 'Consider your interests, budget, climate preferences, and travel time. Our travel experts can help you find the perfect destination that matches your preferences and vacation style.'
    },
    {
      id: 2,
      question: 'What documents are required for international travel?',
      answer: 'Generally, you will need a valid passport and visa (if required). Different countries have different requirements. We recommend checking with your embassy or consulate for specific document requirements for your destination.'
    },
    {
      id: 3,
      question: 'When is the best time to book flights and hotels?',
      answer: 'Typically, booking 2-3 months in advance offers the best rates. However, this varies by destination and season. Off-season travel often provides better deals. Contact our team for personalized booking recommendations.'
    },
    {
      id: 4,
      question: 'Is travel insurance mandatory?',
      answer: 'While not always mandatory, travel insurance is highly recommended. It provides coverage for medical emergencies, trip cancellations, lost luggage, and other unforeseen circumstances. We offer various insurance plans tailored to your needs.'
    },
    {
      id: 5,
      question: 'Can I customize my travel itinerary?',
      answer: 'Absolutely! We specialize in customized travel experiences. You can adjust accommodation, activities, destinations, and duration. Our expert team will work with you to create the perfect trip.'
    },
    {
      id: 6,
      question: 'Are airport transfers included in holiday packages?',
      answer: 'Airport transfers are usually included in many holiday packages, but it depends on the package type and destination. Some offer private transfers, while others provide shared or optional add-ons. Always confirm with your travel agent to know what\'s covered before booking.'
    }
  ]

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="faq-container">
      <div className="faq-wrapper">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <div 
                className="faq-question"
                onClick={() => toggleExpand(faq.id)}
              >
                <span className="faq-number">{faq.id}.</span>
                <span className="faq-text">{faq.question}</span>
                <button 
                  className={`faq-button ${expandedId === faq.id ? 'active' : ''}`}
                  aria-expanded={expandedId === faq.id}
                >
                </button>
              </div>

              {expandedId === faq.id && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}

              {faq.id < faqs.length && <div className="faq-divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

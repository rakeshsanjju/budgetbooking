import React from "react";
import "./Testimonialcards.css";

const TestimonialCards = () => (
 <section className="wall">
      <div className="wall-container">

        <h2 className="title">Wall of Love!</h2>

        <p className="subtitle">
          Holidays Reviews & Guest Testimonials – Discover 6,000+ Five-Star Journeys Planned by us
        </p>

        {/* Google Rating Box */}
        <div className="rating-box">

          <div className="rating-left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="google"
              className="google-logo"
            />

            <span className="rating-text">Rating</span>

            <div className="stars">
              <span>5.0</span>
              <span className="star">★★★★★</span>
              <span className="reviews">420 reviews</span>
            </div>
          </div>

          <button className="review-btn">Write A Review</button>

        </div>

        {/* Review Card */}
        <div className="review-card">

          <div className="review-header">

            <div className="user">
              <img
                src="https://i.pravatar.cc/40"
                alt="avatar"
                className="avatar"
              />

              <div>
                <div className="name-row">
                  <span className="name">KaiB</span>
                  <span className="dot">•</span>
                  <span className="date">22 Jul</span>

                  <span className="verified">Verified</span>
                </div>
              </div>
            </div>

            <div className="stars yellow">★★★★★</div>

          </div>

          <p className="review-text">
            KaiB was amazing with our cats!! This was our first time using a
            pet-sitting service, so we were naturally quite anxious. We took a
            chance on Kai and completely lucked out! We booked Kai to come
            twice a day for three days. Kai spent a considerable amount of
            time playing and engaging with our cats. She also sent us very
            funny and detailed reports...
          </p>

          <a className="read-more">Read More</a>

        </div>
           <div className="review-card">

          <div className="review-header">

            <div className="user">
              <img
                src="https://i.pravatar.cc/40"
                alt="avatar"
                className="avatar"
              />

              <div>
                <div className="name-row">
                  <span className="name">KaiB</span>
                  <span className="dot">•</span>
                  <span className="date">22 Jul</span>

                  <span className="verified">Verified</span>
                </div>
              </div>
            </div>

            <div className="stars yellow">★★★★★</div>

          </div>

          <p className="review-text">
            KaiB was amazing with our cats!! This was our first time using a
            pet-sitting service, so we were naturally quite anxious. We took a
            chance on Kai and completely lucked out! We booked Kai to come
            twice a day for three days. Kai spent a considerable amount of
            time playing and engaging with our cats. She also sent us very
            funny and detailed reports...
          </p>

          <a className="read-more">Read More</a>

        </div>
           <div className="review-card">

          <div className="review-header">

            <div className="user">
              <img
                src="https://i.pravatar.cc/40"
                alt="avatar"
                className="avatar"
              />

              <div>
                <div className="name-row">
                  <span className="name">KaiB</span>
                  <span className="dot">•</span>
                  <span className="date">22 Jul</span>

                  <span className="verified">Verified</span>
                </div>
              </div>
            </div>

            <div className="stars yellow">★★★★★</div>

          </div>

          <p className="review-text">
            KaiB was amazing with our cats!! This was our first time using a
            pet-sitting service, so we were naturally quite anxious. We took a
            chance on Kai and completely lucked out! We booked Kai to come
            twice a day for three days. Kai spent a considerable amount of
            time playing and engaging with our cats. She also sent us very
            funny and detailed reports...
          </p>

          <a className="read-more">Read More</a>

        </div>
           <div className="review-card">

          <div className="review-header">

            <div className="user">
              <img
                src="https://i.pravatar.cc/40"
                alt="avatar"
                className="avatar"
              />

              <div>
                <div className="name-row">
                  <span className="name">KaiB</span>
                  <span className="dot">•</span>
                  <span className="date">22 Jul</span>

                  <span className="verified">Verified</span>
                </div>
              </div>
            </div>

            <div className="stars yellow">★★★★★</div>

          </div>

          <p className="review-text">
            KaiB was amazing with our cats!! This was our first time using a
            pet-sitting service, so we were naturally quite anxious. We took a
            chance on Kai and completely lucked out! We booked Kai to come
            twice a day for three days. Kai spent a considerable amount of
            time playing and engaging with our cats. She also sent us very
            funny and detailed reports...
          </p>

          <a className="read-more">Read More</a>

        </div>
      </div>
    </section>
);

export default TestimonialCards;
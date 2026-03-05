import React from "react";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <h2>Contact Us</h2>

          <p className="contact-desc">
            We are committed to processing the information in order to contact
            you and talk about your project.
          </p>

          <div className="contact-info">

            <div className="info-item">
              <span className="icon">✉️</span>
              <p style={{ marginTop: "0px" }}>example@teamwebflow.com</p>
            </div>

            <div className="info-item">
              <span className="icon">📍</span>
              <p style={{ marginTop: "0px" }}>
                4074 Ebert Summit Suite 375 <br />
                Lake Leonardchester
              </p>
            </div>

            <div className="info-item">
              <span className="icon">📞</span>
            <p style={{ marginTop: "0px" }}>+44 123 654 7890</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}

        <div className="contact-right">

          <h2>Get in Touch</h2>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Name*"
              required
            />

            <input
              type="email"
              placeholder="Email"
            />

            <input
              type="text"
              placeholder="Website"
            />

            <textarea
              placeholder="Message"
              rows="4"
            ></textarea>

            <button type="submit" className="submit-btn">
              Submit
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
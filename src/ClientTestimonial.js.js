import React from "react";
import "./ClientTestimonials.css";

function ClientTestimonials() {
  return (
    <div className="testimonials-container">
      <div className="testimonials-title">What Our Clients Say</div>
      <p className="testimonials-intro">
        See what makes our platform the top choice for professionals seeking
        product management mentorship. Our clients’ testimonials showcase the
        transformative impact of connecting with experienced mentors.
      </p>
      <p className="testimonials-quote">
        “Connecting with a product design mentor through Unispade has
        transformed my approach to work. I’m grateful for the personalised
        guidance and valuable insights!”
      </p>
      <div className="profile-details">
        <div className="profile-name">Simran Gupta</div>
        <div className="profile-role">Product Manager</div>
      </div>

      <p className="testimonials-quote">
        “Connecting with a product design mentor through Unispade has
        transformed my approach to work. I’m grateful for the personalised
        guidance and valuable insights!”
      </p>
      <div className="profile-details">
        <div className="profile-name">Jason K.</div>
        <div className="profile-role">Startup Founder</div>
      </div>

      <div className="testimonials-footer">
        Our mentors are consistently rated highly for their professionalism,
        guidance, and commitment to helping others succeed.
      </div>
    </div>
  );
}

export default ClientTestimonials;

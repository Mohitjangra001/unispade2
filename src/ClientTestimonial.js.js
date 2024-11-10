import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./ClientTestimonials.css";

function ClientTestimonials() {
  const testimonials = [
    {
      quote:
        "Connecting with a product design mentor through Unispade has transformed my approach to work. I’m grateful for the personalised guidance and valuable insights!",
      name: "Simran Gupta",
      role: "Product Manager",
    },
    {
      quote:
        "The mentorship I received through Unispade was invaluable. It allowed me to refine my product strategy and approach with confidence.",
      name: "Jason K.",
      role: "Startup Founder",
    },
    {
      quote:
        "Unispade connected me with a mentor who provided insights tailored to my career goals. I highly recommend it!",
      name: "Emily R.",
      role: "Product Designer",
    },
  ];

  const items = testimonials.map((testimonial, index) => (
    <div className="testimonial-slide" key={index}>
      <p className="testimonials-quote">“{testimonial.quote}”</p>
      <div className="profile-details">
        <div className="profile-name">{testimonial.name}</div>
        <div className="profile-role">{testimonial.role}</div>
      </div>
    </div>
  ));

  return (
    <div className="testimonials-container">
      <div className="testimonials-title">What Our Clients Say</div>
      <p className="testimonials-intro">
        See what makes our platform the top choice for professionals seeking
        product management mentorship. Our clients’ testimonials showcase the
        transformative impact of connecting with experienced mentors.
      </p>

      <div className="testimonials-carousel">
      <AliceCarousel
        items={items}
        autoPlay
        autoPlayInterval={4000}
        infinite
        animationDuration={800}
        disableButtonsControls
        disableDotsControls
      />
      </div>
  
      <div className="testimonials-footer">
        Our mentors are consistently rated highly for their professionalism,
        guidance, and commitment to helping others succeed.
      </div>
    </div>
  );
}

export default ClientTestimonials;

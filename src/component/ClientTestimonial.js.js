import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./ClientTestimonials.css";

function ClientTestimonials() {
  const testimonials = [
    {
      quote:"Working with my mentor:Vikash Gaurav has been transformative. Their guidance helped me master key industry skills and navigate complex challenges with confidence. They broke down tough concepts into manageable steps, turning confusion into clarity. I'm grateful for their unwavering support and the invaluable knowledge they've shared. Truly an inspiring mentor!",
        name: "Pavitra Kumar Gupta",
        role: "Mentee",
      },
  ];

  const items = testimonials.map((testimonial, index) => (
    <div className="testimonial-card" key={index}>
      <p className="testimonial-card-quote">“{testimonial.quote}”</p>
      <div className="testimonial-card-details">
        <div className="testimonial-card-name">{testimonial.name}</div>
        <div className="testimonial-card-role">{testimonial.role}</div>
      </div>
    </div>
  ));

  return (
    <div className="client-testimonials">
      <div className="client-testimonials-title">What Our Clients Say</div>
      <p className="client-testimonials-intro">
        See what makes our platform the top choice for professionals seeking
        product management mentorship. Our clients’ testimonials showcase the
        transformative impact of connecting with experienced mentors.
      </p>

      <div className="client-testimonials-carousel">
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
  
      <div className="client-testimonials-footer">
        Our mentors are consistently rated highly for their professionalism,
        guidance, and commitment to helping others succeed.
      </div>
    </div>
  );
}

export default ClientTestimonials;

import React from "react";
import "./ClientSay.css";

function ClientSay() {
  return (
    <div className="client-say-container">
      <div className="client-say-title">What Our Clients Say</div>
      <p className="client-say-intro">
      See what makes our platform the top choice for professionals seeking product management mentorship. Our clients’ testimonials showcase the transformative impact of connecting with experienced mentors.
      </p>
      <p className="client-say-quote">
      “Connecting with a product design mentor through Unispade has transformed my approach to work. I’m grateful for the personalised guidance and valuable insights!”
      </p>
      <div className="Client-profile">
        <div className="Client-name">Simran Gupta</div>
        <div className="Client-role">Product Manage</div>
      </div>
      

      <div className="w-[900px] h-[1.5px] bg-[#E7E3E9]"></div>


      <p className="client-say-quote">
      “Connecting with a product design mentor through Unispade has transformed my approach to work. I’m grateful for the personalised guidance and valuable insights!”
      </p>
      <div className="Client-profile">
        <div className="Client-name">Jason K.
        </div>
        <div className="Client-Profile">Startup Founder</div>
      </div>


      <div className="Client-bottom">Our mentors are consistently rated highly for their professionalism, guidance, and commitment to helping others succeed.</div>

    </div>
  );
}

export default ClientSay;

import React from "react";
import Card from "./Card";
import img1 from "../assets/person1.png";
import img2 from "../assets/person2.png";
import img3 from "../assets/person3.png";
import img4 from "../assets/person4.png";
import img5 from "../assets/person5.png";
import img6 from "../assets/person6.png";
import "./Mentor.css";

const mentorData = [
  { title: "Product Design Mentors", image: img1, description: "Get support in the art of design with mentors who specialise in user experience, visual design, and product innovation.", isImageLeft: true },
  { title: "Product Management Mentors", image: img2, description: "Connect with mentors who have hands-on experience in strategy, user-centered development, and managing product lifecycles.", isImageLeft: false },
  { title: "Career Development Mentors", image: img3, description: "Focus on your long-term professional growth, including leadership, project management, and career transitions.", isImageLeft: true },

];

function Mentor() {
  return (
    <div className="container">
      <h1 className="title">
      Explore Our Product Mentors      </h1>
      <p className="description">
      Our platform offers a broad array of mentor categories designed to meet the needs of professionals at every stage of their careers. From career design mentorship to product management mentorship, discover the right guidance to support your journey.
      </p>

      <div className="mentor-list">
        {mentorData.map((mentor, index) => (
          <Card
            key={index}
            title={mentor.title}
            description={mentor.description}
            image={mentor.image}
            isImageLeft={mentor.isImageLeft}
          />
        ))}
      </div>

      <div className="footer">
        <p className="footer-text">Each category is tailored to help you develop specific skills and achieve your goals, whether you’re new to the field or aiming for an executive role.</p>
        <p className="footer-text">
        Click on a category to view mentors and see who aligns with your professional aspirations.        </p>

      </div>
    </div>
  );
}

export default Mentor;

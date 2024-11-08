import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./Mentor2.css";

const mentors = [
  {
    name: "Kritika Jain",
    expertise: "Product Management",
    bio: "A seasoned product manager with deep experience at Paytm",
    rating: 4,
  },
  {
    name: "Navcharan Singh",
    expertise: "SEO & Digital Marketing",
    bio: "Extensive background in SEO and digital marketing",
    rating: 3,
  },
];

function Mentor2() {
  return (
    <div className="mentor-container">
      <h1 className="mentor-title">Meet Our Top Product Mentors</h1>
      <p className="mentor-description">
        Our top product mentors have been meticulously chosen for their experience, proven results, and commitment to guiding others.
      </p>

      {/* Mentor Table for Large Screens */}
      <div className="mentor-table-container">
        <table className="mentor-table">
          <thead>
            <tr className="mentor-table-header">
              <th className="mentor-table-heading">MENTOR NAME</th>
              <th className="mentor-table-heading">AREA OF EXPERTISE</th>
              <th className="mentor-table-heading">BIO</th>
              <th className="mentor-table-heading">RATINGS</th>
            </tr>
          </thead>
          <tbody>
            {mentors.map((mentor, index) => (
              <tr key={index} className="mentor-table-row">
                <td className="mentor-table-cell">{mentor.name}</td>
                <td className="mentor-table-cell">{mentor.expertise}</td>
                <td className="mentor-table-cell mentor-bio">{mentor.bio}</td>
                <td className="mentor-table-cell">
                  <RatingStars rating={mentor.rating} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mentor Card View for Small Screens */}
      <div className="mentor-card-container">
        {mentors.map((mentor, index) => (
          <MentorCard key={index} mentor={mentor} />
        ))}
      </div>

      <p className="mentor-footer-text">
        Explore our profiles to book a session with the best mentors in product management.
      </p>
    </div>
  );
}

const MentorCard = ({ mentor }) => {
  return (
    <div className="mentor-card">
      <h2 className="mentor-card-name">{mentor.name}</h2>
      <p className="mentor-card-expertise">{mentor.expertise}</p>
      <p className="mentor-card-bio">{mentor.bio}</p>
      <RatingStars rating={mentor.rating} />
    </div>
  );
};

const RatingStars = ({ rating }) => {
  return (
    <div className="rating-stars">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="rating-star">
          {i < rating ? <FaStar /> : <FaRegStar className="rating-empty-star" />}
        </span>
      ))}
    </div>
  );
};

export default Mentor2;

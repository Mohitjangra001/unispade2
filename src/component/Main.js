import Mainpic from "../assets/Main.png";
import imgarrow from "../assets/downArrow.png";
import "./Main.css";

function Main() {
  return (
    <div className="main-section-container">
      <div className="main-content-wrapper">
        {/* text section */}
        <div className="main-text-content">
          <h1 className="main-title-heading">
            Find the Best Product Mentors for Your Career
          </h1>
          <p className="main-description-content">
            Whether you’re a product designer, a product manager, or a professional eager to grow in the field, connect with an experienced product management mentor to accelerate your growth. Our platform brings together experienced mentors who have excelled in their fields and are ready to guide your growth. Start your journey with one of our top product mentors and gain insights that matter to your career. From early guidance to advanced coaching, we offer access to a diverse network of career development mentors.
          </p>
          <button className="main-mentor-button">
            Get Started!
          </button>
        </div>

        {/* photo section */}
        <div className="main-image-section">
          <img src={Mainpic} className="main-mentor-photo" alt="Main mentor image" />
        </div>
      </div>

      <div className="main-arrow-icon">
        <img src={imgarrow} className="main-down-arrow" alt="Down arrow" />
      </div>
    </div>
  );
}

export default Main;

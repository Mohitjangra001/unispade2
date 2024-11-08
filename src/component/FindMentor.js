import { useState } from "react";
import btnDwnArry from '../assets/chevron-down.png';
import "./FindMentor.css";

function FindMentor() {
  const [locationOpen, setLocationOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [availabilityOpen, setAvailabilityOpen] = useState(false);

  const toggleLocation = () => setLocationOpen(!locationOpen);
  const toggleExpertise = () => setExpertiseOpen(!expertiseOpen);
  const toggleAvailability = () => setAvailabilityOpen(!availabilityOpen);

  return (
    <div className="find-mentor-container">
      <div className="dropdown-container">
        <div className="relative">
          <button
            onClick={toggleLocation}
            className="dropdown-button"
          >
            <div>Location</div>
            <img src={btnDwnArry} alt="Toggle location dropdown" />
          </button>
          {locationOpen && (
            <div className="dropdown-menu">
              <p className="dropdown-item">New York</p>
              <p className="dropdown-item">Los Angeles</p>
              <p className="dropdown-item">Chicago</p>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={toggleExpertise}
            className="dropdown-button"
          >
            <div>Expertise</div>
            <img src={btnDwnArry} alt="Toggle expertise dropdown" />
          </button>
          {expertiseOpen && (
            <div className="dropdown-menu">
              <p className="dropdown-item">Marketing</p>
              <p className="dropdown-item">Technology</p>
              <p className="dropdown-item">Finance</p>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={toggleAvailability}
            className="dropdown-button"
          >
            <div>Availability</div>
            <img src={btnDwnArry} alt="Toggle availability dropdown" />
          </button>
          {availabilityOpen && (
            <div className="dropdown-menu">
              <p className="dropdown-item">Weekdays</p>
              <p className="dropdown-item">Weekends</p>
              <p className="dropdown-item">Flexible</p>
            </div>
          )}
        </div>
      </div>

      <button className="find-mentor-button">
        Find Your Mentor
      </button>
    </div>
  );
}

export default FindMentor;

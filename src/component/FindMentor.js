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
    <div className="find-mentor-container-unique">
      <div className="dropdown-container-unique">
        <div className="relative">
          <button
            onClick={toggleLocation}
            className="dropdown-button-unique"
          >
            <div>Location</div>
            <img src={btnDwnArry} alt="Toggle location dropdown" />
          </button>
          {locationOpen && (
            <div className="dropdown-menu-unique">
              <p className="dropdown-item-unique">New York</p>
              <p className="dropdown-item-unique">Los Angeles</p>
              <p className="dropdown-item-unique">Chicago</p>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={toggleExpertise}
            className="dropdown-button-unique"
          >
            <div>Expertise</div>
            <img src={btnDwnArry} alt="Toggle expertise dropdown" />
          </button>
          {expertiseOpen && (
            <div className="dropdown-menu-unique">
              <p className="dropdown-item-unique">Marketing</p>
              <p className="dropdown-item-unique">Technology</p>
              <p className="dropdown-item-unique">Finance</p>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={toggleAvailability}
            className="dropdown-button-unique"
          >
            <div>Availability</div>
            <img src={btnDwnArry} alt="Toggle availability dropdown" />
          </button>
          {availabilityOpen && (
            <div className="dropdown-menu-unique">
              <p className="dropdown-item-unique">Weekdays</p>
              <p className="dropdown-item-unique">Weekends</p>
              <p className="dropdown-item-unique">Flexible</p>
            </div>
          )}
        </div>
      </div>

      <button className="find-mentor-button-unique">
        Find Your Mentor
      </button>
    </div>
  );
}

export default FindMentor;

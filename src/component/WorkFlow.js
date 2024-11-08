import line from '../assets/Line.png';
import "./WorkFlow.css"
function WorkFlow() {
  return (
    <div className="workflow-container">
      <div className="workflow-header">
        <h1 className="workflow-title">How It Works</h1>
        <p className="workflow-description">
        Discover a seamless path to finding your ideal product management mentor through our simple, efficient process.
        </p>
      </div>

      <div className="step-container">
        <div className="step-container">
          <div className="step-number">1</div>
          <h1 className="step-title">Search for Your Ideal Mentor</h1>
          <p className="step-text">
          Explore our extensive talent pool by filtering by expertise, location, and availability. Whether you’re looking for a product design mentor or a product manager mentor, find someone who aligns with your career goals and can offer personalised advice.
          </p>
          <img src={line} className="step-line" alt="line separator" />
        </div>

        <div className="step-container">
          <div className="step-number">2</div>
          <h1 className="step-title">Connect Instantly</h1>
          <p className="step-text">
          Once you’ve chosen a mentor, connect directly on our platform. Our mentors are available for real-time engagement, allowing you to start building your skills immediately. Receive valuable insights and actionable advice from those who have successfully understood the industry.
          </p>
          <img src={line} className="step-line" alt="line separator" />
        </div>

        <div className="step-container">
          <div className="step-number">3</div>
          <h1 className="step-title">Learn and Grow</h1>
          <p className="step-text">
          Join sessions focused on career development and skill enhancement. Gain knowledge, expand your network, and access continuous learning resources provided by our career design mentorship platform.
          </p>
          <img src={line} className="step-line" alt="line separator" />
        </div>

        <div className="step-container">
          <div className="step-number">4</div>
          <h1 className="step-title">Measure Your Progress</h1>
          <p className="step-text">
          Track your progress as you advance with structured mentorship. Gain clarity on how mentorship has impacted your skills and career path.          </p>
        </div>
      </div>

      <div className="explore-button-container">
        <button className="explore-button">Client-bottom</button>
      </div>
    </div>
  );
}

export default WorkFlow;

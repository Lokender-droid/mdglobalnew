import React from 'react';
import { Link } from 'react-router-dom';
import "./service.css";

const Service = () => {
  return (
  <div className="home-jobcard-container">
    <div className="home-jobcard-box home-jobcard-employer">
      <Link to="/request-a-call-back">
        <button className="home-jobcard-btn">For Employers</button>
      </Link>
      <h2 className="home-jobcard-heading">Find Top Talent for Your Company Today</h2>
      <p className="home-jobcard-para">
        Build High Performance Teams & Gain a Competitive Advantage <span className="home-jobcard-arrow">→</span>
      </p>
    </div>

    <div className="home-jobcard-box home-jobcard-jobseeker">
      <Link to="/submit-your-cv">
        <button className="home-jobcard-btn">For Job Seeker</button>
      </Link>
      <h2 className="home-jobcard-heading">Tailored corporate training for team growth.</h2>
      <p className="home-jobcard-para">
        Enhance Your Employees' Skills & Increase Their Productivity <span className="home-jobcard-arrow">→</span>
      </p>
    </div>
  </div>
);
};

export default Service;

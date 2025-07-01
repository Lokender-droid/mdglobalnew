import React from 'react';
import './jobcard.css';

const JobCard = ({ job, onApply }) => {
  // Format the date (assuming the date is not in jobs.json, we'll mock it)
  const postedDate = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  

  return (
    <div className="job-card">
      <div className="job-details">
        <h3>{job.title} - {job.department}</h3>
        <p>
          {job.salary || 'Salary not specified'} | {job.experience || 'Experience not specified'} | Position: {job.position || 'N/A'}
        </p>
        {/* <p className="job-date">Posted on: {postedDate}</p> */}
        <p className="job-description">{job.description}</p>
        <p className="Number-of-opening">Number of Openings : {job.number_of_opening}</p>
        
      </div>
      <button onClick={() => onApply(job)}>Apply Now</button>
    </div>
  );
};

export default JobCard;
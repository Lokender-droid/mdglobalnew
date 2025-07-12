import React, { useState, useEffect } from 'react';
import JobApplyForm from './JobApplyForm';
import FilterBar from './FilterBar'; 
import JobCard from './JobCard'; 
import jobsData from './jobs.json';
import './career.css';

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [visibleJobs, setVisibleJobs] = useState(5); // Show 5 jobs initially

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      setIsFilterOpen(desktop);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const jobData = jobsData;
    setJobs(jobData);

    const uniqueCategories = [...new Set(jobData.map(job => job.department))];
    const uniqueLocations = [...new Set(jobData.map(job => job.location))];
    setCategories(uniqueCategories);
    setLocations(uniqueLocations);

    // ❌ Don't set filteredJobs here directly — let filtering happen in next effect
  }, []);

  useEffect(() => {
    filterJobs();
  }, [selectedCategory, selectedLocation, jobs, visibleJobs]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleJobs(5); // Reset visible jobs when filter changes
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    setVisibleJobs(5); // Reset visible jobs when filter changes
  };

  const filterJobs = () => {
    const filtered = jobs.filter(job => {
      const matchCategory = selectedCategory ? job.department === selectedCategory : true;
      const matchLocation = selectedLocation ? job.location === selectedLocation : true;
      return matchCategory && matchLocation;
    });
    setFilteredJobs(filtered.slice(0, visibleJobs));
  };

  const handleApply = (job) => {
    setSelectedJob(job);
  };

  const handleCloseForm = () => {
    setSelectedJob(null);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const loadMore = () => {
    const newVisibleJobs = visibleJobs + 5;
    setVisibleJobs(newVisibleJobs);
    const filtered = jobs.filter(job => {
      const matchCategory = selectedCategory ? job.department === selectedCategory : true;
      const matchLocation = selectedLocation ? job.location === selectedLocation : true;
      return matchCategory && matchLocation;
    });
    setFilteredJobs(filtered.slice(0, newVisibleJobs));
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>Job Post</h1>
      </header>

      {/* Main Content */}
      <div className="main-container">
        {/* Filter Bar Toggle Button (Mobile) */}
        <button
          onClick={toggleFilter}
          className="filter-toggle"
        >
          {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
        </button>

        {/* Filter Bar */}
        <div
          className={`filter-bar ${isDesktop ? 'filter-bar-desktop' : ''}`}
          style={{ display: isDesktop ? 'block' : (isFilterOpen ? 'block' : 'none') }}
        >
          <FilterBar
            categories={categories}
            locations={locations}
            selectedCategory={selectedCategory}
            selectedLocation={selectedLocation}
            onCategoryChange={handleCategoryChange}
            onLocationChange={handleLocationChange}
          />
        </div>

        {/* Job Listings */}
        <div className="job-listings">
          <div className="job-list">
            {filteredJobs.map((job, index) => (
              <JobCard key={index} job={job} onApply={handleApply} />
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <p className="no-jobs">No jobs found for the selected filters.</p>
          )}

          {/* Load More Button */}
          {filteredJobs.length > 0 && filteredJobs.length < jobs.filter(job => 
            (!selectedCategory || job.department === selectedCategory) && 
            (!selectedLocation || job.location === selectedLocation)
          ).length && (
            <button className="load-more" onClick={loadMore}>
              Load More
            </button>
          )}
        </div>
      </div>

      {/* Job Application Form Modal */}
      {selectedJob && (
        <JobApplyForm job={selectedJob} onClose={handleCloseForm} />
      )}
    </div>
  );
};

export default Career;

import React from "react";
import PropTypes from "prop-types";
import "./filterbar.css";

const FilterBar = ({
  categories = [],
  locations = [],
  selectedCategory = "",
  selectedLocation = "",
  onCategoryChange,
  onLocationChange,
}) => {
  const handleCategorySelect = (e) => onCategoryChange(e.target.value);
  const handleLocationSelect = (e) => onLocationChange(e.target.value);

  // Remove duplicates using Set
  const uniqueCategories = [...new Set(categories)];
  const uniqueLocations = [...new Set(locations)].sort((a, b) =>
    a.localeCompare(b)
  );

  return (
    <div className="filter-bar">
      <h2 className="text-xl font-semibold mb-4">Filter Jobs</h2>

      <div className="filter-section mb-4">
        <label htmlFor="category-select" className="block font-medium mb-1">
          Job Categories
        </label>
        <select
          id="category-select"
          className="w-full p-2 border rounded"
          value={selectedCategory}
          onChange={handleCategorySelect}
        >
          <option value="">All Categories</option>
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-section mb-4">
        <label htmlFor="location-select" className="block font-medium mb-1">
          Locations
        </label>
        <select
          id="location-select"
          className="w-full p-2 border rounded"
          value={selectedLocation}
          onChange={handleLocationSelect}
        >
          <option value="">All Locations</option>
          {uniqueLocations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

FilterBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  locations: PropTypes.arrayOf(PropTypes.string),
  selectedCategory: PropTypes.string,
  selectedLocation: PropTypes.string,
  onCategoryChange: PropTypes.func.isRequired,
  onLocationChange: PropTypes.func.isRequired,
};

export default FilterBar;

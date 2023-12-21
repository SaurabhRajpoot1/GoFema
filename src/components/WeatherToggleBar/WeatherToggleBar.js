import React, { useState } from "react";
import PropTypes from "prop-types";
import "./WeatherToggleBar.css";

function WeatherToggleBar({ onToggleChange }) {
  const [activeOption, setActiveOption] = useState("hourly");

  const handleToggle = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="toggle-bar">
      <div
        className={`toggle-btn ${activeOption === "hourly" ? "active" : ""}`}
        onClick={() => handleToggle("hourly")}
      >
        Hourly
      </div>
      <div
        className={`toggle-btn ${activeOption === "7days" ? "active" : ""}`}
        onClick={() => handleToggle("7days")}
      >
        7 Days
      </div>
      <div
        className={`toggle-btn ${activeOption === "1month" ? "active" : ""}`}
        onClick={() => handleToggle("1month")}
      >
        1 Month
      </div>
    </div>
  );
}

WeatherToggleBar.propTypes = {
  onToggleChange: PropTypes.func.isRequired,
};

export default WeatherToggleBar;

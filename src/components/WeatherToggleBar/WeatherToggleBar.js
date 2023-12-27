import React, { useState } from "react";
import PropTypes from "prop-types";
import "./WeatherToggleBar.css";
import BrightNess from "../../resources/Brightness.svg";
import Cloud from "../../resources/cloudForToggleBar.svg";
import CloudWithRain from "../../resources/Weather Cloud Rain Thunder.svg";
import TimeLineCard from "../../utils/ForcastTimelineCard/timeLineCard";
import stream from "../../resources/stream.svg";

function WeatherToggleBar({ onToggleChange }) {
  const [activeOption, setActiveOption] = useState("hourly");

  const handleToggle = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="forcastBar_mainconatainer">
      <div className="forcastBar ">
        <div className="forcastText fs-32">Forecast</div>
        <div className="toggle-bar">
          <div
            className={`toggle-btn ${
              activeOption === "hourly" ? "active" : ""
            } fs-14`}
            onClick={() => handleToggle("hourly")}
          >
            <span className="icon">
              <img src={Cloud} alt="cloud" />
            </span>
            Hourly
          </div>
          <div
            className={`toggle-btn ${
              activeOption === "7days" ? "active" : ""
            } fs-14`}
            onClick={() => handleToggle("7days")}
          >
            <span className="icon">
              <img src={CloudWithRain} alt="cloudWithRain" />
            </span>
            7 Days
          </div>
          <div
            className={`toggle-btn ${
              activeOption === "1month" ? "active" : ""
            } fs-14`}
            onClick={() => handleToggle("1month")}
          >
            <span className="icon">
              <img src={BrightNess} alt="Brightness" />
            </span>
            1 Month
          </div>
        </div>
      </div>
      <div className="forCastContainer">
        <div className="forcastDetails">
          <div className="timeLineContainer">
            <TimeLineCard />
            <TimeLineCard />
            <TimeLineCard />
            <TimeLineCard />
            <TimeLineCard />
            <TimeLineCard />
            <TimeLineCard />
            <TimeLineCard />
            <TimeLineCard />
            <TimeLineCard />
            <TimeLineCard />
            <TimeLineCard />
          </div>
        </div>
      </div>
    </div>
  );
}

WeatherToggleBar.propTypes = {
  onToggleChange: PropTypes.func.isRequired,
};

export default WeatherToggleBar;

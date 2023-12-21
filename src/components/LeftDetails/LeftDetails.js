import React from "react";
import logo from "../../resources/gofemalogo.png";
import homeLogo from "../../resources/HomeIcon.svg";
import WeatherCard from "../../utils/WeatherCard/WeatherCard";
import "./leftDetails.css";
import WeatherToggleBar from "../WeatherToggleBar/WeatherToggleBar";
import stream from "../../resources/stream.svg";
import TimeLineCard from "../../utils/ForcastTimelineCard/timeLineCard";
import drop from "../../resources/drop.svg";
import graph from "../../resources/graph.svg";
function LeftDetails() {
  return (
    <div className="lef_container">
      <div className="logo">
        <img className="mb-28" src={logo} />
      </div>

      <div className="homeLocation_container">
        <div>
          <img src={homeLogo} />
        </div>
        <p className="fs-36">East Village, New York</p>
        <div className="Date_time">
          <spna className="fs-16">Friday</spna>
          <span className="fs-16">Dec 7 2023</span>
          <span className="fs-16">8:45 PM</span>
        </div>
      </div>
      <div className="temp fs-56">34 F</div>
      <div className="weather_info fs-22">Clear with periodic clouds</div>
      <div className="weather_details_flex">
        <div className="leftParameterDetaislBox">
          <div>
            <img src={drop} />
            <p className="fs-12">Precipitation</p>
            <p className="fs-12">No precipitation for next 2 hours</p>
          </div>

          <div>
            <img src={graph} />
          </div>
        </div>
        <div className="rightParameterDetailBox">
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
        </div>
      </div>
      <div className="forcastBar ">
        <div className="forcastText fs-32 ">Forecast</div>
        <WeatherToggleBar />
      </div>
      <div className="forcastDetails">
        <img id="stream" src={stream} style={{ zIndex: "-1" }} />
        <div className="timeLineDetails">
          <TimeLineCard />
          <TimeLineCard />
          <TimeLineCard />
          <TimeLineCard />
        </div>
      </div>
    </div>
  );
}

export default LeftDetails;

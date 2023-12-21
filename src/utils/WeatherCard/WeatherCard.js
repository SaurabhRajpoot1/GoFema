import React from "react";
import "./WeatherCard.css";
import WindDirection from "../../resources/WindDirection.svg";
import WindFlowIcon from "../../resources/Weather Wind Flow 7.svg";

const WeatherCard = (data) => {
  const { parameterLogo, parameterName, parameterValue, additionalImage } =
    data;

  return (
    <div className="main_containerWeatherDetails">
      <div className="lefSide">
        <div>
          <img src={parameterLogo || WindFlowIcon} alt="parameterLogo" />
        </div>
        <div className="fs-12">{parameterName || "Wind speed"}</div>
        <div className="fs-36">{parameterValue || "0"} </div>
      </div>

      <div>
        <img src={additionalImage || WindDirection} alt="wind direction imae" />
      </div>
    </div>
  );
};
export default WeatherCard;

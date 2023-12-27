import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({
  parameterLogo,
  parameterName,
  additionalImage,
  parameterValue,
  parameterUnit,
}) => {
  return (
    <div className="main_containerWeatherDetails">
      <div className="lefSide">
        <div>
          <img id="parameterIcon" src={parameterLogo} alt="parameterLogo" />
        </div>
        <div className="fs-12">{parameterName || "Wind speed"}</div>
        <div className="fs-36">
          {parameterValue || "0"}
          <span className="fs-16">{parameterUnit}</span>{" "}
        </div>
      </div>

      <div>
        {additionalImage ? (
          <img id="parameterImage" src={additionalImage} alt="parameterImage" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default WeatherCard;

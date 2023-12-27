import React from "react";
import "./timeLine.css";
import Clouds from "../../resources/Clouds.svg";
const TimeLineCard = (data) => {
  const { time, temp } = data;
  return (
    <div className="TimeCardmain_container">
      <div className="fs-12">{time || "4 PM"}</div>
      <div>
        <img id="cloudTimeLine" src={Clouds} alt="cloud" />
      </div>
      <div className="fs-12">{temp || "27"}</div>
    </div>
  );
};

export default TimeLineCard;

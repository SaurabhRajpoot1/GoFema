import React from "react";
import "./timeLine.css";
import Clouds from "../../resources/Clouds.svg";
const TimeLineCard = (data) => {
  const { time, temp } = data;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>{time || "4 PM"}</div>
      <div>
        <img src={Clouds} alt="cloud" />
      </div>
      <div>{temp || "27"}</div>
    </div>
  );
};

export default TimeLineCard;

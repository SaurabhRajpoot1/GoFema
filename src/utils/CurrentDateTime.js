import React, { useState, useEffect } from "react";

const CurrentDateTimeDetails = () => {
  const [currentDay, setCurrentDay] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const today = new Date();

      // Day
      const dayOptions = { weekday: "long" };
      const dayString = new Intl.DateTimeFormat("en-US", dayOptions).format(
        today
      );
      setCurrentDay(dayString);

      // Date
      const dateOptions = {
        year: "numeric",
        month: "short",
        day: "numeric",
      };
      const dateString = new Intl.DateTimeFormat("en-US", dateOptions).format(
        today
      );

      // Remove comma from the date string
      const formattedDate = dateString.replace(",", "");
      setCurrentDate(formattedDate);

      // Time
      const timeOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      const timeString = new Intl.DateTimeFormat("en-US", timeOptions).format(
        today
      );
      setCurrentTime(timeString);
    };

    // Update the date and time every second (adjust interval as needed)
    const intervalId = setInterval(updateDateTime, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "clamp(1.5rem, 0rem + 1.875vw, 4.5rem)",
      }}
    >
      <p className="fs-16">{currentDay}</p>
      <p className="fs-16">{currentDate}</p>
      <p className="fs-16">{currentTime}</p>
    </div>
  );
};

export default CurrentDateTimeDetails;

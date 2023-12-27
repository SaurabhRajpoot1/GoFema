import { React, useState } from "react";
import logo from "../../resources/gofemalogo.png";
import homeLogo from "../../resources/HomeIcon.svg";
import WeatherCard from "../../utils/WeatherCard/WeatherCard";
import "./leftDetails.css";
import WeatherToggleBar from "../WeatherToggleBar/WeatherToggleBar";
import WindSpeedImage from "../../resources/WindDirection.svg";
import windSpeedIcon from "../../resources/Weather Wind Flow 7.svg";
import moonPhaseIcon from "../../resources/Halfmoon.svg";
import humidityIcon from "../../resources/Humidity.svg";
import moonPhaseImage from "../../resources/moonSmall.svg";
import pressureIcon from "../../resources/pressure.svg";
import uvIndexIcon from "../../resources/uvIndex.svg";
import VisibilityIcon from "../../resources/visibility.svg";
import feelsLike from "../../resources/feelsLike.svg";
import {
  AreaChart,
  linearGradient,
  XAxis,
  Area,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Dot,
  LineChart,
  CartesianGrid,
  Line,
} from "recharts";

import drop from "../../resources/drop.svg";
import graph from "../../resources/graph.svg";

import CurrentDateTimeDetails from "../../utils/CurrentDateTime";
function LeftDetails() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return <div className="custom-tooltip"></div>;
    }

    return null;
  };
  const CustomDot = ({ cx, cy, stroke, index, payload }) => {
    return (
      <g>
        <Dot cx={cx} cy={cy} r={8} fill="yellow" stroke={stroke} />
        <text x={cx} y={cy - 15} textAnchor="middle" fill="white">
          {`${payload.uv}%`}
        </text>
      </g>
    );
  };

  // const [maxValueIndex, setMaxValueIndex] = useState(
  //   data.reduce(
  //     (maxIndex, currentValue, currentIndex, array) =>
  //       currentValue.uv > array[maxIndex].uv ? currentIndex : maxIndex,
  //     0
  //   )
  // );
  const weatherParameters = {
    windSpeed: "0",
    humidity: "63",
    uvIndex: "63",
    moonPhase: "30",
    pressure: "26",
    feelsLike: "37",
    Visibility: "12",
  };
  return (
    <div className="lef_container">
      <div className="logo">
        <img className="mb-28" src={logo} />
      </div>

      <div className="homeLocation_container">
        <div className="home_logo">
          <img src={homeLogo} />
        </div>
        <div className="lacation_name fs-36">East Village, New York</div>

        <div>
          <CurrentDateTimeDetails />
        </div>
      </div>
      <div className="temp fs-56">34&#176;F</div>
      <div className="weather_info fs-22">Clear with periodic clouds</div>
      <div className="weather_details_flex">
        <div className="leftParameterDetaislBox">
          <div className="precipitationChartContainer">
            <div className="precipitationText">
              <img src={drop} />
              <div className="fs-16">Precipitation</div>
              <div className="fs-14">No precipitation for next 2 hours</div>
            </div>
            <div className="precipitationChartMain">
              <ResponsiveContainer>
                <AreaChart data={data} className="chartBox">
                  <defs>
                    <linearGradient
                      id="colorUv"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="rgba(255, 255, 255, 0.60)" />
                      <stop
                        offset="100%"
                        stopColor="rgba(255, 255, 255, 0.00)"
                      />
                    </linearGradient>
                  </defs>
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="white"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                    activeDot={<CustomDot />}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="rightParameterDetailBox">
          <div className="weatherCard_boxes">
            <WeatherCard
              parameterLogo={windSpeedIcon}
              parameterName="Wind Speed"
              additionalImage={WindSpeedImage}
              parameterValue={weatherParameters.windSpeed}
              parameterUnit={"mph"}
            />
          </div>
          <div className="weatherCard_boxes">
            <WeatherCard
              parameterLogo={humidityIcon}
              parameterName="Humidity"
              additionalImage={""}
              parameterValue={weatherParameters.humidity}
              parameterUnit={"%"}
            />
          </div>
          <div className="weatherCard_boxes">
            <WeatherCard
              parameterLogo={uvIndexIcon}
              parameterName="UV index"
              additionalImage={""}
              parameterValue={weatherParameters.uvIndex}
              parameterUnit={"%"}
            />
          </div>
          <div className="weatherCard_boxes">
            <WeatherCard
              parameterLogo={moonPhaseIcon}
              parameterName="Moon Phase"
              additionalImage={moonPhaseImage}
              parameterValue={weatherParameters.moonPhase}
              parameterUnit={"%"}
            />
          </div>
          <div className="weatherCard_boxes">
            <WeatherCard
              parameterLogo={pressureIcon}
              parameterName="Pressure"
              additionalImage={""}
              parameterValue={weatherParameters.pressure}
              parameterUnit={"Hg"}
            />
          </div>
          <div className="weatherCard_boxes">
            <WeatherCard
              parameterLogo={feelsLike}
              parameterName="Feels Like"
              additionalImage={""}
              parameterValue={`${weatherParameters.feelsLike}°F`}
              parameterUnit={""}
            />
          </div>
          <div className="weatherCard_boxes">
            <WeatherCard
              parameterLogo={VisibilityIcon}
              parameterName="Visibility"
              additionalImage={""}
              parameterValue={weatherParameters.Visibility}
              parameterUnit={"miles"}
            />
          </div>
        </div>
      </div>
      <WeatherToggleBar />
    </div>
  );
}

export default LeftDetails;

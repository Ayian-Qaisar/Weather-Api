import React from "react";
import getWeatherIcon from "../../utils/CustomIcons";
import HourlyCard from "../Reuseable/HourlyCard";
import kelvinToCelsius from "../../utils/KelvinToCelsius";

function getDayName(timestamp) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(timestamp * 1000);
  return days[date.getDay()];
}

function WeeklyForecast({ daily }) {
  return (
    <div>
      <h2 className="text-white text-xl font-bold font-primary mb-5">
        This Week
      </h2>
      <div className="weekly-forecast grid grid-cols-2 lg:grid-cols-4 gap-3">
        {daily.map((day, index) => (
          <div key={index}>
            <HourlyCard
              getName={getDayName(day.dt)}
              icon={getWeatherIcon(day.weather[0].icon)}
              condition={day.weather[0].description}
              minTemp={kelvinToCelsius(day.temp.min)}
              maxTemp={kelvinToCelsius(day.temp.max)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyForecast;

import React from "react";
import getWeatherIcon from "../../utils/CustomIcons";
import getCurrentDayName from "../../utils/WeekDays";
import { MdLocationOn } from "react-icons/md";
import {
  celsiusToFahrenheit,
  kelvinToCelsius,
} from "../../utils/TempConversion";

function CurrentWeather({ weatherData, cityName, temperatureUnit }) {
  const currentTime = new Date();
  const options = { hour: "numeric", minute: "numeric", hour12: true };

  const formattedTime = currentTime.toLocaleTimeString(undefined, options);
  return (
    <div className="weather-info text-white font-primary flex flex-col items-center md:items-start">
      <div className="w-[230px] lg:w-[220px] xl:w-[260px] my-5">
        <img
          className="w-full"
          src={getWeatherIcon(weatherData.current.weather[0].icon)}
          alt="Weather Icon"
        />
      </div>
      <h1 className="text-[3.5rem] font-secondry leading-[3.5rem]">
        {temperatureUnit === "celsius"
          ? `${kelvinToCelsius(weatherData.current.temp)}`
          : `${celsiusToFahrenheit(kelvinToCelsius(weatherData.current.temp))}`}
        <span className="text-lg">°C</span>
      </h1>
      <p className="text-[14px] text-[#7F7F7F]">
        Feels Like{" "}
        {temperatureUnit === "celsius"
          ? `${kelvinToCelsius(weatherData.current.feels_like)}`
          : `${celsiusToFahrenheit(
              kelvinToCelsius(weatherData.current.feels_like)
            )}`}
      </p>

      <div className="capitalize mt-2">
        {weatherData.current.weather[0].description}
      </div>

      <div className="h-[1px] w-[90%] md:w-full bg-[#7f7f7f45] my-5"></div>

      <div>
        {getCurrentDayName()}, <span>{formattedTime}</span>
      </div>
      <div className="flex items-center gap-1 text-[14px] mt-2">
        <MdLocationOn /> {cityName}
      </div>
    </div>
  );
}

export default CurrentWeather;

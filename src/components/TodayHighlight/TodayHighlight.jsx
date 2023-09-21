import React from "react";
import humidityIcon from "../../assets/weather_icons/humidity.png";
import pressueIcon from "../../assets/weather_icons/pressure.png";
import uvIcon from "../../assets/weather_icons/uv.png";
import cloudsIcon from "../../assets/weather_icons/clouds.png";
import sunRiseIcon from "../../assets/weather_icons/sunrise.png";
import sunSetIcon from "../../assets/weather_icons/sunset.png";
import windDayIcon from "../../assets/weather_icons/wind-day.png";
import windNightIcon from "../../assets/weather_icons/wind-night.png";
import Card from "../Reuseable/Card";

const TodayHighlight = ({ highlight }) => {
  return (
    <div>
      <h2 className="text-white text-xl font-bold font-primary mb-5">
        Today's Highlights
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        <Card
          icon={humidityIcon}
          text={"Humidity"}
          info={`${highlight.current.humidity}%`}
        />
        <Card
          icon={windDayIcon}
          text={"Wind Speed"}
          info={`${highlight.current.wind_speed}m/s`}
        />
        <Card
          icon={cloudsIcon}
          text={"Clouds"}
          info={`${highlight.current.clouds}%`}
        />
        <Card icon={uvIcon} text={"UV Index"} info={highlight.current.uvi} />
        <Card
          icon={pressueIcon}
          text={"Pressure"}
          info={`${highlight.current.pressure} hPa`}
        />
        <div className="flex flex-col gap-3 justify-center items-center bg-[#19202D] text-white rounded-xl p-2 font-primary">
          <div className="flex items-center">
            <div className="w-[40px] flex justify-center items-center">
              <img width={"100%"} src={sunRiseIcon} alt="" />
            </div>
            <p className="text-[14px] ms-3">
              {new Date(highlight.current.sunrise * 1000).toLocaleTimeString(
                [],
                { hour: "2-digit", minute: "2-digit" }
              )}
              <p className="text-xs text-[#7F7F7F]">Sunrise</p>
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-[40px] flex justify-center items-center">
              <img width={"100%"} src={sunSetIcon} alt="" />
            </div>
            <p className="text-[14px]  ms-3">
              {new Date(highlight.current.sunset * 1000).toLocaleTimeString(
                [],
                { hour: "2-digit", minute: "2-digit" }
              )}
              <p className="text-xs text-[#7F7F7F]">Sunset</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayHighlight;

import React from "react";
import getWeatherIcon from "../../utils/CustomIcons";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import HourlyCard from "../Reuseable/HourlyCard";
import kelvinToCelsius from "../../utils/KelvinToCelsius";
import formatTime from "../../utils/FormatTime";

import right_icon from "../../assets/navigation_icons/right_icon.svg";
import left_icon from "../../assets/navigation_icons/left_icon.svg";

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

SwiperCore.use([Pagination, Scrollbar, A11y]);

function HourlyForecast({ hourly }) {
  return (
    <div>
      <h2 className="text-white text-xl font-bold mb-5 font-primary">Today</h2>
      <div className="hourly-forecast relative">
        <div className=" swiper-button-prev z-50">
          <img src={left_icon} alt="" />
        </div>
        <div className="swiper-button-next z-50">
          <img src={right_icon} alt="" />
        </div>
        <Swiper
          spaceBetween={20}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {hourly.map((hour, index) => (
            <SwiperSlide key={index}>
              <HourlyCard
                getName={`${getDayName(hour.dt)},`}
                time={formatTime(hour.dt)}
                icon={getWeatherIcon(hour.weather[0].icon)}
                condition={hour.weather[0].description}
                temp={kelvinToCelsius(hour.temp)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HourlyForecast;

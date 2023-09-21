import icon1 from "../assets/weather_icons/01d.png";
import icon2 from "../assets/weather_icons/01n.png";
import icon3 from "../assets/weather_icons/02d.png";
import icon4 from "../assets/weather_icons/02n.png";
import icon5 from "../assets/weather_icons/03d.png";
import icon6 from "../assets/weather_icons/03n.png";
import icon7 from "../assets/weather_icons/04d.png";
import icon8 from "../assets/weather_icons/04n.png";
import icon9 from "../assets/weather_icons/09d.png";
import icon10 from "../assets/weather_icons/09n.png";
import icon11 from "../assets/weather_icons/10d.png";
import icon12 from "../assets/weather_icons/10n.png";
import icon13 from "../assets/weather_icons/11d.png";
import icon14 from "../assets/weather_icons/11n.png";
import icon15 from "../assets/weather_icons/13d.png";
import icon16 from "../assets/weather_icons/13n.png";
import icon17 from "../assets/weather_icons/50d.png";
import icon18 from "../assets/weather_icons/50n.png";

const getWeatherIcon = (conditionCode) => {
  const iconMap = {
    "01d": icon1,
    "01n": icon2,
    "02d": icon3,
    "02n": icon4,
    "03d": icon5,
    "03n": icon6,
    "04d": icon7,
    "04n": icon8,
    "09d": icon9,
    "09n": icon10,
    "10d": icon11,
    "10n": icon12,
    "11d": icon13,
    "11n": icon14,
    "13d": icon15,
    "13n": icon16,
    "50d": icon17,
    "50n": icon18,
  };

  return iconMap[conditionCode] || icon1;
};

export default getWeatherIcon;

import Search from "./Search/Search";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import HourlyForecast from "./Forecast/HourlyForecast";
import WeeklyForecast from "./Forecast/WeeklyForecast";
import TodayHighlight from "./TodayHighlight/TodayHighlight";
import { useState } from "react";
import { RiCelsiusFill, RiFahrenheitFill } from "react-icons/ri";

const Layout = ({ weatherData, onInputChange, handelSubmit, cityName }) => {
  const [temperatureUnit, setTemperatureUnit] = useState("celsius"); // Default unit is Celsius

  const toggleTemperatureUnit = () => {
    setTemperatureUnit((currentUnit) =>
      currentUnit === "celsius" ? "fahrenheit" : "celsius"
    );
  };

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4 lg:col-span-3 h-auto static md:h-[110vh] md:sticky top-0 left-0 bg-[#19202D] px-3 lg:px-7 py-10 lg:py-12">
          <Search onInputChange={onInputChange} handelSubmit={handelSubmit} />
          {weatherData && (
            <CurrentWeather
              weatherData={weatherData}
              cityName={cityName}
              temperatureUnit={temperatureUnit}
            />
          )}
        </div>
        <div className="bg-[#232B39] col-span-12 md:col-span-8 lg:col-span-9 px-3 lg:px-14 py-7 lg:py-12">
          <div className="grid grid-cols-1 gap-10">
            {weatherData && (
              <>
                <div className="flex justify-between">
                  <h2 className="text-white text-xl font-bold font-primary">
                    Today
                  </h2>
                  <div className="temperature-toggle text-white text-lg font-primary w-[35px] h-[35px] bg-[#1A1A1A] flex justify-center items-center rounded-full">
                    <button onClick={toggleTemperatureUnit}>
                      {temperatureUnit === "celsius" ? (
                        <RiFahrenheitFill />
                      ) : (
                        <RiCelsiusFill />
                      )}
                    </button>
                  </div>
                </div>
                <HourlyForecast
                  hourly={weatherData.hourly}
                  temperatureUnit={temperatureUnit}
                />
                <h2 className="text-white text-xl font-bold font-primary">
                  Today's Highlights
                </h2>
                <TodayHighlight
                  highlight={weatherData}
                  temperatureUnit={temperatureUnit}
                />
                <h2 className="text-white text-xl font-bold font-primary">
                  This Week
                </h2>
                <WeeklyForecast
                  daily={weatherData.daily}
                  temperatureUnit={temperatureUnit}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

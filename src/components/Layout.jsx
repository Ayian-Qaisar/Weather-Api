import Search from "./Search/Search";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import HourlyForecast from "./Forecast/HourlyForecast";
import WeeklyForecast from "./Forecast/WeeklyForecast";
import TodayHighlight from "./TodayHighlight/TodayHighlight";
import Card from "./Reuseable/Card";

const Layout = ({ weatherData, onInputChange, handelSubmit, cityName }) => {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4 lg:col-span-3 h-auto static md:h-[110vh] md:sticky top-0 left-0 bg-[#19202D] px-3 lg:px-7 py-10 lg:py-12">
          <Search onInputChange={onInputChange} handelSubmit={handelSubmit} />
          {weatherData && (
            <CurrentWeather weatherData={weatherData} cityName={cityName} />
          )}
        </div>
        <div className="bg-[#232B39] col-span-12 md:col-span-8 lg:col-span-9 px-3 lg:px-14 py-7 lg:py-12">
          <div className="grid grid-cols-1 gap-10">
            {weatherData && (
              <>
                <HourlyForecast hourly={weatherData.hourly} />
                <TodayHighlight highlight={weatherData} />
                <WeeklyForecast daily={weatherData.daily} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

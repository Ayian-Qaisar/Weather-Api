import React, { useState, useEffect } from "react";
import "./App.css";

import {
  fetchByLocation,
  fetchWeatherDataCity,
  fetchWeatherDataCoords,
} from "./api/Api";
import Layout from "./components/Layout";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    fecthingData();
  }, []);

  const fecthingData = async () => {
    try {
      setLoading(true);
      let getDataByLoc = await fetchByLocation();
      setWeatherData(getDataByLoc);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handelSubmit = async (city) => {
    if (city) {
      let coord1 = await fetchWeatherDataCity(city);

      setCityName(coord1.name);
      const { coord } = coord1;

      let dataCor = await fetchWeatherDataCoords(coord.lat, coord.lon);
      setWeatherData(dataCor);
    } else {
      setWeatherData(null);
    }
  };

  const handleInput = (inputValue) => {
    setCity(inputValue);
  };

  return (
    <div className="App">
      <Layout
        cityName={cityName}
        weatherData={weatherData}
        onInputChange={handleInput}
        handelSubmit={() => handelSubmit(city)}
      />
    </div>
  );
}

export default App;

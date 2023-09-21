import axios from "axios";

const API_KEY = "f65e32faa80c40a876bd4112cd36e525";

export const fetchWeatherDataCoords = async (latitude, longitude) => {
  try {
    const weatherData = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&appid=${API_KEY}`
    );

    if (weatherData) {
      return weatherData.data;
    } else {
      setError("Error fetching weather data");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const fetchWeatherDataCity = async (cityName) => {
  console.log(cityName);
  if (!cityName) {
    return;
  }

  try {
    const geocodingData = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    );

    if (geocodingData) {
      return geocodingData.data;
    } else {
      console.log("city not found");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const fetchByLocation = async () => {
  if ("geolocation" in navigator) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const weatherData = await fetchWeatherDataCoords(latitude, longitude);
          resolve(weatherData);
        },
        async (error) => {
          console.error("Error getting geolocation:", error);
          const defaultWeatherData = await fetchWeatherDataCoords(
            67.0822,
            24.9056
          );
          resolve(defaultWeatherData);
        }
      );
    });
  } else {
    return await fetchWeatherDataCoords(67.0822, 24.9056);
  }
};

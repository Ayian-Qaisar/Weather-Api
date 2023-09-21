## Weather App

A simple weather app that allows users to check the current weather and forecasts for a specific city or based on their current location. This app is built using Vite for fast development and Tailwind CSS for styling. It utilizes the OpenWeatherMap API to fetch weather data.

## Features

- Current weather information for a specific city or based on the user's current location.
- Hourly and daily weather forecasts.
- Today's weather highlights, including temperature, humidity, and wind speed.

 Getting Started

Follow the steps below to get this project up and running on your local machine.

## Prerequisites

- Node.js and npm must be installed on your machine.

## Installation

1. Clone the repository to your local machine:

  
   git clone https://github.com/yourusername/weather-app.git
  

2. Navigate to the project directory:

   cd weather-app
   

3. Install the project dependencies:

 
   npm install
  

4. Create a `.env` file in the project root and add your OpenWeatherMap API key as follows:


   VITE_API_KEY=your_api_key_here


   Replace `your_api_key_here` with your actual API key.

### Running the App

1. Start the development server:


   npm run dev


2. Open your web browser and access the app at [http://localhost:3000](http://localhost:5173).

### Usage

- Enter the name of a city in the search bar and click the "Search" button to fetch weather data for that city.
- Alternatively, you can click the "Use My Location" button to fetch weather data based on your current location.

## Code Structure

- The main app logic can be found in `src/App.js`, where weather data is fetched based on the user's input or location.
- Components for different parts of the app are organized in the `src/components` directory.
- API functions for fetching weather data are located in the `src/api/Api.js` file.
- Styling is done using Tailwind CSS.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Make your changes and test them thoroughly.
3. Ensure your code follows the project's coding style and conventions.
4. Create a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OpenWeatherMap API](https://openweathermap.org/) for providing weather data.
- This project was created as a learning exercise in Vite and Tailwind CSS.

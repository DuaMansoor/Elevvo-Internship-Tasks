import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastChart from "./components/ForecastChart";
import "./App.css";

const API_KEY = "60cd6e10c9ea5489c42182e76a97e2df";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [savedCities, setSavedCities] = useState(
    JSON.parse(localStorage.getItem("cities")) || []
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLocationWeather();
  }, []);

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(savedCities));
  }, [savedCities]);

  const fetchWeather = async (url) => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setWeather(res.data);

      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${res.data.name}&units=metric&appid=${API_KEY}`
      );

      const daily = forecastRes.data.list.filter((item, index) => index % 8 === 0);
      setForecast(daily.slice(0, 3));
    } catch (err) {
      alert("City not found");
    }
    setLoading(false);
  };

  const searchCity = (city) => {
    fetchWeather(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    if (!savedCities.includes(city)) {
      setSavedCities([...savedCities, city]);
    }
  };

  const getLocationWeather = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchWeather(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
      );
    });
  };

  return (
    <div className="app">
      <div className="glass-card">
        <h1>🌦 Weather Dashboard</h1>

        <SearchBar onSearch={searchCity} />

        {loading && <p>Loading...</p>}

        {weather && (
          <>
            <WeatherCard weather={weather} />
            <ForecastChart forecast={forecast} />
          </>
        )}

        <div className="saved">
          <h3>Saved Cities</h3>
          {savedCities.map((city, index) => (
            <button key={index} onClick={() => searchCity(city)}>
              {city}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

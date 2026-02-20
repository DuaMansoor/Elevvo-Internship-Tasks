import React from "react";

function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <h3>{weather.main.temp}°C</h3>
      <p>{weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;

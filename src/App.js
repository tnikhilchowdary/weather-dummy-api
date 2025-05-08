import React, { useState } from "react";
import "./App.css";
import weatherData from "./weather.json";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = () => {
    const data = weatherData[city];
    if (data) {
      setWeather(data);
      setError("");
    } else {
      setWeather(null);
      setError("City Not Found");
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {error && <p>{error}</p>}
      {weather && (
        <>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].main}</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </>
      )}
    </div>
  );
}

export default App;

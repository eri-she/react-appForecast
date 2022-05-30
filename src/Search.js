import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({});
  const [loaded, setLoaded] = useState(false);

  function showTemperature(response) {
    setLoaded(true);
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    apiCall();
  }
  function apiCall() {
    let key = `59e85c7a60217259c9906fee3425b9ba`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  function getCity(event) {
    setCity(event.target.value);
  }
  if (loaded) {
    return (
      <div className="container">
        <form className="input-group mb-3 mt-4" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Enter a city ..."
            className="form-control"
            onChange={getCity}
            autoFocus="on"
          />
          <button type="submit" className="btn btn-outline-secondary">
            Search
          </button>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    apiCall();
    return "loading";
  }
}

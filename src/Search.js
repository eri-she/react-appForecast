import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

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

        <h2 className="city text-capitalize">{city}</h2>
        <p className="citySection">
          <FormattedDate date={weatherData.date} />
        </p>
        <p className="citySection text-capitalize">{weatherData.description}</p>
        <hr />
        <div className="row">
          <div className="col-sm-5">
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt={weatherData.description}
            />

            <h2 className="temperature">
              {Math.round(weatherData.temperature)} °C
            </h2>
          </div>
          <div className="col-sm-7">
            <p className="wind">Wind: {weatherData.wind}</p>
            <p className="humidity">Humidity: {weatherData.humidity}</p>
          </div>
        </div>
      </div>
    );
  } else {
    apiCall();
    return "loading ...";
  }
}

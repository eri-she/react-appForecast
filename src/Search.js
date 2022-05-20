import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [icon, setIcon] = useState("");
  const [wind, setWind] = useState("");
  const [loaded, setLoaded] = useState(false);

  function showTemperature(response) {
    setLoaded(true);
    setTemperature(`${Math.round(response.data.main.temp)}°C`);
    setDescription(`Description: ${response.data.weather[0].description}`);
    setHumidity(`Humidity: ${response.data.main.humidity} %`);
    setWind(`Wind: ${response.data.wind.speed}`);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSearch(event) {
    event.preventDefault();
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
            placeholder="type a city"
            className="form-control"
            onChange={getCity}
          />
          <button type="submit" className="btn btn-outline-secondary">
            Search
          </button>
        </form>

        <h2 className="city">{city}</h2>
        <p className="citySection">Last updated: date</p>
        <p className="citySection">{description}</p>
        <hr />
        <div className="row">
          <div className="col-sm-5">
            <img src={icon} alt={description} />

            <h2 className="temperature"> {temperature}</h2>
          </div>
          <div className="col-sm-7">
            <p className="wind">{wind}</p>
            <p className="humidity">{humidity}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <form className="input-group mb-3 mt-4" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="type a city"
            className="form-control"
            onChange={getCity}
          />
          <button type="submit" className="btn btn-outline-secondary">
            Search
          </button>
        </form>
        <h2 className="city">City</h2>
        <p className="citySection">Last updated: date</p>
        <p className="citySection">Sunny</p>
        <hr />
        <div className="row">
          <div className="col-sm-5">
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt={description}
            />

            <h2 className="temperature"> 20°C</h2>
          </div>
          <div className="col-sm-7">
            <p className="wind">Wind: 4.63</p>
            <p className="humidity">Humidity:5 km/hr</p>
          </div>
        </div>
      </div>
    );
  }
}

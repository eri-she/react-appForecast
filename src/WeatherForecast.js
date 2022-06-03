import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row text-center">
        <div className="col">
          <WeatherForecastDay data={forecast[0]} />
        </div>
        <div className="col">
          <WeatherForecastDay data={forecast[1]} />
        </div>
      </div>
    );
  } else {
    let key = `59e85c7a60217259c9906fee3425b9ba`;
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

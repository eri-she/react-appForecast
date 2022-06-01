import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weatherinfo">
      <h2 className="city text-capitalize">{props.data.city}</h2>
      <p className="citySection">
        <FormattedDate date={props.data.date} />
      </p>
      <p className="citySection text-capitalize">{props.data.description}</p>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <WeatherIcon className="icon" code={props.data.icon} />
        </div>
        <div className="col-sm-3">
          <h2 className="temperature">
            {Math.round(props.data.temperature)} °C
          </h2>
        </div>
        <div className="col-sm-6">
          <p className="wind">Wind: {props.data.wind}</p>
          <p className="humidity">Humidity: {props.data.humidity}</p>
        </div>
      </div>
    </div>
  );
}

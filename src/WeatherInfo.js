import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherConversion from "./WeatherConversion";

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
        <div className="col-sm-2">
          <WeatherIcon
            className="icon"
            code={props.data.icon}
            size={65}
            color={"#00B4D8"}
          />
        </div>
        <div className="col-sm-4">
          <WeatherConversion data={props.data.temperature} />
        </div>
        <div className="col-sm-6">
          <p className="wind">Wind: {props.data.wind}%</p>
          <p className="humidity">Humidity: {props.data.humidity}km/h</p>
        </div>
      </div>
    </div>
  );
}

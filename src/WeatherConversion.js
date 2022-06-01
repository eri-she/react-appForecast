import React, { useState } from "react";

export default function WeatherConversion(props) {
  const [unit, setUnit] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === "celcius") {
    return (
      <div>
        <h2 className="temperature">
          {Math.round(props.data)}{" "}
          <span className="units">
            °C|
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>{" "}
          </span>
        </h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2 className="temperature">
          {Math.round((props.data * 9) / 5 + 32)}{" "}
          <span className="units">
            <a href="/" onClick={showCelcius}>
              °C
            </a>
            |°F{" "}
          </span>
        </h2>
      </div>
    );
  }
}

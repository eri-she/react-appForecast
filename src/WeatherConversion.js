import React, { useState } from "react";

export default function WeatherConversion(props) {
  return (
    <div>
      <h2 className="temperature">
        {Math.round(props.data)}{" "}
        <span className="units">
          °C|<a href="/">°F</a>{" "}
        </span>
      </h2>
    </div>
  );
}

import React from "react";

import TimeBox from "./TimeBox";
import LiveWeather from "./LiveWeather";
import FiveDayForecast from "./FiveDayForecast";
import HourlyForecast from "./HourlyForecast";

const WeatherCompo = () => {

  return (
    <div className="p-4 space-y-5">
      <div className="gap-3 min-md:flex">
        <TimeBox />
        <LiveWeather />
      </div>
      <div className="gap-3 min-md:flex">
        <FiveDayForecast />
        <HourlyForecast />
      </div>
    </div>
  );
};

export default WeatherCompo;

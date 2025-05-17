import React, { useEffect, useState } from "react";

import sunny from "/assets/Sunny.png";
import snowy from "/assets/Snowy.png";
import rainy from "/assets/Rainy.png";
import rainythunder from "/assets/RainThunder.png";
import partcloudy from "/assets/PartlyCloudy.png";
import { useSelector } from "react-redux";

const HourlyForecast = () => {
  const apikey = "1f50012cda2bc9fadd21081223e5ebb9";
  const selector = useSelector((state) => state.weather.title);

  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${
        selector == "" ? "ahmedabad" : selector
      }&appid=${apikey}`
    );
    const final = await response.json();
    setData(final);
  };

  useEffect(() => {
    fetchData();
  }, [selector]);

  return (
    <div className="min-md:w-4/5 p-3 bg-[#ccc] shadow-lg/30 flex flex-col items-center rounded-2xl mt-5 min-md:mt-0">
      <h2 className="text-center font-bold text-xl">Hourly Forecase :</h2>
      <div className="min-md:flex w-full justify-around gap-5 mt-15 space-y-5">
        {data?.list?.slice(0, 5)?.map((item, i) => {
          return (
            <div
              key={i}
              className="bg-[#373636] min-md:w-35 p-2 rounded-xl text-center"
            >
              <h2 className="text-white font-bold text-xl">
                {item.dt_txt.slice(10, 16)}
              </h2>
              <img
                className="w-14 m-auto my-2"
                src={
                  item.weather[0].main == "Clear"
                    ? sunny
                    : item.weather[0].main == "Clouds"
                    ? partcloudy
                    : item.weather[0].main == "Rain"
                    ? rainy
                    : item.weather[0].main == "Thunderstorm"
                    ? rainythunder
                    : item.weather[0].main == "Snow"
                    ? snowy
                    : {}
                }
                alt=""
              />
              <h3 className="text-xl font-bold text-white">
                {Math.trunc(item.main.temp - 273.15)}°C
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import sunny from "/assets/Sunny.png";
import snowy from "/assets/Snowy.png";
import rainy from "/assets/Rainy.png";
import rainythunder from "/assets/RainThunder.png";
import partcloudy from "/assets/PartlyCloudy.png";

const FiveDayForecast = () => {
  const apikey = "1f50012cda2bc9fadd21081223e5ebb9";
  const [data, setData] = useState([]);

  const selector = useSelector((state) => state.weather.title);

  const fetchFiveForecast = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${
        selector == "" ? "ahmedabad" : selector
      }&appid=${apikey}`
    );
    const final = await response.json();
    setData(final);
  };

  useEffect(() => {
    fetchFiveForecast();
  }, [selector]);

  const forImage = data?.list;
  const forTemp = data?.list;


  return (
    <div className="min-md:w-1/5 p-3 bg-[#ccc] shadow-lg/30 rounded-2xl">
      <h2 className="text-center font-bold text-xl mb-3">5 Day Forecast :</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-around">
          <img
            className="w-15"
            src={
              forImage?.[5]?.weather?.[0]?.main == "Clouds"
                ? sunny
                : forImage?.[5]?.weather?.[0]?.main == "Clear"
                ? partcloudy
                : forImage?.[5]?.weather?.[0]?.main == "Rain"
                ? rainy
                : forImage?.[5]?.weather?.[0]?.main == "Thunderstorm"
                ? rainythunder
                : forImage?.[5]?.weather?.[0]?.main == "Snow"
                ? snowy
                : forImage?.[5]?.weather?.[0]?.main == "Mist"
                ? rainy
                : {}
            }
            alt=""
          />
          <h3 className="font-bold">
            {Math.trunc(forTemp?.[5]?.main?.temp - 273.15)}°C
          </h3>
          
        </div>

        <div className="flex items-center justify-around">
          <img
            className="w-15"
            src={
              forImage?.[13]?.weather?.[0]?.main == "Clouds"
                ? sunny
                : forImage?.[13]?.weather?.[0]?.main == "Clear"
                ? partcloudy
                : forImage?.[13]?.weather?.[0]?.main == "Rain"
                ? rainy
                : forImage?.[13]?.weather?.[0]?.main == "Thunderstorm"
                ? rainythunder
                : forImage?.[13]?.weather?.[0]?.main == "Snow"
                ? snowy
                : forImage?.[13]?.weather?.[0]?.main == "Mist"
                ? rainy
                : {}
            }
            alt=""
          />
          <h3 className="font-bold">
            {Math.trunc(forTemp?.[13]?.main?.temp - 273.15)}°C
          </h3>
          
        </div>

        <div className="flex items-center justify-around">
          <img
            className="w-15"
            src={
              forImage?.[21]?.weather?.[0]?.main == "Clouds"
                ? sunny
                : forImage?.[21]?.weather?.[0]?.main == "Clear"
                ? partcloudy
                : forImage?.[21]?.weather?.[0]?.main == "Rain"
                ? rainy
                : forImage?.[21]?.weather?.[0]?.main == "Thunderstorm"
                ? rainythunder
                : forImage?.[21]?.weather?.[0]?.main == "Snow"
                ? snowy
                : forImage?.[21]?.weather?.[0]?.main == "Mist"
                ? rainy
                : {}
            }
            alt=""
          />
          <h3 className="font-bold">
            {Math.trunc(forTemp?.[21]?.main?.temp - 273.15)}°C
          </h3>
          
        </div>

        <div className="flex items-center justify-around">
          <img
            className="w-15"
            src={
              forImage?.[29]?.weather?.[0]?.main == "Clouds"
                ? sunny
                : forImage?.[29]?.weather?.[0]?.main == "Clear"
                ? partcloudy
                : forImage?.[29]?.weather?.[0]?.main == "Rain"
                ? rainy
                : forImage?.[29]?.weather?.[0]?.main == "Thunderstorm"
                ? rainythunder
                : forImage?.[29]?.weather?.[0]?.main == "Snow"
                ? snowy
                : forImage?.[29]?.weather?.[0]?.main == "Mist"
                ? rainy
                : {}
            }
            alt=""
          />
          <h3 className="font-bold">
            {Math.trunc(forTemp?.[5]?.main?.temp - 273.15)}°C
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FiveDayForecast;

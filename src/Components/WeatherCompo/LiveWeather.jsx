import React, {useState, useEffect} from 'react'

import { FiSunrise, FiSunset } from "react-icons/fi";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

import sunny from "/assets/Sunny.png";
import snowy from "/assets/Snowy.png";
import rainy from "/assets/Rainy.png";
import rainythunder from "/assets/RainThunder.png";
import partcloudy from "/assets/PartlyCloudy.png";
import storm from "/assets/Storm.png";
import { useSelector } from 'react-redux';

const LiveWeather = () => {
  const myTitle = useSelector((state) => state.weather.title)
  const [data, setData] = useState(null);

  const apikey = "1f50012cda2bc9fadd21081223e5ebb9";

  const fetchData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${myTitle == '' ? 'ahmedabad' : myTitle}&units=metric&appid=${apikey}`
    );
    const fetchData = await response.json();
    setData(fetchData);
  };

  useEffect(() => {
    fetchData();
  }, [myTitle]);

  const timestamp = data?.sys?.sunrise;
  const getSunrise = new Date(timestamp * 1000);

  const formattedTime = getSunrise.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const sunsetTime = data?.sys?.sunset;
  const getSunset = new Date(sunsetTime * 1000);

  const setTime = getSunset.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <h2 className="min-md:w-3/5 p-3 bg-[#ccc] shadow-lg/30 rounded-2xl min-md:flex min-md:justify-around mt-5 min-md:mt-0">
          <div className="space-y-4">
            <div className="flex items-center gap-3 justify-center">
              <FiSunrise className="text-3xl" />
              <div>
                <h4></h4>
                <span>{formattedTime}</span>
              </div>
            </div>
            <div>
              <h2 className="text-7xl font-bold text-center">
                {" "}
                {Math.trunc(data?.main?.temp)}°C
              </h2>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <FiSunset className="text-3xl" />
              <div>
                <h4>Sunset</h4>
                <span>{setTime}</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={
                data?.weather?.[0]?.main == "Clouds"
                  ? sunny
                  : data?.weather?.[0]?.main == "Clear"
                  ? partcloudy
                  : data?.weather?.[0]?.main == "Rain"
                  ? rainy
                  : data?.weather?.[0]?.main == "Thunderstorm"
                  ? rainythunder
                  : data?.weather?.[0]?.main == "Snow"
                  ? snowy
                  : data?.weather?.[0]?.main == 'Mist' 
                  ? rainy
                  : data?.weather?.[0]?.main == 'Haze'
                  ? storm
                  : {}
              }
              alt=""
              className="mt-3 m-auto"
            />
            <h2 className="text-center mt-3 text-3xl font-bold">
              {data?.weather?.[0]?.main == "Clouds"
                ? "Clouds"
                : data?.weather?.[0]?.main == "Clear"
                ? "Clear"
                : data?.weather?.[0]?.main == "Rain"
                ? "Rain"
                : data?.weather?.[0]?.main == "Thunderstorm"
                ? "Thunderstorm"
                : data?.weather?.[0]?.main == "Snow"
                ? "Snow"
                : data?.weather?.[0]?.main == "Mist" 
                ? "Rain" 
                : data?.weather?.[0]?.main == "Haze" ?
                "Haze" 
                : "Error"}
            </h2>
          </div>
          <div className="flex flex-col justify-around mt-10 min-md:mt-0 space-y-4 min-md:space-y-0">
            <div className="text-center">
              <FaWind className="m-auto mb-2" size={30} />
              <h4>{data?.wind?.speed}Km/h</h4>
              <span>Wind Speed</span>
            </div>
            <div className="text-center">
              <WiHumidity className="m-auto" size={30} />
              <h4>{data?.main?.humidity}%</h4>
              <span>Humidity</span>
            </div>
            <div></div>
          </div>
        </h2>
  )
}

export default LiveWeather
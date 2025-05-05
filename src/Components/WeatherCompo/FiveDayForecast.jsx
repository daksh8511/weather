import React, { useEffect, useState } from "react";

const FiveDayForecast = () => {
  // const apikey = "1f50012cda2bc9fadd21081223e5ebb9";

  // const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   const response = await fetch(
  //     `https://api.openweathermap.org/data/2.5/forecast?q=ahmedabad&appid=${apikey}`
  //   );
  //   const final = await response.json();
  //   setData(final);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="min-md:w-1/5 p-3 bg-[#ccc] shadow-lg/30 rounded-2xl">
      <h2 className="text-center font-bold text-xl">5 Day Forecast :</h2>
      <div>
        {/* {mydata?.map((item, i) => {
          return (
            <div key={i}>
              <img src="" alt="" />
              <h4>{Math.trunc(item?.main?.temp - 273.15)}°C</h4>

            </div>
          );
        })} */}
      </div>
      <div></div>
    </div>
  );
};

export default FiveDayForecast;

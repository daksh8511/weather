import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TimeBox = () => {

  const selector = useSelector((state) => state.weather)

  const [myTime, setTime] = useState([])
  const [myDate, setDate] = useState('')

  const day = new Date(myDate)
  const myday = day.toString()


  const fetchTime = async () => {
    const response = await fetch(
      `https://api.ipgeolocation.io/v2/timezone?apiKey=e254ace7fa1a4b978c729fb31216e989&location=${selector.title}`,
      {
        method: "GET",
        redirect: "follow",
      }
    );
    const final = await response.json();
    setTime(final.time_zone.time_12)
    setDate(final.time_zone.date)
  };

  useEffect(() => {
    fetchTime();
  }, [selector]);

  return (
    <div className="min-md:w-2/5 p-3 bg-[#ccc] shadow-lg/30 flex flex-col items-center rounded-2xl">
      <h2 className="text-4xl font-bold my-5 capitalize">{selector.title == '' ? "ahmedabad" : selector.title}</h2>
      <h2 className="text-5xl font-bold mb-2 text-center">{myTime}</h2>
      <span className="my-4 font-bold text-2xl">{myday.slice(0,11)}</span>
    </div>
  );
};

export default TimeBox;

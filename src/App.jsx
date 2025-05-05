import React, { useState } from "react";
import Toggle from "./Components/Toggle/Toggle";

import { IoSearchOutline } from "react-icons/io5";

import { FaLocationCrosshairs } from "react-icons/fa6";
import WeatherCompo from "./Components/WeatherCompo/WeatherCompo";
import News from "./Components/News/News";
import { useDispatch, useSelector } from "react-redux";
import { getTitle } from "./redux/WeatherContext";

const App = () => {
  const [toggleBtn, setToggleBtn] = useState(false);

  const [mytext, setMyText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getTitle(mytext));
    setMyText("");
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Not Woking!");
    }
  };

  const success = (position) => {
    const p = position.coords  
    console.log(p)  
  }

  const error = () => {
    console.log('error')
  }


  return (
    <div
      className={`${
        toggleBtn ? "text-black bg-[#383838]" : "text-black bg-white"
      }`}
    >
      <div className="container p-4 min-md:flex justify-between items-center">
        <Toggle toggleBtn={toggleBtn} setToggleBtn={setToggleBtn} />
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 bg-[#ccc] p-2 rounded shadow-xl mb-3 min-md:m-0"
        >
          <IoSearchOutline />
          <input
            type="text"
            placeholder="Search for your preffered city..."
            className="outline-0 border-0 w-100"
            value={mytext}
            onChange={(e) => setMyText(e.target.value)}
          />
        </form>
        <div
          className="flex items-center gap-2 bg-[#ccc] p-2 rounded cursor-pointer shadow-xl"
          onClick={handleCurrentLocation}
        >
          <FaLocationCrosshairs />
          <h3>Current Location</h3>
        </div>
      </div>
      <div className="container">
        <WeatherCompo />
        <News />
      </div>
    </div>
  );
};

export default App;

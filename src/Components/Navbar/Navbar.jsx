import React, { useState, useEffect, useRef } from "react";
import Toggle from "../Toggle/Toggle";
import { useDispatch, useSelector } from "react-redux";

import { IoSearchOutline } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { getTitle, setCitiesNames } from "../../redux/WeatherContext";
import { useLocation } from "react-router-dom";

const Navbar = ({ toggleBtn, setToggleBtn }) => {
  const [getLatitude, setLatitude] = useState(0);
  const [getLongitude, setLongitude] = useState(0);
  const containerRef = useRef("");
  const [mytext, setMyText] = useState("");
  const [myLocation, setLocation] = useState([]);

  const [suggestionBox, setSuggestionBox] = useState(false);

  const cities = useSelector((state) => state.weather.cities);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getTitle(mytext));
    setMyText("");
    dispatch(setCitiesNames(mytext));
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const success = (position) => {
    const p = position.coords;
    
    setLatitude(p.latitude);
    setLongitude(p.longitude);
  
    fetchGeolocation(p.latitude, p.longitude);
  };

  const fetchGeolocation = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=d7dff52ce8ab4e0a89d18869d133b923`
      );
      const data = await response.json();      
      setLocation(data.features[0].properties.state_district);
  
      dispatch(getTitle(data.features[0].properties.state_district));
    } catch (err) {
      console.log(err);
    }
  };

  const error = (error) => {
    console.log(error);
  };

  useEffect(() => {
    if (getLatitude == 0 && getLongitude == 0) {
      setLatitude(74.006);
      setLongitude(40.7128);
    } else {
      fetchGeolocation();
    }
  }, [getLatitude, getLongitude]);

  const newsLocation = useLocation();

  const handleSuggestionClick = (data) => {
    dispatch(getTitle(data));
    setSuggestionBox(false);
  };

  const handleContainer = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setSuggestionBox(false);
    }
  };

  document.addEventListener("mousedown", handleContainer);

  return (
    <nav>
      <div className="container p-4 min-md:flex justify-between items-center">
        <Toggle toggleBtn={toggleBtn} setToggleBtn={setToggleBtn} />

        <div className="relative">
          <form
            onSubmit={handleSubmit}
            onClick={() => setSuggestionBox(!suggestionBox)}
            className="flex items-center gap-2 bg-[#ccc] p-2 rounded shadow-xl mb-3 min-md:m-0"
          >
            <IoSearchOutline />
            <input
              type="text"
              placeholder="Search city or by pincode..."
              className="outline-0 border-0 w-100"
              value={mytext}
              onChange={(e) => setMyText(e.target.value)}
            />
          </form>

          <div
            ref={containerRef}
            className={`absolute p-2 bg-gray-400 top-11 shadow-2xl left-0 w-full rounded ${
              suggestionBox ? "block" : "hidden"
            }`}
          >
            <ul className="space-y-1">
              {mytext.length == 0
                ? cities.slice(0, 4).map((settedCities) => {
                    return (
                      <li
                        className="p-2 hover:bg-gray-300 cursor-pointer"
                        onClick={() => handleSuggestionClick(settedCities)}
                      >
                        {settedCities}
                      </li>
                    );
                  })
                : cities
                    .filter((filterCities) =>
                      filterCities.toLowerCase().includes(mytext.toLowerCase())
                    )
                    .map((findedCities) => {
                      return <li className="capitalize">{findedCities}</li>;
                    })}
            </ul>
          </div>
        </div>

        <div
          className={`min-sm:hidden items-center gap-2 bg-[#ccc] p-2 rounded cursor-pointer shadow-xl ${
            newsLocation.pathname.slice(0, 5) == "/news"
              ? "min-md:hidden"
              : "min-md:flex"
          }`}
          onClick={handleCurrentLocation}
        >
          <FaLocationCrosshairs />
          <h3>Current Location</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

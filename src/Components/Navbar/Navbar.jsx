import React,{useState, useEffect}  from "react";
import Toggle from "../Toggle/Toggle";
import { useDispatch } from "react-redux";

import { IoSearchOutline } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { getTitle } from "../../redux/WeatherContext";

const Navbar = ({toggleBtn, setToggleBtn}) => {
  const [getLatitude, setLatitude] = useState(0);
  const [getLongitude, setLongitude] = useState(0);

  const [mytext, setMyText] = useState("");
  const [myLocation, setLocation] = useState([]);

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
    const p = position.coords;
    setLatitude(p.latitude);
    setLongitude(p.longitude);
    dispatch(getTitle(myLocation));
  };

  const error = (error) => {
    console.log(error);
  };

  const fetchGeolocation = async () => {
    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${getLatitude}&lon=${getLongitude}&apiKey=d7dff52ce8ab4e0a89d18869d133b923`
      );
      const final = await response.json();

      setLocation(final.features[0].properties.city);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (getLatitude == 0 && getLongitude == 0) {
      setLatitude(74.006);
      setLongitude(40.7128);
    } else {
      fetchGeolocation();
    }
  }, [getLatitude, getLongitude]);

  return (
    <div>
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
          className="hidden min-md:flex items-center gap-2 bg-[#ccc] p-2 rounded cursor-pointer shadow-xl"
          onClick={handleCurrentLocation}
        >
          <FaLocationCrosshairs />
          <h3>Current Location</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

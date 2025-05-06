import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NewsPage from "./Pages/NewsPage";
import Navbar from "./Components/Navbar/Navbar";

import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const App = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  return (
    <div  className={`${
      toggleBtn ? "text-white bg-[#383838]" : "text-black bg-white"
    }`}>
      <Navbar toggleBtn={toggleBtn} setToggleBtn={setToggleBtn} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<NewsPage />} />
      </Routes>

      <hr className="mt-10 border-gray-400" />
      <div className="flex justify-center gap-8 items-center *:text-2xl *:text-gray-400 my-3 *:cursor-pointer *:hover:text-black *:duration-200">
              <FaTwitter />
              <FaFacebook />
              <FaYoutube />
              <FaInstagram />
              <FaPinterest />
            </div>
    </div>
  );
};

export default App;

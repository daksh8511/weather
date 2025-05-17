import React from "react";

import WeatherCompo from "../Components/WeatherCompo/WeatherCompo";
import News from "../Components/News/News";

const Home = () => {
  
  return (
    <div>
      <div className="container">
        <WeatherCompo />
        <News />
      </div>
    </div>
  );
};

export default Home;

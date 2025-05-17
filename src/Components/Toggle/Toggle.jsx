import React, { useState } from "react";
import "./Toggle.css";

const Toggle = ({toggleBtn, setToggleBtn}) => {
    
  return (
    <div className="toggle-switch m-auto mb-3 min-md:m-0" onClick={() => setToggleBtn(!toggleBtn)}>
      <div className={`switch ${toggleBtn ? "on" : "off"}`}>
        <span className="switch-state"></span>
      </div>
    </div>
  );
};

export default Toggle;

import React from 'react'
import './toggle.css'
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.jpeg"

const Toggle = () => {
  return (
    <div className="t">
      <img src={Sun} className="t-icon" alt="" />
      <img src={Moon} className="t-icon" alt="" />
      <div className="t-button">  </div>
    </div>
  );
}

export default Toggle
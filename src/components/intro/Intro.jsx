import React from "react";
import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro"> Hello my name is </h2>
          <h1 className="i-name"> Mihee Jeong</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <li className="i-title-item">Web developer</li>
              <li className="i-title-item">UI/UX designer</li>
              <li className="i-title-item">Illustrator</li>
              <li className="i-title-item">Writer</li>
              <li className="i-title-item">Content Creator</li>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish websites, web service and oinline stores.
          </p>
        </div>
        <svg
          width="75"
          heigh="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path id="Vector" d="M40.5 15L34.5 9L28.5 15"></path>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} className="i-img" alt="" />
      </div>
    </div>
  );
};

export default Intro;

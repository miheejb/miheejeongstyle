import React from 'react'
import "./about.css"
import Math from "../../img/Mathqueen.png"
import Award from "../../img/cumLaude.png"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
    
        <div className="a-card bg"></div>
        <div className="a-card">
          <img className='a-img' src={Math}
            alt=""/></div>
      </div>
      <div className="a-right">
        <div className="a-title">
          <h1>About me</h1>
          <p className="a-sub">
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, deserunt?
          </p>
          <p className='a-desk'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores exercitationem dignissimos, obcaecati quam voluptatibus quasi possimus repellat consequatur delectus deserunt aspernatur adipisci. Delectus illum magnam culpa tempore quos consectetur a deserunt animi sint quidem saepe, beatae non. Harum, tempore dignissimos.</p>
          <div className="a-award">
            <img className="a-award-img" src={Award} alt="" />
            <div className="a-award-text">
              <h4 className='a-award-title'>Cum Laude award</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est sint placeat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
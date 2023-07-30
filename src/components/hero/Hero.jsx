import React from 'react';
import "./hero.css"
import image from "../../assets/images/22635333_6583017.svg";   

export default function Hero() {
  return (
    <>
      <div className="hero-section">
        <div className="left">
          <h1>Welcome To Our <span>Hackathon</span></h1>
          <p>a weekend of innovation and creativity awaits! Join us for electrifying challenges, collaborative brilliance, and the chance to shape the future. Unleash y            our potential and be part of a vibrant community driving positive change. Let's hack together!</p>
          <div className="action-buttons">
            <button className="apply-button">Apply Now</button>
          </div>
        </div>
        <div className="right">
          <img  src={image} alt="an illustration" />
        </div>
      </div>
    </>
  )
}

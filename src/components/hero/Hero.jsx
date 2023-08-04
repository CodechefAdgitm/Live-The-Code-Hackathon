import React, { useEffect } from "react";
import "./hero.css";
import image from "../../assets/images/22635333_6583017.svg";

export default function Hero() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <div className="hero-section">
        <div className="left">
          <h1>
            Welcome To <br />
            Live the code<span>Hackathon</span>
          </h1>
          <p>
            a weekend of innovation and creativity awaits! Join us for
            electrifying challenges, collaborative brilliance, and the chance to
            shape the future. Unleash y our potential and be part of a vibrant
            community driving positive change. Let&apos;s hack together!
          </p>
          <div className="temp-button">
            <a
              // className="apply-button"
              target="_blank"
              rel="noreferrer"
              href="https://devfolio.co/@codechefadgitm"
              style={{color:"white",textDecoration:"None"}}
            >
              Apply With Devfolio
            </a>
          </div>
          <div className="action-buttons">
            <div
              className="apply-button"
              data-hackathon-slug="Live-The-Code-Hackathon"
              data-button-theme="dark"
              style={{ height: "44px", width: "312px" }}
            ></div>
          </div>
        </div>
        <div className="right">
          <img src={image} alt="an illustration" />
        </div>
      </div>
    </>
  );
}

import React, { useEffect } from "react";
import { RandomReveal } from "react-random-reveal";
import "./hero.css";
import './hero.scss';
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
      <div className="hero-section" id="home">
        <div className="left">
          <h1><span>
            <RandomReveal isPlaying duration={3} characters="Welcome To Live the code Hackathon 2.0" />
          </span>
          </h1>
          <p className="hero-para">
            A weekend of innovation and creativity awaits! Join us for
            electrifying challenges, collaborative brilliance, and the chance to
            shape the future. Unleash y our potential and be part of a vibrant
            community driving positive change. Let&apos;s hack together!
          </p>

          <div className="action-buttons">
            <div
              className="apply-button"
              data-hackathon-slug="live-the-code"
              data-button-theme="dark-inverted"
              style={{ height: "44px", width: "312px" }}
            ></div>
          </div>
        </div>
        <div className="right">
          <img src={image} alt="an illustration" />
        </div>
        <div class="macbook">
          <div class="inner">
            <div class="screen">
              <div class="face-one">
                <div class="camera"></div>
                <div class="display">
                  <div class="shade"></div>
                </div>
                <span>MacBook Air</span>
              </div>
              <img src="http://www.clker.com/cliparts/i/s/H/f/4/T/apple-logo-white.svg" class="logo" />
            </div>
            <div class="body">
              <div class="face-one">
                <div class="touchpad">
                </div>
                <div class="keyboard">
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key space"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key"></div>
                  <div class="key f"></div>
                  <div class="key f"></div>
                  <div class="key f"></div>
                  <div class="key f"></div>
                  <div class="key f"></div>
                  <div class="key f"></div>
                  <div class="key f"></div>
                  <div class="key f"></div>
                  <div class="key f"></div>
                  <div class="key f"></div>
                  <div class="key f"></div>
                  <div class="key f"></div>
                  <div class="key f"></div>
                  <div class="key f"></div>
                  <div class="key f"></div>
                  <div class="key f"></div>
                </div>
              </div>
              <div class="pad one"></div>
              <div class="pad two"></div>
              <div class="pad three"></div>
              <div class="pad four"></div>
            </div>
          </div>
          <div class="shadow"></div>
        </div>
      </div>
    </>
  );
}

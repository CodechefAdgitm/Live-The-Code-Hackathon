import React, { useEffect } from "react";
import "./hero.css";
import AOS from "aos";
import image from "../../assets/images/coder.webp";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <div className="hero-section" id="home">
        <div data-aos="fade-up">
          <div className="left">
            <img src={image} className="heroImg" />
            <h1>Live the code Hackathon 2.0</h1>
            <p className="hero-para">
              A weekend of innovation and creativity awaits! Join us for
              electrifying challenges, collaborative brilliance, and the chance
              to shape the future. Unleash y our potential and be part of a
              vibrant community driving positive change. Let&apos;s hack
              together!
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
        </div>
      </div>
    </>
  );
}

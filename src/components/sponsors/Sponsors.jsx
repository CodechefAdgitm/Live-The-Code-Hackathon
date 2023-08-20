import React from "react";
import one from "../prize_section/images/1.png";
import two from "../prize_section/images/2.png";
import four from "../prize_section/images/4.png";
import eight from "../prize_section/images/8.png";
import Replit from "../prize_section/images/Replit.jpg";
import Solana from "../prize_section/images/Solana.png";
import InterviewCake from "../prize_section/images/interview-cake.jpg";
import giveMyCertificate from "../prize_section/images/givemycertificate.png";
import wolffarm from "../prize_section/images/wolfform.png";
import InterviewBuddy from "../prize_section/images/interviewBuddy.png";
import Axure from "../prize_section/images/axure2644.jpg";
import "./sponsors.css";

// const sponsorsData = [one, two, three, four, five, six, sev, eight, nine, ten, elev];
//alt tag
const sponsorsData = [
  { src: two, alt: "DEVFOLIO LOGO" },
  { src: four, alt: "FILECOIN LOGO" },
  { src: eight, alt: "POLYGON LOGO" },
  { src: Replit, alt: "REPLIT LOGO" },
  { src: Solana, alt: "SOLANA LOGO" },
  { src: InterviewCake, alt: "interview cake" },
  { src: giveMyCertificate, alt: "give my certificate" },
  { src: wolffarm, alt: "wolffarm" },
  { src: InterviewBuddy, alt: "interview buddy" },
  { src: Axure, alt: "axure" },
];

const Sponsors = () => {
  return (
    <>
      <section className="sponsors">
        {/* <p>Coming soon</p> */}
        <div className="head">
        <div className="distortedshape"></div>
      <h1 className="mainheading">Sponsors</h1>
      <h3 className="subheading">Mark the Dates to set yourself on fire</h3>
      </div>
        <div className="icons-container">
          {sponsorsData.map((sponsor, index) => (
            <img key={index} className="icon" src={sponsor.src} alt={sponsor.alt}></img>
            // <div
            //   key={index}
            //   className="icon"
            //   style={{ backgroundImage: `url(${sponsor.src})` }}
            //   alt={sponsor.alt}
            // ></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Sponsors;

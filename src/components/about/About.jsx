import React from "react";
import aboutSvg from "../../assets/images/about.svg";
import "./About.css";

export default function About() {
  return (
    <div className="colorPurple">
      <div className="triangle-wrapper"> {/* Wrap the element with the .triangle-wrapper div */}
        <div className="about-sec">
          <div className="about-image">
            <img src={aboutSvg} alt="About Us" />
          </div>
          <div className="points-container">
          <p>
                We, CodeChef ADGITM chapter is a close-knit community of
                diligent coders who come together and share best practices, new
                coding accomplishments, and plenty of resources to become the
                best problem solvers. We aim to establish and nurture young
                coding enthusiasts. Not only this but it also helps those who
                are novice to the world of computer programming. Different
                events, which not only includes coding contests and hackathons,
                aims to establish a strong coding culture amongst the student
                community. We aim to create an awareness of the potency that
                coding holds. Providing a great network and a nurturing
                mentorship have always been our thriving forces.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

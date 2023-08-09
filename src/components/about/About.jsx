import React from "react";
import aboutSvg from "../../assets/images/about.svg";
import "./About.css";

export default function About() {
  return (
    <section className="colorBlack">
      <div className="heading"><h2>        <div class="container">
  <p class="glitch">
    <span aria-hidden="true">About</span>
    About
    <span aria-hidden="true">About</span>
  </p>
</div></h2></div>
      <div id="wrapper" className="participation-rules">
        <div className="about-image">
          <img src={aboutSvg} alt="About Us" />
        </div>
        <div className="points-container">
          <ul className="rules-list">
            <p classname="about">

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
          </ul>
        </div>
      </div>
    </section>
  );
}

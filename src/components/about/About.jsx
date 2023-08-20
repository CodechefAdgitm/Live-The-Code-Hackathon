import React from "react";
import aboutSvg from "../../assets/images/about.svg";
import CClogo from "../../assets/images/codechef-logo.jpg";
import Elixerlogo from "../../assets/images/Elixer.png";
import cclogo from "../../assets/images/Codechef_ADGITM.jpg";
import Livethecode from "../../assets/images/LOGOFINAL.png";
import "./About.css";
import "../../App.css";

export default function About() {
  return (
    <section className="lightbluebackground" id="about">
      <div className="head">
        <div className="distortedshape"></div>
      <h1 className="mainheading">About</h1>
      <h3 className="subheading">know more about us</h3>
      </div>
      
      <div data-aos="fade-up">
        <div id="wrapper" className="participation-rules">
        
          <div className="points-container-main">
            {/* <div>
              <img src={cclogo} alt="About Us" className="abtimg" />
            </div> */}
            <ul>
              <h3 className="subheading purple">Codechef</h3>
              <p>
                Elixir aces as an unparalleled community consisting of the
                greatest minds of our college. It has people ranging from tech
                domains to non-tech sectors, all of whom are competent in their
                respective areas and strive together to make Elixir an
                astounding entity. With the perfect space to learn, collaborate,
                and explore, you are bound to experience many "Hello World"
                moments here. With our aim to provide our students an
                environment that fosters self-growth, we are proud to call
                ourselves a community FOR THE STUDENTS, BY THE STUDENTS, AND OF
                THE STUDENTS.
              </p>
            </ul>
            <ul>
            <h3 className="subheading pink">Elixir</h3>
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
            </ul>
          </div>
        </div>
      </div>

      
    </section>
  );
}

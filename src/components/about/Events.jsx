import React, { useEffect } from "react";
import logo from "../../assets/images/logo.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Event.css";

export default function Events() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <>
      <div className="events">
        <div className="heading"><h2>        <div class="container">
  <p class="glitch">
    <span aria-hidden="true">Event Timeline</span>
    Event Timeline
    <span aria-hidden="true">Event Timeline</span>
  </p>
</div></h2></div>
        <div className="timeline">
          <div className="container-event left-container">
            <img src={logo} />
            <div data-aos="fade-right">
              <div className="text-box">
                <h2>Registration</h2>
                <small>6 August - 20 August</small>
                <span className="left-container-arrow"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline">
          <div className="container-event right-container">
            <img src={logo} />
            <div data-aos="fade-left">
              <div className="text-box">
                <h2>Orientation</h2>
                <small>20 August (6pm)</small>
                <span className="right-container-arrow"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline">
          <div className="container-event left-container">
            <img src={logo} />
            <div data-aos="fade-right">
              <div className="text-box">
                <h2>Speaker Sessions</h2>
                <small>21 August - 30 August</small>
                <span className="left-container-arrow"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline">
          <div className="container-event right-container">
            <img src={logo} />
            <div data-aos="fade-left">
              <div className="text-box">
                <h2>Round 1 Idea Presentation</h2>
                <small>28 August - 29 August</small>
                <span className="right-container-arrow"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline">
          <div className="container-event left-container">
            <img src={logo} />
            <div data-aos="fade-right">
              <div className="text-box">
                <h2>Round 1 Results</h2>
                <small>31 August</small>
                <span className="left-container-arrow"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline">
          <div className="container-event right-container">
            <img src={logo} />
            <div data-aos="fade-left">
              <div className="text-box">
                <h2>Round 2 Coding Phase (36hr)</h2>
                <small>1 September (11am) - 2 September (11pm)</small>
                <span className="right-container-arrow"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline">
          <div className="container-event left-container">
            <img src={logo} />
            <div data-aos="fade-right">
              <div className="text-box">
                <h2>Final Pitches to judges</h2>
                <small>3 September(12pm - 6pm)</small>
                <span className="left-container-arrow"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline">
          <div className="container-event right-container">
            <img src={logo} />
            <div data-aos="fade-left">
              <div className="text-box">
                <h2>Final Result</h2>
                <small>5 September</small>
                <span className="right-container-arrow"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

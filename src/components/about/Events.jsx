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
        <div className="heading"><h1>Event Timeline</h1></div>
        <div className="timeline">
          <div className="container-event left-container">
            <img src={logo} />
            <div data-aos="fade-right">
              <div className="text-box">
                <h2>Registration</h2>
                <small>31 July (12pm) - 20 August (11.30pm)</small>
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
                <h2>Orientation (Youtube)</h2>
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
                <h2>PPT Submission Deadline</h2>
                <small>2 Sept. (10am)</small>
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
                <h2>Round 1 Pitches to Judges</h2>
                <small>2 Sept (12pm) - 3rd Sept (12pm)</small>
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
                <h2>Round 1 Result</h2>
                <small>5th Sept. (12pm)</small>
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
                <h2>Multiple Speakers Sessions</h2>
                <small>21 August - 2 September</small>
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
                <h2>Round 2 - Working Prototype Submissions</h2>
                <small>8 Sept (11am) - 9 Sept (11am) (24 hr hackathon)</small>
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
                <h2>Final Pitches to Judges</h2>
                <small>9 Sept (6pm) - 10 Sept (6pm)</small>
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
                <h2>Final Result</h2>
                <small>14th Sept</small>
                <span className="left-container-arrow"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

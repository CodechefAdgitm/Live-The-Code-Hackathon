import React,{useEffect} from "react";
import logo from "../../assets/images/logo.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Event.css"

export default function Events() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <div className="events heading">
      <h1>About Past Events</h1>
      <div className="timeline">
        <div className="container-event left-container">
          <img src={logo} />
          <div data-aos="fade-right">
          <div className="text-box">
            <h2>LIVE THE CODE</h2>
            <small>2020 - 2021</small>
            <p>
              A hybrid hackathon which is organised in the month of
              August-September every year. It was a huge success as the total
              participation was 5000+. It was organized to revitalize students'
              coding spirit and multiple cash prizes were given to the best
              freshers team, best all girls team, etc.
            </p>
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
            <h2>DSA CARNIVAL</h2>
            <small>2021 - 2022</small>
            <p>
              A month-long DSA Bootcamp to make students aware of the importance
              of DSA and to help them uplift their knowledge and skills.
              Multiple renowned speakers from the globe were invited to teach
              and guide newbie coders.
            </p>
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
            <h2>CODE BLOODED</h2>
            <small>2022 - 2023</small>
            <p>
              A 3hr global coding contest. It is considered an action-packed
              event aka heaven for coders. Overall, the objective of our
              organisation is to support the development of a culture of
              innovation and entrepreneurship among college students, while also
              contributing to the national goal of creating a more
              technologically advanced and prosperous India.
            </p>
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
            <h2>Present Event</h2>
            <small>2023</small>
            <p>
              Live the Code is a hybrid hackathon being organized by the
              CodeChef-ADGITM, throughout the world as a Global Event. Through
              this hackathon we aim to inspire young minds to build unique
              problem solving toolboxes for the proposed ideas or even
              open-ended real life problems.
            </p>
            <span className="right-container-arrow"></span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

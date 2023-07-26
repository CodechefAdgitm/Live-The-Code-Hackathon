import React from 'react';
import one from '../prize_section/images/1.png';
import two from '../prize_section/images/2.png';
import three from '../prize_section/images/3.png';
import four from '../prize_section/images/4.png';
import five from '../prize_section/images/5.jpg';
import six from '../prize_section/images/6.png';
import sev from '../prize_section/images/7.png';
import eight from '../prize_section/images/8.png';
import nine from '../prize_section/images/9.png';
import ten from '../prize_section/images/10.jpg';
import elev from '../prize_section/images/11.png';
import "./sponsors.css";

const sponsorsData = [one, two, three, four, five, six, sev, eight, nine, ten, elev];

const Sponsors = () => {
  return (
    <>
      <section className="sponsors">
        <div className="sponsors-heading">
          <h1>Sponsors & Partners</h1>
        </div>
        <div className="icons-container">
          {sponsorsData.map((sponsor, index) => (
            <div
              key={index}
              className="icon"
              style={{ backgroundImage: `url(${sponsor})` }}
            ></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Sponsors;

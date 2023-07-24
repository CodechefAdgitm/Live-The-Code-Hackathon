import React from 'react'
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import codeImg from "../../assets/images/codeimg.png";
import "./Offerings.css";

export default function Offerings  () {
  return (
    <section className="colorBlack">
    <div className="participation-rules">
      <div className="image-container">
        <img src={codeImg} alt="hackathon" className="image" />
      </div>
      <div className="points-container">
        <ul className="rules-list">
          <li> Help your brand app/website get more clicks or downloads.</li>
          <li> With the help of our social media reach, we can help your organization get better social media presence.</li>
          <li> In this digital era, meme marketing and moment marketing is a must, and our team can help your brand with that.</li>
          <li>
            {" "}
            In our hackathon, we are expecting a footfall of around 5000+ so we can help in increasing your brand on-ground presence too.
          </li>
          <li>
            {" "}
            Special videos, posts, and reels dedicated to your brand.
          </li>
          <li>
            {" "}
            Logos on posts, certificates, banners, etc.
          </li>
          <li>
            {" "}
            Offline goodies distribution of your brand to increase brand awareness.
          </li>
        </ul>
      </div>
      </div>
    </section>
    
  );
}

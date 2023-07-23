import React from "react";
import "./Teams.css";
import {FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import img7 from "../../assets/images/img7.png";
import img8 from "../../assets/images/img8.png";


export default function Teams() {
  return (
    <section className="team">
      <h2>Meet Our Team</h2>
      <div className="container-team team_container">
        <article className="team_member">
          <div className="team_member-image">
            <img src={img1}/>
          </div>
          <div className="team_member-info">
            <h4>Himanshu Gupta</h4>
            <p>Front End</p>
          </div>
          <div className="team_member-socials">
            <a href="#" target="_black"><FaLinkedin/></a>
            <a href="#" target="_black"><FaInstagram/></a>
            <a href="#" target="_black"><FaTwitter/></a>
          </div>
        </article>
        <article className="team_member">
          <div className="team_member-image">
            <img src={img2}/>
          </div>
          <div className="team_member-info">
            <h4>Jatin</h4>
            <p>Machine Learning</p>
          </div>
          <div className="team_member-socials">
            <a href="#" target="_black"><FaLinkedin/></a>
            <a href="#" target="_black"><FaInstagram/></a>
            <a href="#" target="_black"><FaTwitter/></a>
          </div>
        </article>        
        <article className="team_member">
          <div className="team_member-image">
            <img src={img3}/>
          </div>
          <div className="team_member-info">
            <h4>Tanisha</h4>
            <p>Web Development</p>
          </div>
          <div className="team_member-socials">
            <a href="#" target="_black"><FaLinkedin/></a>
            <a href="#" target="_black"><FaInstagram/></a>
            <a href="#" target="_black"><FaTwitter/></a>
          </div>
        </article>        <article className="team_member">
          <div className="team_member-image">
            <img src={img4}/>
          </div>
          <div className="team_member-info">
            <h4>Arya Kumari</h4>
            <p>Web Development</p>
          </div>
          <div className="team_member-socials">
            <a href="#" target="_black"><FaLinkedin/></a>
            <a href="#" target="_black"><FaInstagram/></a>
            <a href="#" target="_black"><FaTwitter/></a>
          </div>
        </article>        <article className="team_member">
          <div className="team_member-image">
            <img src={img5}/>
          </div>
          <div className="team_member-info">
            <h4>Nandani Singh</h4>
            <p>Machine Learning</p>
          </div>
          <div className="team_member-socials">
            <a href="#" target="_black"><FaLinkedin/></a>
            <a href="#" target="_black"><FaInstagram/></a>
            <a href="#" target="_black"><FaTwitter/></a>
          </div>
        </article>        <article className="team_member">
          <div className="team_member-image">
            <img src={img6}/>
          </div>
          <div className="team_member-info">
            <h4>Anish Hazra</h4>
            <p>Front End Development</p>
          </div>
          <div className="team_member-socials">
            <a href="#" target="_black"><FaLinkedin/></a>
            <a href="#" target="_black"><FaInstagram/></a>
            <a href="#" target="_black"><FaTwitter/></a>
          </div>
        </article>        
        <article className="team_member">
          <div className="team_member-image">
            <img src={img7}/>
          </div>
          <div className="team_member-info">
            <h4>Vansh</h4>
            <p>Machine Learning</p>
          </div>
          <div className="team_member-socials">
            <a href="#" target="_black"><FaLinkedin/></a>
            <a href="#" target="_black"><FaInstagram/></a>
            <a href="#" target="_black"><FaTwitter/></a>
          </div>
        </article>        
        <article className="team_member">
          <div className="team_member-image">
            <img src={img8}/>
          </div>
          <div className="team_member-info">
            <h4>Shivani</h4>
            <p>Machine Learning</p>
          </div>
          <div className="team_member-socials">
            <a href="#" target="_black"><FaLinkedin/></a>
            <a href="#" target="_black"><FaInstagram/></a>
            <a href="#" target="_black"><FaTwitter/></a>
          </div>
        </article>
      </div>
    </section>
  );
}

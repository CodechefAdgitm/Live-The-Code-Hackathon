import React, {useEffect} from "react";
import "./Themes.css";
import AOS from 'aos';
import {FaLightbulb, FaMoneyCheck, FaTwitter} from "react-icons/fa";;
import {BsBook} from "react-icons/bs";
import {GiHealthNormal} from "react-icons/gi";
import {SiHiveBlockchain} from "react-icons/si";
import {BiNetworkChart} from "react-icons/bi";
import {PiVirtualRealityLight} from "react-icons/pi";

const themesData = [
  { title: 'Open Innovation', icon: <FaLightbulb/>, descp:"Collaborate across boundaries to devise innovative solutions that challenge norms and drive progress." },
  { title: 'EdTech', icon: <BsBook/>, descp:"Transform learning through tech innovations, from personalized education platforms to interactive resources." },
  { title: 'AR/VR', icon: <PiVirtualRealityLight/>, descp:"Immerse users in virtual realms, creating new experiences that blur the line between real and digital worlds."},
  { title: 'FinTech', icon: <FaMoneyCheck/>, descp:"Disrupt finance with digital solutions like mobile banking, blockchain applications, and automated advisors." },
  { title: 'Productivity & Networking', icon: <BiNetworkChart/>,descp:"Boost collaboration and efficiency with tools that optimize remote work, communication, and project management." },
  { title: 'Healthcare', icon: <GiHealthNormal/>, descp:"fRevolutionize healthcare through data-driven diagnostics, telemedicine, and advancements in patient care." },
  { title: 'Web3', icon: <SiHiveBlockchain/>, descp:"Shape the decentralized internet with blockchain-powered applications that prioritize privacy and security." },
  
];

export default function Themes() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <>
    <section className="themes">
    <div className="head">
        <div className="distortedshape"></div>
      <h1 className="mainheading">Themes</h1>
      <h3 className="subheading">Mark the Dates to set yourself on fire</h3>
      </div>
      <div data-aos="fade-up">
      <div className="themes-container">
        {themesData.map((theme, index) => (
          <div className="theme-box " key={index}>
            <div className="circleShape">{theme.icon}</div>
            <h3>{theme.title}</h3>
            <p>{theme.descp}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
    </>
  );
}

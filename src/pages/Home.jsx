import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Events from "../components/about/Events";
import Rules from "../components/participation_rules/Rules";
import Prize from "../components/prize_section/Prize";
import Sponsors from "../components/sponsors/Sponsors";
import Teams from "../components/teams/Teams";
import Themes from "../components/themes/Themes";
import Offerings from "../components/offerings/Offerings";
import Contact from "../components/contact/Contact";
import Ask from "../components/ask/Ask";

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Events />
        <Themes />
   <Rules />
    <Prize />
    <Sponsors />
    <Teams />
    
    <Ask />
    <Contact/>
    </div>
  )
}

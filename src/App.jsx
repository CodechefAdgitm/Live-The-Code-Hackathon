import React from "react";
import "./App.css";
import Blob from "./components/blob/blob";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Themes from "./components/themes/Themes";
import Rules from "./components/participation_rules/Rules";
import Prize from "./components/prize_section/Prize";
import Sponsors from "./components/sponsors/Sponsors";
import Teams from "./components/teams/Teams";
import Ask from "./components/ask/Ask";
import Contact from "./components/contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Themes />
      <Rules />
      <Prize />
      <Sponsors />
      <Teams />
      <Ask />
      <Contact />
    </div>
  );
}

export default App;

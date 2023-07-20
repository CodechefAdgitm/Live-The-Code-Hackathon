/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'

import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Rules from './components/participation_rules/Rules'
import Prize from './components/prize_section/Prize'
import Sponsors from './components/sponsors/Sponsors'
import Teams from './components/teams/Teams'
import Themes from './components/themes/Themes'
import Timeline from './components/timeline/Timeline'

function App() {
  return (
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Timeline/>
        <Themes/>
        <Rules/>
        <Prize/>
        <Sponsors/>
        <Teams/>
      </div>
  )
}

export default App

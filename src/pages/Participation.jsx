import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Events from '../components/about/Events'
import Rules from '../components/participation_rules/Rules'
import Ask from '../components/ask/Ask'
import Contact from '../components/contact/Contact'

export default function Participation() {
  return (
    <div>
        <Navbar />
        <Events />
        <Rules />
        <Ask />
        <Contact/>
    </div>
  )
}

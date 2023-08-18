import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Prize from '../components/prize_section/Prize'
import Sponsors from '../components/sponsors/Sponsors'
import Teams from '../components/teams/Teams'
import Contact from '../components/contact/Contact'

export default function Prizes() {
  return (
    <div>
        <Navbar />
        <Prize />
        <Sponsors />
        <Teams />
        <Contact/>
    </div>
  )
}

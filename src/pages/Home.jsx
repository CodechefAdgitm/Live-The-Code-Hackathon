import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
    </div>
  )
}

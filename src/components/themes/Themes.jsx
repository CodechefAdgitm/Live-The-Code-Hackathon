import React, { useEffect } from 'react'
import './Themes.css'
import AOS from 'aos'
import { FaLightbulb, FaMoneyCheck, FaTwitter } from 'react-icons/fa'
import { BsBook } from 'react-icons/bs'
import { GiHealthNormal } from 'react-icons/gi'
import { SiHiveBlockchain } from 'react-icons/si'
import { BiNetworkChart } from 'react-icons/bi'
import { PiVirtualRealityLight } from 'react-icons/pi'

const themesData = [
  { title: 'Open Innovation', icon: <FaLightbulb /> },
  { title: 'EdTech', icon: <BsBook /> },
  { title: 'AR/VR', icon: <PiVirtualRealityLight /> },
  { title: 'FinTech', icon: <FaMoneyCheck /> },
  { title: 'Productivity & Networking', icon: <BiNetworkChart /> },
  { title: 'Healthcare', icon: <GiHealthNormal /> },
  { title: 'Web3', icon: <SiHiveBlockchain /> },
]

export default function Themes() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])
  return (
    <>
      <section className='themes'>
        <div className='heading'>
          <h2>
            {' '}
            <div class='container'>
              <p class='glitch'>
                <span aria-hidden='true'>Themes</span>
                Themes
                <span aria-hidden='true'>Themes</span>
              </p>
            </div>
          </h2>
        </div>
        <div data-aos='fade-up'>
          <div className='themes-container'>
            {themesData.map((theme, index) => (
              <div className='theme-box' key={index}>
                <div className='circleShape'>{theme.icon}</div>

                <h3>{theme.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

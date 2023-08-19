import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import ccxelixer from '../../assets/images/cc x elixer1.png'
import contactImg from '../../assets/images/contact.png'
import menu from '../../assets/images/menu.png'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className='navbar-body'>
      <nav className='navbar'>
        <img src={ccxelixer} className='logo' />
        <div className='desktopMenu'>
          <Link to='/' activeClassName='active' className='desktopMenuListItem'>
            Home
          </Link>
          <Link
            to='/themes'
            activeClassName='active'
            className='desktopMenuListItem'
          >
            Themes
          </Link>
          <Link
            to='/participation'
            activeClassName='active'
            className='desktopMenuListItem'
          >
            Participation
          </Link>
          <Link
            to='/prizes'
            activeClassName='active'
            className='desktopMenuListItem'
          >
            Prizes
          </Link>
        </div>
        <button
          className='desktopMenuBtn contactButton'
          onClick={() => {
            document
              .getElementById('contact')
              .scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <img src={contactImg} className='desktopMenuImg' />
          Contact Us
        </button>

        <a className='mobMenu' onClick={() => setShowMenu(!showMenu)}>
          <i class='fa-solid fa-bars fa-2xl'></i>
        </a>
        <div
          className='navMenu'
          style={{ display: showMenu ? 'flex' : 'none' }}
        >
          <Link
            activeClassName='active'
            to='/'
            smooth={true}
            offset={-100}
            spy={true}
            duration={500}
            className='ListItem'
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClassName='active'
            to='/themes'
            smooth={true}
            offset={-50}
            spy={true}
            duration={500}
            className='ListItem'
            onClick={() => setShowMenu(false)}
          >
            Themes
          </Link>
          <Link
            activeClassName='active'
            to='/participation'
            smooth={true}
            offset={-100}
            spy={true}
            duration={500}
            className='ListItem'
            onClick={() => setShowMenu(false)}
          >
            Participation
          </Link>
          <a
            smooth={true}
            offset={-50}
            spy={true}
            duration={500}
            className='ListItem'
            onClick={() => {
              setShowMenu(false)
            }}
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  )
}

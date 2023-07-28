import React, { useState } from 'react'
import './Navbar.css'
// install react-icons library
import { FaHome, FaPhone, FaThemeco, FaBars, FaUserFriends, FaInfo, FaInfoCircle, FaBath } from "react-icons/fa"
export default function Header() {
    const [status, set_status] = useState(false)
    function menu_act() {
        const menu = document.getElementById('Ham_menu')
        if (status === false) {
            menu.style.display = "flex"
            set_status(true)
        }
        else {
            menu.style.display = "none"
            set_status(false)
        }
    }
    return (
        <>
            <div id="header">
                <a href="/"><h3 className="head">
                    Live the Code
                </h3>
                </a>
                <ul className='nav-links-1'>
                    <li className="nav-item">
                        <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#themes" className="nav-link">Themes</a>
                    </li>
                    <li className="nav-item">
                        <a href="#participation" className="nav-link">Participation</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>
                <ul className='nav-links-2'>
                    <li className="nav-item">
                        <a href="#home" className="nav-link"><FaHome /></a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link"><FaInfo /></a>
                    </li>
                    <li className="nav-item">
                        <a href="#themes" className="nav-link"><FaThemeco /></a>
                    </li>
                    <li className="nav-item">
                        <a href="#participation" className="nav-link"> <FaUserFriends /></a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link"><FaPhone /></a>
                    </li>
                </ul>

                <FaBars id="dropmenu" onClick={menu_act} />
            </div>
            <div className="drop_menu" id="Ham_menu">
                <div className="innermenu">
                    <ul className="drop-links">
                        <li className="drop-item">
                            <a href="#home" className="drop-link"><FaHome /></a>
                        </li>
                        <li className="drop-item">
                            <a href="#about" className="drop-link"><FaInfo /></a>
                        </li>
                        <li className="drop-item">
                            <a href="#themes" className="drop-link"><FaThemeco /></a>
                        </li>
                        <li className="drop-item">
                            <a href="#participation" className="drop-link"> <FaUserFriends /></a>
                        </li>
                        <li className="drop-item">
                            <a href="#contact" className="drop-link"><FaPhone /></a>
                        </li>
                    </ul>
                    <FaBars id="innerdropmenu" onClick={menu_act} />
                </div>
            </div>

        </>
    )
}

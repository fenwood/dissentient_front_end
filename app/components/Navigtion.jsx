import React, { useState } from 'react'
import { NavLink, Link } from "@remix-run/react";
import Hamburger from '../assets/hamburger.svg'
import Tilt from 'react-parallax-tilt';
import logo from '../assets/logo_transparent_new_black_sm.svg'

const Navigtion = () => {

    const [showNav, setShowNav] = useState(false)
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }

    const toggleNavItems = () => {
      setShowNav(!showNav)
    }


  return (
      <nav className="navbar">
          <div className="nav-container">
            <Tilt className="tilt"
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          perspective={1000}
          transitionSpeed={1000}
          scale={1.2}
          gyroscope={true}>
            <div className="logo"><img src={logo} alt="logo" /></div>
            </Tilt>
              
              <div className="menu-icon" onClick={handleShowNavbar} >
                <img src={Hamburger} alt="menu" className="hamburger-img" />
            </div>
            <div className={`nav-elements ${showNavbar && 'active'}`}>
              <ul>
                <li><NavLink to="/" >Home</NavLink>{" "}</li>
                <li><NavLink to="/about">About Us</NavLink>{" "}</li>
                <li><NavLink to="/services">Services</NavLink>{" "}</li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </div>

        </div>
      </nav>
  )
}

export default Navigtion

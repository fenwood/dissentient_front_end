import React from "react"
import "./footer.css"
import { Link } from "@remix-run/react"

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="#">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="row">
          Dissentient Digital Copyright © 2023 - All rights reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer

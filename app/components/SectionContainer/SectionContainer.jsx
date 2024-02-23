import React from "react"
import "./sectionContainer.css"
// import Hamburger from '../assets/hamburger.svg'
import { Image } from "@unpic/react"

const SectionContainer = ({ heading, content, img, left, cdn }) => {
  if (left) {
    return (
      <div className="lr-container">
        <Image src={img} alt={heading} cdn={cdn} />
        <div className="lr-content">
          <h2>{heading}</h2>
          <p>{content}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="lr-container-right">
        <div className="lr-content">
          <h2>{heading}</h2>
          <p>{content}</p>
        </div>
        <img src={img} alt={heading} className="src" />
      </div>
    )
  }
}

export default SectionContainer

import React from "react"
import "./sectionContainer.css"
// import Hamburger from '../assets/hamburger.svg'
import { Image } from "@unpic/react"

const SectionContainer = ({ heading, content, img, left, cdn }) => {
  if (left) {
    return (
      <div className="lr-container">
        <Image src={img} alt={heading} cdn={cdn} width={300} height={300} />
        <div className="lr-content mt2">
          <h2>{heading}</h2>
          <p>{content}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="lr-container-right">
        <div className="lr-content mt2">
          <h2>{heading}</h2>
          <p>{content}</p>
        </div>
        <Image
          src={img}
          alt={heading}
          className="src"
          width={300}
          height={300}
        />
      </div>
    )
  }
}

export default SectionContainer

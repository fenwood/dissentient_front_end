import React from 'react'
import './SectionContainer.css'
// import Hamburger from '../assets/hamburger.svg'


const SectionContainer = ({heading, content, img, left}) => {
  
  if (left) {
    return (
        <div className="lr-container">
            <img src={img} alt={heading} className="src" />
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
      )  }

}

export default SectionContainer

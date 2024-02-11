import React from 'react'
import './card.css'

const Card = ({heading, img, body}) => {
  return (
    <div className="card">
      <img src={img} />
      <h3>{heading}</h3>
      <p>{body}</p>
    </div>
  )
}

export default Card

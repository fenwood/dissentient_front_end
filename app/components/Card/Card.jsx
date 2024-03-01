import React from "react"
import "./card.css"
import { Image } from "@unpic/react"

const Card = ({ heading, img, body, cdn }) => {
  return (
    <div className="card">
      <Image src={img} alt={heading} height={100} width={100} cdn={cdn} />
      <h2 className="mt">{heading}</h2>
      <p>{body}</p>
    </div>
  )
}

export default Card

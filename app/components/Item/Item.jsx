import React from "react"
import { Image } from "@unpic/react"
import "./item.css"

const Item = ({ img, heading, body, cdn }) => {
  return (
    <div className="item">
      <Image src={img} alt={heading} height={100} width={100} cdn={cdn} />
      <h3>{heading}</h3>
      <p>{body}</p>
    </div>
  )
}

export default Item

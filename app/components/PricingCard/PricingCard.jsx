import React from "react"
import "./pricingCard.css"

const PricingCard = ({ title, price, items, cta }) => {
  return (
    <div className="pricing-card">
      <h5>{title}</h5>
      <div className="pricing-subheading">
        <span className="text-3xl">$</span>
        <span className="text-5xl">{price}</span>
        <span className="text-xl">/month</span>
      </div>
      <ul role="list">
        {items.map((item) =>
          item.active ? (
            <li key={item.id}>
              <svg
                className="svg-blue"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="list-text">{item.text}</span>
            </li>
          ) : (
            <li key={item.id} className="strike-through">
              <svg
                className="svg-gray"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="list-text">{item.text}</span>
            </li>
          )
        )}
      </ul>
      <button type="button" className="btn-pricing">
        {cta}
      </button>
    </div>
  )
}

export default PricingCard

import React, { useState } from 'react'
import './faq.css'

const Faq = ({ title, content }) => {

    const [isActive, setIsActive] = useState(false);

    
  return (
    <div>
        <div className="accordion">
            <div className="accordion-item">
                <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                    <div>{title}</div>
                    <div>
                        {isActive ? '-' : '+' }
                    </div>
                </div>
                {isActive && <div className="accordion-content">{content}</div> }
                
            </div>
        </div>
      
    </div>
  )
}

export default Faq

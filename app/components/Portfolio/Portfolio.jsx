import React from 'react'
import "./portfolio.css";
import PorfolioImage1 from '../../assets/portfolio_memorybooth.png'
import PorfolioImage2 from '../../assets/portfolio_millenium.png'
import PorfolioImage3 from '../../assets/portfolio_wineryseeker.png'
import PorfolioImage4 from '../../assets/portfolio_avintageo.png'


const Portfolio = () => {

    const projects = [
        {
          id: 1,
          title: "Avintageo",
          img: PorfolioImage1,
          description:
            "A mobile app splash page for Avintageo, an app that predicts the probability of you liking any wine",
          technologies: "React.js | Pixel-perfect | SCSS | Styled Component",
          link: "https://www.memorybooths.ca",
        },
        {
          id: 2,
          title: "Millennium Dentistry",
          img: PorfolioImage2,
          description:
            "Millennium Dental is a family dental office in Brampton.",
          technologies: "React | Remix",
          link: "https://www.millenniumfamilydentist.com/",
        },
        {
          id: 3,
          title: "Winery Seeker",
          img: PorfolioImage3,
          description:
            "Winery Seeker is a website that allows users to plan their winery trips",
          technologies: "React | Sanity CMS | PostGres | Javascript",
          link: "https://www.wineryseeker.com/",
        },
        {
          id: 4,
          title: "Avintageo",
          img: PorfolioImage4,
          description:
            "A mobile app splash page for Avintageo, an app that predicts the probability of you liking any wine.",
          technologies: "Remix | React.js | Webflow | jQuery",
          link: "https://www.avintageo.com/",
        },
    ]
    

    return (
    <section id="portfolio">
        <div className="container portfolio__container">
        {projects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
            </article>
        ))}
        </div>

    </section>
  )
}

export default Portfolio

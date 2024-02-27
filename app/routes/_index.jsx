import Hero from "../components/Hero"
import Card from "../components/Card/Card"
import Analytics from "../assets/analytics.png"
import Hosting from "../assets/hosting.png"
import Design from "../assets/web-design.png"
import webImage from "../assets/painter.png"
import analyticsImage from "../assets/analytics.jpg"
import dataImage from "../assets/data.jpg"
import seoImage from "../assets/seo.jpg"
import TextBanner from "../components/TextBanner/TextBanner"
import Portfolio from "../components/Portfolio/Portfolio"
import SectionContainer from "../components/SectionContainer/SectionContainer"
import hero from "../assets/hero11.jpg"
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

export const meta = () => {
  return [
    {
      title: "Dissentient Digital - Creating digital experiences | Web Design",
    },
  ]
}

export async function loader({ request }) {
  const ENV = {
    CDN: process.env.CDN,
  }
  return json({ ENV })
}

const images = [
  hero,
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
]

const headings = [
  "Welcome to Dissentient Digital. We help small businesses succeed online.",
  "We build custom modern, lightweight and performative websites with you budget in mind without sacrificing quality.",
  "SEO, analytics, hosting, and development - all included.",
  "4th Heading",
  "5th Heading",
  "6th Heading",
]

const tagLines = [
  "First tagline",
  "2nd tagline",
  "3rd tagline",
  "4th tagline",
  "5th tagline",
  "6th tagline",
]

export default function Index() {
  const loaderData = useLoaderData()

  return (
    <>
      <div className="wrapper">
        <Hero images={images} headings={headings} tagLines={tagLines} />
      </div>
      <div className="wrapper">
        <div className="section-title flex">
          <h1>Our Offering</h1>
        </div>
        <div className="container">
          <Card
            cdn={loaderData.ENV.CDN}
            heading="Website & App Development"
            img={Design}
            body="We build custom, high performance websites to meet your business needs with a focus on SEO, accessibility and site speed."
          />
          <Card
            cdn={loaderData.ENV.CDN}
            heading="Data & Analytics"
            img={Hosting}
            body="From setting up Google Analytics and building out data pipelines to custom web scraping, we can help with all your data needs."
          />
          <Card
            cdn={loaderData.ENV.CDN}
            heading="Digital Marketing"
            img={Analytics}
            body="Want to aquire leads through paid media but don't know where to start? We can help run your search, display and social campaigns with any budget."
          />
        </div>
      </div>
      <div className="wrapper">
        <TextBanner />
      </div>
      <div className="wrapper">
        <div className="section-title flex">
          <h1>What we do</h1>
        </div>
        <SectionContainer
          heading="Website Development"
          content="We offer end-to-end full-service website design for small businesses that includes designing a modern custom website, hosting and domain management and unlimited updates starting from just $50 per month.  All our websites include Google Analytics and are built to be fully accessible, highly performant and SEO-friendly leveraging modern technology stacks. "
          img={webImage}
          left={true}
          cdn={loaderData.ENV.CDN}
        />
        <SectionContainer
          heading="Analytics"
          content="Digital Analytics. From tag management to implementing or modifying Google Analytics, our team has experience in most leading analytics tools including Adobe and Google Analytics / Tag manager, Tableau and Looker studio for dashboards, and data management platforms such as Big Query and Domo."
          img={analyticsImage}
          left={false}
          cdn={loaderData.ENV.CDN}
        />
        <SectionContainer
          heading="Data"
          content="Is there data that  you want but cannot get in the format you like? We can scrape any public data and give it to you in a csv or Excel format. We build custom web scrapers and can query almost any website."
          img={dataImage}
          left={true}
          cdn={loaderData.ENV.CDN}
        />
        <SectionContainer
          heading="Digital Marketing"
          content="Don’t have time to manage and ad campaign? Let us help. We have several years experience running digital campaigns across several industries and apply a data driven approach to ensure you are targeting the right people on the right platforms with the right message."
          img={seoImage}
          left={false}
          cdn={loaderData.ENV.CDN}
        />
      </div>
      <div className="wrapper">
        <div className="section-title flex">
          <h1>Our Portfolio</h1>
        </div>
        <Portfolio cdn={loaderData.ENV.CDN} />
      </div>
    </>
  )
}

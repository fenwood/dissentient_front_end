import Hero from "../components/Hero"
import Card from "../components/Card/Card"
import Item from "../components/Item/Item"
import PricingCard from "../components/PricingCard/PricingCard"
import Analytics from "../assets/analytics.png"
import Hosting from "../assets/hosting.png"
import Design from "../assets/web-design.png"
import webImage from "../assets/web_development.jpg"
import imgDigitalNeeds from "../assets/digital-needs-100.png"
import imgRabbit from "../assets/icons8-rabbit-100.png"
import imgTargets from "../assets/targets-100.png"
import imgHeartBag from "../assets/heart-bag-100.png"
import imgBrand from "../assets/brand-100.png"
import analyticsImage from "../assets/analytics.jpg"
import dataImage from "../assets/data.jpg"
import seoImage from "../assets/seo.jpg"
import TextBanner from "../components/TextBanner/TextBanner"
import Portfolio from "../components/Portfolio/Portfolio"
import SectionContainer from "../components/SectionContainer/SectionContainer"
import hero from "../assets/hero11.jpg"
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { useState } from "react"
import Modal from "../components/Modal/Modal"
import HubspotMeeting from "../components/HubspotMeeting"

export const meta = () => {
  return [
    {
      title: "Dissentient Digital - Creating digital experiences | Web Design",
    },
    {
      property: "og:title",
      content: "Dissentient Digital - Creating digital experiences",
    },
    {
      name: "description",
      content:
        "Dissentient Digital is a Toronto based digital solutions agency specializing in building low-cost high-performance websites for small businesses, digital advertising campaigns, SEO and analytics",
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
]

const headings = [
  "Welcome to Dissentient Digital. We help small businesses succeed online.",
  "We build custom modern, lightweight and performative websites with you budget in mind without sacrificing quality.",
  "SEO, analytics, hosting, and development - all included.",
  "Data & Analytics - we can get data from just about any source you can think of and package it in any format you require.",
  "Digital Marketing - our experts can help with local digital advertising, everything from creative to ad operations.",
]

const tagLines = ["First tagline", "2nd tagline", "3rd tagline", "4", "5"]

export default function Index() {
  const loaderData = useLoaderData()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className="wrapper">
        <Hero images={images} headings={headings} tagLines={tagLines} />
      </div>
      <div className="wrapper">
        <div className="section-title flex">
          <h1>About Dissentient Digital</h1>
        </div>

        <div className="section-sub">
          <p>
            We help small business succeed online without breaking the bank.
            Dissentient specializes in building custom, digital experiences for
            local small businesses that focus on fast, SEO-friendly modern
            websites that will drive more visibility into your brand. Want to
            learn how we can help?{" "}
            <button
              type="button"
              className="btn btn-green"
              onClick={() => openModal()}
            >
              Book a call
            </button>
          </p>
        </div>

        <section>
          <HubspotMeeting isModalOpen={isModalOpen} onClose={closeModal} />
        </section>

        <div className="container">
          <Item
            cdn={loaderData.ENV.CDN}
            heading="Your digital needs, fulfilled"
            img={imgDigitalNeeds}
            body="White glove service, dollar store prices. We will develop and design your website, handle all your copy and image requirements and host on our content distribution network."
          />
          <Item
            cdn={loaderData.ENV.CDN}
            heading="We build your digital presence"
            img={imgBrand}
            body="Building a website is easy, building a digital presence is where we add value. If you build it, they won't come. We focus on creating content-based stragies based on your busiess objectives to esure you can compete in your domain."
          />
          <Item
            cdn={loaderData.ENV.CDN}
            heading="Made with love"
            img={imgHeartBag}
            body="Our design philosophy is to create websites that are simple, lovable and complete. Our websites are fully mobile responsible, meet all accessibility standards and are lightening-fast. "
          />
        </div>
      </div>

      <div className="wrapper">
        <TextBanner />
      </div>

      <div className="wrapper">
        <div className="section-title flex">
          <h1>Pricing</h1>
        </div>
        <div className="container">
          <PricingCard
            title="Static Site"
            price="15"
            items={[
              { id: 1, active: true, text: "5 pages included" },
              { id: 2, active: true, text: "Will create copy/images" },
              { id: 3, active: true, text: "Fully responsive, SEO friendly" },
              { id: 4, active: true, text: "Hosting and analytics included" },
              { id: 5, active: false, text: "Contact form" },
              { id: 6, active: false, text: "Unlimited edits" },
              { id: 7, active: false, text: "Content management system" },
              { id: 8, active: false, text: "Ability to edit yourself" },
              { id: 9, active: false, text: "Unlimited edits" },
            ]}
            cta="Learn more"
          />
          <PricingCard
            title="Static Site with Form"
            price="25"
            items={[
              { id: 1, active: true, text: "10 pages included" },
              { id: 2, active: true, text: "Will create copy/images" },
              { id: 3, active: true, text: "Fully responsive, SEO friendly" },
              { id: 4, active: true, text: "Hosting and analytics included" },
              { id: 5, active: true, text: "Contact form" },
              { id: 6, active: true, text: "Unlimited edits" },
              { id: 7, active: false, text: "Content management system" },
              { id: 8, active: false, text: "Ability to edit yourself" },
              { id: 9, active: false, text: "Unlimited edits" },
            ]}
            cta="Learn more"
          />
          <PricingCard
            title="Content Creator"
            price="50"
            items={[
              { id: 1, active: true, text: "1000 pages included" },
              { id: 2, active: true, text: "Will create copy/images" },
              { id: 3, active: true, text: "Fully responsive, SEO friendly" },
              { id: 4, active: true, text: "Hosting and analytics included" },
              { id: 5, active: true, text: "Contact form" },
              { id: 6, active: true, text: "Unlimited edits" },
              { id: 7, active: true, text: "Content management system" },
              { id: 8, active: true, text: "Ability to edit yourself" },
              { id: 9, active: true, text: "Unlimited edits" },
            ]}
            cta="Learn more"
          />
        </div>
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
      {/* 
      <div className="wrapper">
        <div className="section-title flex">
          <h1>Our Offering</h1>
        </div>
        <div className="container">
          <Card
            cdn={loaderData.ENV.CDN}
            heading="Website Development"
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
      </div> */}
    </>
  )
}

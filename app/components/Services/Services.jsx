import React from "react"
import "./services.css"
import { TbDeviceAnalytics } from "react-icons/tb"
import { CgWebsite } from "react-icons/cg"
import { FaAdversal } from "react-icons/fa"

const Services = () => {
  return (
    <section className="section services-section" id="services">
      <div className="row">
        <div className="section-title">
          <h1>Our Services</h1>
          <p>
            We are a full service web development and analytics business,
            specializing in helping local business get ranked increased business
            via digital mediums. While our main service is subscription
            websites, we offer a range of services.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="feature-box-1">
          <div className="icon">
            <CgWebsite />
          </div>
          <div className="feature-content">
            <h2>Websites Development</h2>
            <p>
              We design and develop full-stack websites for small businesses,
              creating stylish, modern websites that include design and
              development, hosting, analytics and contact forms.{" "}
            </p>
            <p>
              <a href="#website">Learn more.</a>
            </p>
          </div>
        </div>
        <div className="feature-box-1">
          <div className="icon">
            <FaAdversal />
          </div>
          <div className="feature-content">
            <h2>Digital Marketing</h2>
            <p>
              Our adWords and Meta experts can help your business target your
              key audience and use paid media to find them with the right
              creative and messaging.
            </p>
            <p>
              <a href="#marketing">Learn more.</a>
            </p>
          </div>
        </div>
        <div className="feature-box-1">
          <div className="icon">
            <TbDeviceAnalytics />
          </div>
          <div className="feature-content">
            <h2>Data & Analytics</h2>
            <p>
              Do you need data scraped, analytics tools implemented or
              dashboards created, we can help you.
            </p>
            <p>
              <a href="#analytics">Learn more.</a>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="section-title">
          <a id="website">
            <h2>Website Development</h2>
          </a>
          <p className="subheading">
            Your digital presence is your business's lifeblood. Let us build you
            a lifeline.
          </p>
          <p>
            In today's world, your website is often the first impression
            customers get - it has to be powerful. But if you're like most small
            business owners, building and maintaining a website can feel
            overwhelming. That's where we come in.
          </p>
          <p>
            We offer low cost website development solutions for small businesses
            with a focus on fast, modern websites with targeted content to help
            you generate leads. We offer a range of services tailored to small
            businesses that need a strong digital foundation without the
            headache.
          </p>
          <ul>
            <li>
              <strong>Fully managed websites:</strong> We offer a full-service
              website development service that includes building you a custom
              website, managing the hosting, content and asset creation as well
              as updates to the website. Our basic plan starts at $50 per month
              and includes a static website with up to 5 sections.
            </li>
            <li>
              <strong>E-commerce and Shopify:</strong> Ready to start selling
              online? We're experts in creating seamless e-commerce solutions,
              from managing and setting up a store to custom integrations.
            </li>
            <li>
              <strong>Website redesigns:</strong> Do you just need a new look
              and feel or a refresh? We're happy to redesign your website to
              match your vision.
            </li>
          </ul>
          <p>
            Are you tired of misleading pricing, vendor or domain lock-in and
            ridiculous upsells from hosting providers? Have you had enough with
            bloated DIY website makers with limited functionality? At
            Dissentient Digital, we exist to take the complexity out of your
            digital transformation. We stick to the basics and build simple but
            well designed websites hosted on lightening-fast content delivery
            networks with your end-user in mind. Not only do we create your
            website for you, but all websites include SSL, working contact forms
            and Google Analytics all setup for you. We do not lock your domain
            and you can transfer out at any time.
          </p>
          <p>
            Our specialty is building highly performant, SEO-friendly websites
            for local businesses that are looking to grow their digital presnce
            and use digital to acquire leads. While we can design anything to
            meet your spec, our bread and butter are building lightening fast
            static websites for businesses that do not have a lot of content,
            and building dynamic headless content management system that allow
            you to add and update your own web pages.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="section-title">
          <a id="marketing">
            <h2>Digital Marketing</h2>
          </a>
          <p className="subheading">
            Stop wasting money on ads that don't work. Let us drive results for
            you.
          </p>
          <p>
            Digital marketing can be a powerful tool for small business when
            used right, but it can also be a minefield. It is easy to blow
            through a budget on ads that reach the wrong people, get ignored or
            simply don't convert. We take the confusion and frustration out of
            online advertising. From TikTok to Google Search, we have expertise
            in ad trafficking across all the main digital advertising platforms.
          </p>
          <p>
            Whether you are a veteran or a first-timer to online advertising, we
            are confident that the Dissentient team can provide value in
            leveraging paid media to drive results. We differ from the typical
            media agency in that we do not run "set and forget" campaigns. We
            have a rigorous, data-driven approach and we will not spend if it
            does not work. We can help businesses of all sizes with optimizing
            their media camapigns to their best potential. Our approach to media
            involves:
          </p>
          <ul>
            <li>
              <strong>Analysis:</strong> we do deep dives into your competition,
              keyword opportunities and audience to understand who it is we are
              trying to reach and with what message.
            </li>
            <li>
              <strong>Assets: </strong> we generate a series of images and copy
              to be used in a variety of testing scenarios.
            </li>
            <li>
              <strong>Planning: </strong> we create a plan for proposed budget,
              advertisers and schedule. We include a period of A/B testing with
              the goal of optimizing towards winning creatives and copy.
            </li>
            <li>
              <strong>Execution: </strong>we will traffic the ads on the
              relevant advertising platforms, ensure tracking and budget limits
              are setup and launch your campaign.
            </li>
            <li>
              <strong>Reporting & Optimization: </strong> we will create a live
              dashboard so you can track results in real time. Once we have
              enough data to determine most effective creative and audience we
              will fine tune as we go along.
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="section-title">
          <a id="analytics">
            <h2>Data & Analytics</h2>
          </a>
          <p>
            From setting up Google and Adobe analytics to helping you streamline
            your data pipeline, we have several data and analytics specific
            services. If there is any publically accessible data you need we can
            get it and deliver it in any format you require. We are happy to
            help with any of your data and analytics problems, the things we
            typically focus on fall into the following categories:
          </p>
          <ul>
            <li>
              <strong>Auditing Websites:</strong> we are happy to quickly
              analyze your website and provide recommendations on gaps related
              to tracking, SEO and content.
            </li>
            <li>
              <strong>Implementation:</strong> we can install Google and Adobe
              analytics, setup goals and custom tracking and help you customize
              your analytics tool to your business' needs.
            </li>
            <li>
              <strong>Web scraping:</strong> do you need some data from
              somewhere? We can get it for you and deliver it in any format you
              require. Need pdfs translated to excel or data from a website in
              csv format? We can help quickly get the data you need.
            </li>
            <li>
              <strong>Moving data:</strong> you need to get data from somewhere,
              trransform it somehow, and deliver it somewhere.
            </li>
            <li>
              <strong>Dashboards:</strong> we can create beautiful
              visualizations based on a variety of datasets and can provide
              online real-time access with permission management.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services

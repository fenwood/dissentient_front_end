import React from 'react'
import './services.css'
import { SiCodesignal } from "react-icons/si";


const Services = () => {
  return (
    <section className="section services-section" id="services">
        <div className="row">
            <div className="section-title">
                <h2>Our Services</h2>
                <p>We are a full service web development and analytics agency, specializing in helping local business get ranked increased business via digital mediums. While our main service is subscription websites, we offer a range of services.</p>
            </div>
        </div>
        <div className="container">
                <div className="feature-box-1">
                    <div className="icon">
                        <SiCodesignal />
                    </div>
                    <div className="feature-content">
                        <h5>Subscription Websites</h5>
                        <p>We design and develop full-stack websites for small businesses, creating stylish, modern websites that include design and development, hosting, analytics and contact forms.</p>
                    </div>
                </div>
                <div className="feature-box-1">
                    <div className="icon">
                        <i className="fa fa-user"></i>
                    </div>
                    <div className="feature-content">
                        <h5>Website Redesigns</h5>
                        <p>We can build your website and let you manage everything else, whether you require a brand new site or a redesign/refresh of your current one.</p>
                    </div>
                </div>
                <div className="feature-box-1">
                    <div className="icon">
                        <i className="fa fa-comment"></i>
                    </div>
                    <div className="feature-content">
                        <h5>Content Management Systems</h5>
                        <p>We specialize in setting up content management systems for businesses that require more control of their content, we specialize in  headless systems like Contentful and Sanity.</p>
                    </div>
                </div>
                <div className="feature-box-1">
                    <div className="icon">
                        <i className="fa fa-comment"></i>
                    </div>
                    <div className="feature-content">
                        <h5>Analytics</h5>
                        <p>We specialize in setting up content management systems for businesses that require more control of their content, we specialize in  headless systems like Contentful and Sanity.</p>
                    </div>
                </div>
                <div className="feature-box-1">
                    <div className="icon">
                        <i className="fa fa-comment"></i>
                    </div>
                    <div className="feature-content">
                        <h5>Digital Marketing</h5>
                        <p>We specialize in setting up content management systems for businesses that require more control of their content, we specialize in  headless systems like Contentful and Sanity.</p>
                    </div>
                </div>
                <div className="feature-box-1">
                    <div className="icon">
                        <i className="fa fa-comment"></i>
                    </div>
                    <div className="feature-content">
                        <h5>Search Engine Optimization</h5>
                        <p>We specialize in setting up content management systems for businesses that require more control of their content, we specialize in  headless systems like Contentful and Sanity.</p>
                    </div>
                </div>


        </div>
    </section>  )
}

export default Services

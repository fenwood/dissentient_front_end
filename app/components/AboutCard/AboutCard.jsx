import React from 'react'
import Faq from '../Faq/Faq'
import './aboutcard.css'

const AboutCard = () => {
    const faqData = [
    {
        title: 'What is with your name?',
        content: `According to the dictionary, Dissentient means in opposition to a majority or official opinion. "dissentient voices were castigated as “hopeless bureaucrats.” While we love the term 'hopeless bureaucrats', it applies to our mindset. We don't chase the latest language or platform, we stick to the basics and focus on what matters instead of going with the most popular trendy option.`
    },
    {
        title: 'Why use us over Wix or goDaddy?',
        content: 'The TLDR is, it depends. There are countless website creating and web hosting platforms, and with a little curiosity and patience just about anyone can create their own website today. If you are creating a simple landing page or save the date website, the do-it-yourself website creaters do just fine. And if you prefer to get your hands dirty and manage your own server using godaddy or another host, you can certainly save money doing it that way. Our value proposition is expertise in building websites that rank and achieve results, we build custom dependency-free websites, assist with content and image generation, and handle the domain and hosting management for you while you can focus on your business.'
    },
    {
        title: 'What is your pricing?',
        content: 'We start at $50 per month, which includes a 5-page static website, hosting and domain management and that includes unlimited (within reason) updates to the website. All our websites come with Google Analytics, a contact form and 24/7 support. Other plans are $150 and $300, see services page for more details.'
    },
    {
        title: 'How does the subscription website service work?',
        content: 'We charge you a monthly fee that includes full management of your website, we can either update the website for you or provide a content management system to allow you to update the website on your own. We can purchase the domain on your behalf or point your current servers to our content distrubution network and let us handle the rest.'
    },
    {
        title: 'Can you create content and images?',
        content: 'Yes, all of our websites include content and images, if you have your own that is even better!'
    },
]

  return (
<>
<section className="about-us" id="about">

    <div className="about-section">
        <h2>Dissentient Digital</h2>
        <h3>World class design for local businesses.</h3>
    </div>

    <div className="section-title">
        <h1>About Dissentient Digital</h1>
        <p>We are a full service web development agency that focuses on helping small and medium businesses compete on a global scale. Our deep experience in analytics, digital media, crm and modern website creation.</p>
        <p>We are from the era of letter to the better and have been building websites since then, and have been along for the entire ride, from hard coding javascript and css within HTML files to where we are now with AI generated websites and content.  </p>
        <p>Whether you have no idea what you want in a website or you have detailed branding guidelines in place we can work with you.</p>
    </div>
    <div className="section-title">
        <h2>Who we are</h2>
        <p>Dissentient Digital was founded by a small team of passionate developers and technologists with a mission to help small businesses succeed online. Our team have deep backgrounds from both client and agency site in building websites for large corporations, running multi-million dollar ad campaigns and building complex data solutions for businesses of all sizes. We decided to leverage our experience and expertise to be able to empower small businesses to gain an edge over their competition.</p>
    </div>
    <div className="section-title">
        <h2>What we do</h2>
        <p>Our focus is on three main areas. First, we build websites. We offer a full-service subscription based service that includes website design, hosting, domain management, monthly updates and assistance with content and image generation. Our plans start at $50 a month with no commitment. We can also do one-off builds, mobile apps, and e-commerce websites.</p>
        <p>Second, we specialize in end-to-end analytics. What does that mean? A few things:</p>
        <ul>
            <li><strong>Digital analytics</strong>: setting up Google/Adobe Analytics or tag manager, website audit, setting up dashboards and anything to do with measuring website behavior or media campaigns.</li>
            <li><strong>Data management</strong>: we can build out custom data marts, ETL pipelines, create api endpoints, setup Google Big Query and database optimization.</li>
            <li><strong>Web scraping / data extraction</strong>: we can pull data from anywhere and provide it to you in any format, assist with data clean up and fuzzy matching.</li>
        </ul>
        <p>Finally, we offer full service digital marketing. We are a data driven shop with years of experience optimizing paid media campaigns. We first understand your audience and find the right platform, creative and messaging to create campaigns to meet your budget. From paid search like Google and Bing to social platforms like Facebook and TikTok, we can get you up can running in no time.</p>
    </div>
    <div className="section-title">
        <h2>Why we do it</h2>
        <p>After working on creating digital experiences and media campaigns for media agencies and large corporations, we all came to the realization that having an impact becomes more challenging the larger the organization is. Our lightbulb moment came while working with friends and colleagues that were getting started with their own businesses and being able to help them start and grow their digital footprints, we realized we have all this knowledge and skills we take for granted and people without a technical background often get frustrated or intimidated by the process.</p>
        <p>So we do it to have an impact, and we can help you move faster than your competition and reach your business goals.</p>
    </div>
    <div className="section-title">
        <h2>Why choose us?</h2>
        <p>For many people, building a website is one of the first things you do, and once you get that out of the way the website tends to be forgotten. This is not the movies, just because you build it does not mean they will come. This is where we add value. Creating a website is the last step in our process.</p>
        <p>All our websites will focus on what matters most, to you and to the search engines. You can have the greatest website and offering but if nobody can find your website then what good is it? All of our sites will have a strong focus on content, accessiblity, performance and most importantly, your business goals.</p>
        <p>Our process starts with a full analysis of your competition to look for opportunities for your website to stand out. We then conduct keyword research to find the best opportunities for you to rank quickly on the search results page and develop a content strategy that will ensure your website is SEO friendly and content build around where people are searching.</p>
    </div>
    <div className="section-title">
    <h2>But anyone can build a website</h2>
        <p>We live in an era where chat GPT can build you a website with a few commands, not to mention the countless free and paid website generators out there. If you need a save the date or quick landing page to announce something these are great for basic websites that do not require gaining organic search traffic. But these are not serious options for a business, as the website generators tend to create heavy, bloated websites that are not friendly to the search engines.</p>
        <p>Building a basic website is easy, but once you require additional functionality such as a contact form or saving something in a database then you need a server and database, which is usually beyond the scope of the Wix's of the world. Or if you want to track visitors to your website, you need to setup analytics. </p>
        <p>Our websites are build from the ground up with only the essentials and no bloatware. All our websites are highly performant, fully accessible, includes analytics, contact forms, hosting and content management system where applicable, so you can focus on your business.</p>
    </div>
    <div className="section-title">
        <h2>Frequently Asked Questions</h2>
        {faqData.map(({title, content}) => (
            <Faq title={title} content={content} />
        ))}
        {/* <Faq faqData={faqData} /> */}
    </div>

      
</section>
</>
)
}

export default AboutCard

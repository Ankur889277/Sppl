import React from 'react';
import "./style.css";

const servicesData = [
  { id: 1, title: "Web Development", description: "We create modern and responsive web applications tailored to your needs." },
  { id: 2, title: "UI/UX Design", description: "Crafting intuitive and visually appealing user experiences for your products." },
  { id: 3, title: "SEO Optimization", description: "Improving your website's ranking on search engines to drive more traffic." },
  { id: 4, title: "Mobile App Development", description: "Building high-performance mobile applications for Android and iOS." },
  { id: 5, title: "Cloud Services", description: "Providing scalable cloud computing solutions for businesses." },
  { id: 6, title: "Cybersecurity", description: "Protecting your data and infrastructure from online threats." },
  { id: 7, title: "Tech Consulting", description: "Expert guidance to help you navigate the ever-evolving tech landscape." }
];

const Index = () => {
  return (
    <div className='services-wrapper'>
      <h1 className="section-title">Services We Offer</h1>

      <div className='card-container'>
        {servicesData.map((service, index) => (
          <div 
            className={`card-body ${index === servicesData.length - 1 ? "last-card" : ""}`} 
            key={service.id}
          >
            <div className='card'>
              <h1 className='card-title'>{service.title}</h1>
              <p className='card-text'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;

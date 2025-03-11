import React from 'react';
import "./style.css";

const servicesData = [
  { id: 1, title: "Survey", description: "Lorem ipsum dolor sit amet consectetur. Maecenas tempor adipiscing mollis blandit. Lacus aenean volutpat massa posuere sed dolor sed ultrices nullam. Adipiscing sed consectetur ac nibh vitae habitant enim." },
  { id: 2, title: "GIS Mapping", description: "Lorem ipsum dolor sit amet consectetur. Maecenas tempor adipiscing mollis blandit. Lacus aenean volutpat massa posuere sed dolor sed ultrices nullam. Adipiscing." },
  { id: 3, title: "Mineral Exploration", description: "Lorem ipsum dolor sit amet consectetur. Maecenas tempor adipiscing mollis blandit. Lacus aenean volutpat massa posuere sed dolor sed ultrices nullam. Adipiscing." },
  { id: 4, title: "Mine Plan", description: "Lorem ipsum dolor sit amet consectetur. Maecenas tempor adipiscing mollis blandit. Lacus aenean volutpat massa posuere sed dolor sed ultrices nullam. Adipiscing sed consectetur ac nibh vitae habitant enim." },
  { id: 5, title: "EIA-EMP", description: "Lorem ipsum dolor sit amet consectetur. Maecenas tempor adipiscing mollis blandit. Lacus aenean volutpat massa posuere sed dolor sed ultrices nullam. Adipiscing." },
  { id: 6, title: "Environmental Laboratory", description: "Lorem ipsum dolor sit amet consectetur. Maecenas tempor adipiscing mollis blandit. Lacus aenean volutpat massa posuere sed dolor sed ultrices nullam. Adipiscing." },
  { id: 7, title: "Software development", description: "Lorem ipsum dolor sit amet consectetur. Maecenas tempor adipiscing mollis blandit. Lacus aenean volutpat massa posuere sed dolor sed ultrices nullam. Adipiscing sed consectetur ac nibh vitae habitant enim." }
];

const Index = () => {
  return (
    <div className='services-wrapper'>
      <span className="services-section-title">Services We Offer</span>

      <div className='services-card-container'>
        {servicesData.map((data, index)=>(
          <div className="services-cards" key={index}>
            <div className="services-card-title">{data.title}</div>
            <div className="services-card-description">{data.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;

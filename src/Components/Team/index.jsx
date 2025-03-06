import React from 'react';
import "./style.css";

const TeamIntro = () => {
  const teamMembers = [
    { name: "Brendon M", role: "General Manager", image: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Sophia L", role: "Project Manager", image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "James K", role: "Lead Developer", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Emily R", role: "UI/UX Designer", image: "https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
  ];

  return (
    <div className="team-intro-wrapper">
      <div className='team-intro'>
        <h3 style={{ color: "#4361EE", textTransform: "uppercase" ,textAlign: "center"}}>Introduce Yourself To</h3>
        <h1>Our Team of Experts</h1>
      </div>
      <div className='team-cards' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'nowrap' }}>
        {teamMembers.map((member, index) => (
          <div className='team-card' key={index} style={{ textAlign: 'center' }}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <h5>{member.role}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamIntro;
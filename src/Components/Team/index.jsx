// import React, {useRef} from 'react';
// import "./style.css";

// const TeamIntro = () => {

//   const teamCarouselRef = useRef(null);

//   const scrollLeft = () => {
//     let box = document.querySelector('.team-carousel');
//     console.dir(box);
//     box.scrollLeft = box.scrollLeft - 600;
//   };

//   const scrollRight = () => {
//     let box = document.querySelector('.team-carousel');
//     console.dir(box);
//     box.scrollLeft = box.scrollLeft + 600;
//   };

//   const teamMembers = [
//     { name: "Brendon M", role: "General Manager", image: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//     { name: "Sophia L", role: "Operation Manager", image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//     { name: "James K", role: "Analyst", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//     { name: "Emily R", role: "Marketing Head", image: "https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//     { name: "Michael T", role: "Finance Manager", image: "https://images.pexels.com/photos/3779761/pexels-photo-3779761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//     { name: "Jessica H", role: "HR Manager", image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//     { name: "Daniel W", role: "Product Designer", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//     { name: "Olivia N", role: "Lead Developer", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
//   ];

//   return (
//     <div className="team-intro-wrapper">
//       <div className='team-intro-headings'>
//         <span className='team-intro-heading1'>INTRODUCE YOURSELF TO</span>
//         <span className='team-intro-heading2'>Our Team of Experts</span>
//       </div>
//       <div className='team-carousel'>
//         {teamMembers.map((member, index) => (
//           <div className='team-cards' key={index} style={{ textAlign: 'center' }}>
//             <img className='team-cards-img' src={member.image} alt={member.name} />
//             <span className='team-cards-name'>{member.name}</span>
//             <span className='team-cards-role'>{member.role}</span>
//           </div>
//         ))}
//       </div>
//       <div className="team-crousel-button">
//       <button className="team-btn team-carousel-button-left" onClick={scrollLeft}>&#10094;</button>
//       <button className="team-btn team-carousel-button-right" onClick={scrollRight}>&#10095;</button>
//       </div>
//     </div>
//   );
// };

// export default TeamIntro;



// import React, { useRef, useEffect } from 'react';
// import "./style.css";

// const TeamIntro = () => {
//   const teamCarouselRef = useRef(null);

//   const scrollLeft = () => {
//     if (teamCarouselRef.current) {
//       if (teamCarouselRef.current.scrollLeft === 0) {
//         teamCarouselRef.current.scrollLeft = teamCarouselRef.current.scrollWidth / 2;
//       }
//       teamCarouselRef.current.scrollBy({ left: -600, behavior: 'smooth' });
//     }
//   };

//   const scrollRight = () => {
//     if (teamCarouselRef.current) {
//       if (teamCarouselRef.current.scrollLeft + teamCarouselRef.current.clientWidth >= teamCarouselRef.current.scrollWidth) {
//         teamCarouselRef.current.scrollLeft = teamCarouselRef.current.scrollWidth / 2 - teamCarouselRef.current.clientWidth;
//       }
//       teamCarouselRef.current.scrollBy({ left: 600, behavior: 'smooth' });
//     }
//   };

//   const teamMembers = [
//     { name: "Brendon M", role: "General Manager", image: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//     { name: "Sophia L", role: "Operation Manager", image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//     { name: "James K", role: "Analyst", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//     { name: "Emily R", role: "Marketing Head", image: "https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//     { name: "Michael T", role: "Finance Manager", image: "https://images.pexels.com/photos/3779761/pexels-photo-3779761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//     { name: "Jessica H", role: "HR Manager", image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//     { name: "Daniel W", role: "Product Designer", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
//     { name: "Olivia N", role: "Lead Developer", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
//   ];

//   const duplicatedTeamMembers = [...teamMembers, ...teamMembers];

//   useEffect(() => {
//     if (teamCarouselRef.current) {
//       teamCarouselRef.current.scrollLeft = teamCarouselRef.current.scrollWidth / 4;
//     }
//   }, []);

//   return (
//     <div className="team-intro-wrapper">
//       <div className='team-intro-headings'>
//         <span className='team-intro-heading1'>INTRODUCE YOURSELF TO</span>
//         <span className='team-intro-heading2'>Our Team of Experts</span>
//       </div>
//       <div className='team-carousel' ref={teamCarouselRef}>
//         {duplicatedTeamMembers.map((member, index) => (
//           <div className='team-cards' key={index}>
//             <img className='team-cards-img' src={member.image} alt={member.name} />
//             <span className='team-cards-name'>{member.name}</span>
//             <span className='team-cards-role'>{member.role}</span>
//           </div>
//         ))}
//       </div>
//       <div className="team-crousel-button">
//         <button className="team-btn team-carousel-button-left" onClick={scrollLeft}>&#10094;</button>
//         <button className="team-btn team-carousel-button-right" onClick={scrollRight}>&#10095;</button>
//       </div>
//     </div>
//   );
// };

// export default TeamIntro;



import React, { useRef, useEffect } from 'react';
import "./style.css";

const TeamIntro = () => {
  const teamCarouselRef = useRef(null);

  const scrollLeft = () => {
    if (teamCarouselRef.current) {
      teamCarouselRef.current.scrollBy({ left: -600, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (teamCarouselRef.current) {
      teamCarouselRef.current.scrollBy({ left: 600, behavior: 'smooth' });
    }
  };

  const teamMembers = [
    { name: "Brendon M", role: "General Manager", image: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Sophia L", role: "Operation Manager", image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "James K", role: "Analyst", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Emily R", role: "Marketing Head", image: "https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Michael T", role: "Finance Manager", image: "https://images.pexels.com/photos/3779761/pexels-photo-3779761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Jessica H", role: "HR Manager", image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Daniel W", role: "Product Designer", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Olivia N", role: "Lead Developer", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
  ];

  return (
    <div className="team-intro-wrapper">
      <div className='team-intro-headings'>
        <span className='team-intro-heading1'>INTRODUCE YOURSELF TO</span>
        <span className='team-intro-heading2'>Our Team of Experts</span>
      </div>
      <div className='team-carousel' ref={teamCarouselRef} style={{ scrollBehavior: 'smooth' }}>
        {teamMembers.map((member, index) => (
          <div className='team-cards' key={index}>
            <img className='team-cards-img' src={member.image} alt={member.name} />
            <span className='team-cards-name'>{member.name}</span>
            <span className='team-cards-role'>{member.role}</span>
          </div>
        ))}
      </div>
      <div className="team-crousel-button">
        <button className="team-btn team-carousel-button-left" onClick={scrollLeft}>&#10094;</button>
        <button className="team-btn team-carousel-button-right" onClick={scrollRight}>&#10095;</button>
      </div>
    </div>
  );
};

export default TeamIntro;

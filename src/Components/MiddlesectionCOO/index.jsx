import React, { useEffect, useState } from "react";
import "./style.css";
import Ceo_Photo from "../../assets/svg/CEO's_photo.png";

const Index = () => {
  const leaders = [
    {
      name: "Biswajit Bardhan",
      role: "CEO",
      speech:
        "Lorem ipsum dolor sit amet consectetur. Maecenas tempor adipiscing mollis blandit. Lacus aenean volutpat massa posuere sed dolor sed ultrices nullam. Adipiscing sed consectetur ac nibh vitae habitant enim. Amet in amet ut sed aliquam tortor consequat sapien feugiat.",
      image: Ceo_Photo,
    },
    {
      name: "XYZ ABC",
      role: "Employee1",
      speech:
        "The old typewriter sat in the corner of the dusty attic, its keys frozen in time. No one had touched it in years, yet somehow, the ink ribbon still carried faint traces of past stories. As the afternoon sun filtered through the cracked window, a breeze rustled the yellowed pages beside it.",
      image:
        "https://images.pexels.com/photos/8353832/pexels-photo-8353832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "GHI KLO",
      role: "Employee2",
      speech:
      "Lorem ipsum dolor sit amet consectetur. Maecenas tempor adipiscing mollis blandit. Lacus aenean volutpat massa posuere sed dolor sed ultrices nullam. Adipiscing sed consectetur ac nibh vitae habitant enim. Amet in amet ut sed aliquam tortor consequat sapien feugiat.",
      image:
      "https://images.pexels.com/photos/8353841/pexels-photo-8353841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "NKN KUH",
      role: "Employee3",
      speech:
        "Sarah hesitated before pressing a key. With a sharp click, the machine responded, almost eagerly. A single letter appeared on the page: Then, before she could react, the typewriter continued on its own.",
      image:
        "https://images.pexels.com/photos/7654586/pexels-photo-7654586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "GHI KLO",
      role: "Employee4",
      speech:
        "The neon sign outside flickered, struggling to stay alive in the midnight rain. Inside the diner, a lone customer stirred his coffee, watching the reflections of passing headlights smear across the window. The jukebox crackled before settling on a song no one had requested.",
      image:
        "https://images.pexels.com/photos/8353832/pexels-photo-8353832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "NKN KUH",
      role: "Employee5",
      speech:
        "Deep in the forest, where no roads lead, there is a library with no doors. Its shelves stretch endlessly, filled with books no one remembers writing. Some say they contain stories from lost dreams, others believe they hold secrets the world was meant to forget.",
      image:
        "https://images.pexels.com/photos/7654586/pexels-photo-7654586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % leaders.length);
    }, 1500); // Auto-scroll every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="MiddleSection-wrapper">
      {/* Slides */}
      {leaders.map((data, index) => (
        <div
          key={index}
          className="MiddleSection-content"
          style={{
            display: activeIndex === index ? "flex" : "none", // Show only the active slide
          }}
        >
          <div className="Middle-section-left">
            <span className="Middle-section-name">{data.name}</span>
            <span className="Middle-section-role">{data.role}</span>
            <p className="MiddleSection-p">{data.speech}</p>
          </div>

          <div className="Middle-section-right">
            <div className="Middle-section-circle">
              <div className="Middle-section-container-img">
                <img className="Middle-section-img" src={data.image} alt={data.name} />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicator Dots */}
      <div className="MiddleSection-carousel-indicators">
        {leaders.map((_, index) => (
          <div
            key={index}
            className="MiddleSection-indicator"
            style={{
              borderRadius: "50%",
              backgroundColor: activeIndex === index ? "#EE5C23" : "#98A6B1",
              transition: "background-color 0.3s ease",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Index;

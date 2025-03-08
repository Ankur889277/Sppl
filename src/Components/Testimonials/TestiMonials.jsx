import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaStar } from "react-icons/fa";
import "./TestiMonials.css";

const testimonials = [
  {
    id: 1,
    name: "Barbara D. Smith",
    avatar:
      "https://images.pexels.com/photos/8864285/pexels-photo-8864285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!",
    rating: 4,
  },
  {
    id: 2,
    name: "Michael R. Johnson",
    avatar:
      "https://images.pexels.com/photos/5014213/pexels-photo-5014213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "The team went above and beyond to ensure our satisfaction. Their expertise and dedication made the entire process smooth and stress-free.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah L. Williams",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "Exceptional service from start to finish. They listened to our requirements and found exactly what we were looking for within our budget.",
    rating: 5,
  },
];

export default function TestiMonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-circle1"></div>
      <div className="testimonial-content">
        <div className="testimonial-text">
          <h3 className="testimonial-heading" style={{ margin: "0" }}>
            TESTIMONIALS
          </h3>
          <span
            className="testimonial-title"
            style={{ margin: "0", padding: "0" }}
          >
            Look What Our Customers Say!
          </span>
          <p className="testimonial-description">
            Fusce venenatis tellus a felis scelerisque, non pulvinar est
            pellentesque.
          </p>
          <div className="testimonial-buttons">
            <button className="nav-button" onClick={handlePrevious}>
              <ChevronLeft size={24} />
            </button>
            <button className="nav-button" onClick={handleNext}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="testimonial-card-container">
          <div className="testimonial-card">
            <div className="quote-icon">&ldquo;</div>
            <div className="card-content">
              <p className="testimonial-text-content">
                {testimonials[activeIndex].text}
              </p>
            </div>
            <span className="testimonial-dvider-line"></span>
            <div className="testimonial-user">
              <img
                src={testimonials[activeIndex].avatar}
                alt={testimonials[activeIndex].name}
                className="avatar"
              />
              {/* <div> */}
              <div className="testimonial-name">
                {testimonials[activeIndex].name}
              </div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) =>
                  i < testimonials[activeIndex].rating ? (
                    <FaStar key={i} className="star" />
                  ) : (
                    <FaStar key={i} className="star empty" />
                  )
                )}
              </div>
              {/* </div> */}
            </div>
          </div>

          <div className="indicator-container">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`indicator ${
                  i === activeIndex ? "active" : "inactive"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

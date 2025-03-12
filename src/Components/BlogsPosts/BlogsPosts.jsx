import React, { useRef, useEffect, useState } from 'react'
import './BlogsPosts.css';
import { FaArrowRightLong } from "react-icons/fa6";

const BlogsPosts = () => {

    const containerRef = useRef(null);
    const [scrolling, setScrolling] = useState(true);
    const scrollSpeed = 2;
    let scrollInterval = useRef(null);


    const startScrolling = () => {
        if (!containerRef.current) return;
        scrollInterval.current = setInterval(() => {
            containerRef.current.scrollLeft += scrollSpeed;
            if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth - containerRef.current.clientWidth) {
                containerRef.current.scrollLeft = 0; // Seamless restart
            }
        }, 30);
    };
    
      // Function to stop scrolling
      const stopScrolling = () => {
        if (scrollInterval.current) {
            clearInterval(scrollInterval.current);
            scrollInterval.current = null;
        }
      };
    
      useEffect(() => {
        if (scrolling) {
          startScrolling();
        } else {
          stopScrolling();
        }
    
        return () => stopScrolling(); // Cleanup on unmount
      }, [scrolling]);
        

    const blogsPosts = [
        { tagline: "The Importance of Forest Clearances in Sustainable Development", subTagline: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum", image: "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", date: 28, weekday: "Tue" },
        { tagline: "The Future of Surveying: How Drones are Transforming Mapping and Surveillance", subTagline: "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.", image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", date: 8, weekday: "Mon" },
        { tagline: "Core Drilling and Mineral Exploration: Techniques and Applications", subTagline: "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.", image: "https://images.pexels.com/photos/16862261/pexels-photo-16862261/free-photo-of-oil-well-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", date: 26, weekday: "Wed" },
        { tagline: "Understanding Soil Testing: Key to Sustainable Agriculture", subTagline: "Suspendisse potenti. Mauris eget turpis in ligula sagittis placerat.", image: "https://images.pexels.com/photos/18697894/pexels-photo-18697894/free-photo-of-chemist-pouring-liquid-to-soil-in-flask.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", date: 12, weekday: "Thu" },
        { tagline: "Geospatial Technology in Modern Urban Planning", subTagline: "Fusce nec felis id libero tincidunt posuere sed in lectus.", image: "https://images.pexels.com/photos/24245274/pexels-photo-24245274/free-photo-of-man-with-measurement-device-by-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", date: 19, weekday: "Fri" },
        { tagline: "The Role of Artificial Intelligence in Geological Surveys", subTagline: "Aliquam erat volutpat. Curabitur vel orci condimentum, pharetra ligula sit amet.", image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", date: 5, weekday: "Sat" },
        { tagline: "Water Resource Management: Strategies for a Sustainable Future", subTagline: "Praesent ac massa at ligula laoreet iaculis eget ac sapien.", image: "https://images.pexels.com/photos/17971722/pexels-photo-17971722/free-photo-of-coal-mines-in-dhanbad-jharkhand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", date: 21, weekday: "Sun" },
        { tagline: "Remote Sensing in Environmental Monitoring", subTagline: "Vestibulum in mi a ligula vestibulum efficitur at et lorem.", image: "https://images.pexels.com/photos/23781/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", date: 14, weekday: "Tue" },
    ];

    const handleCardBtnClicked = (index)=> {
        window.alert(`Clicked - card no.-${index}`);
    };
        

  return (
    <div className='bP-main-div'>
        <div className="bP-heading">Latest Blogs & Posts</div>
        <div className="bP-carousel" ref={containerRef} onMouseEnter={() => setScrolling(false)} onMouseLeave={() => setScrolling(true)}>
            {blogsPosts.map((data,index)=>(
                <div className="bP-carousel-cards" key={index}>
                    <div className="bP-carousel-date-show">
                        <span className="bP-carousel-date">{data.date}</span>
                        <span className="bP-carousel-weekday">{data.weekday}</span>
                    </div>
                    <img className="bP-carousel-cards-img" src={data.image} alt="#" />
                    <div className="bP-carousel-cards-tagline">{data.tagline}</div>
                    <div className="bP-carousel-cards-subTagline">{data.subTagline}</div>
                    <div className="bP-cards-button-section">
                        <button className='bP-cards-buttons' onClick={()=>handleCardBtnClicked(index)}><FaArrowRightLong style={{color:"#3A0CA3", fontSize:"22px"}}/></button>
                    </div>
                </div>
            ))}
        </div>
        <div className="bP-carousel-indicator"></div>
    </div>
  )
}

export default BlogsPosts



// import React, { useRef, useEffect, useState } from 'react';
// import './BlogsPosts.css';
// import { FaArrowRightLong } from "react-icons/fa6";

// const BlogsPosts = () => {
//     const containerRef = useRef(null);
//     const scrollInterval = useRef(null);
//     const [scrolling, setScrolling] = useState(true);
//     const scrollSpeed = 2;

//     const blogsPosts = [
//         { tagline: "The Importance of Forest Clearances in Sustainable Development", subTagline: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum", image: "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg", date: 28, weekday: "Tue" },
//         { tagline: "The Future of Surveying: How Drones are Transforming Mapping and Surveillance", subTagline: "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.", image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg", date: 8, weekday: "Mon" },
//         { tagline: "Core Drilling and Mineral Exploration: Techniques and Applications", subTagline: "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.", image: "https://images.pexels.com/photos/16862261/pexels-photo-16862261.jpeg", date: 26, weekday: "Wed" },
//         { tagline: "Understanding Soil Testing: Key to Sustainable Agriculture", subTagline: "Suspendisse potenti. Mauris eget turpis in ligula sagittis placerat.", image: "https://images.pexels.com/photos/18697894/pexels-photo-18697894.jpeg", date: 12, weekday: "Thu" },
//         { tagline: "Geospatial Technology in Modern Urban Planning", subTagline: "Fusce nec felis id libero tincidunt posuere sed in lectus.", image: "https://images.pexels.com/photos/24245274/pexels-photo-24245274.jpeg", date: 19, weekday: "Fri" },
//         { tagline: "The Role of Artificial Intelligence in Geological Surveys", subTagline: "Aliquam erat volutpat. Curabitur vel orci condimentum, pharetra ligula sit amet.", image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg", date: 5, weekday: "Sat" },
//         { tagline: "Water Resource Management: Strategies for a Sustainable Future", subTagline: "Praesent ac massa at ligula laoreet iaculis eget ac sapien.", image: "https://images.pexels.com/photos/17971722/pexels-photo-17971722.jpeg", date: 21, weekday: "Sun" },
//         { tagline: "Remote Sensing in Environmental Monitoring", subTagline: "Vestibulum in mi a ligula vestibulum efficitur at et lorem.", image: "https://images.pexels.com/photos/23781/pexels-photo.jpg", date: 14, weekday: "Tue" },
//     ];

//     const startScrolling = () => {
//         if (!containerRef.current) return;
//         scrollInterval.current = setInterval(() => {
//             containerRef.current.scrollLeft += scrollSpeed;
//             if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth - containerRef.current.clientWidth) {
//                 containerRef.current.scrollLeft = 0; // Seamless restart
//             }
//         }, 30);
//     };

//     const stopScrolling = () => {
//         if (scrollInterval.current) {
//             clearInterval(scrollInterval.current);
//             scrollInterval.current = null;
//         }
//     };

//     useEffect(() => {
//         if (scrolling) {
//             startScrolling();
//         } else {
//             stopScrolling();
//         }
//         return () => stopScrolling(); // Cleanup on unmount
//     }, [scrolling]);

//     const handleCardBtnClicked = (index) => {
//         alert(`Clicked - card no.-${index}`);
//     };

//     return (
//         <div className='bP-main-div'>
//             <div className="bP-heading">Latest Blogs & Posts</div>
//             <div 
//                 className="bP-carousel" 
//                 ref={containerRef} 
//                 onMouseEnter={() => setScrolling(false)} 
//                 onMouseLeave={() => setScrolling(true)}
//             >
//                 {blogsPosts.map((data, index) => (
//                     <div className="bP-carousel-cards" key={index}>
//                         <div className="bP-carousel-date-show">
//                             <span className="bP-carousel-date">{data.date}</span>
//                             <span className="bP-carousel-weekday">{data.weekday}</span>
//                         </div>
//                         <img className="bP-carousel-cards-img" src={data.image} alt={data.tagline} />
//                         <div className="bP-carousel-cards-tagline">{data.tagline}</div>
//                         <div className="bP-carousel-cards-subTagline">{data.subTagline}</div>
//                         <div className="bP-cards-button-section">
//                             <button 
//                                 className='bP-cards-buttons' 
//                                 onClick={() => handleCardBtnClicked(index)}
//                                 title={`Read more about ${data.tagline}`}
//                             >
//                                 <FaArrowRightLong style={{ color: "#3A0CA3", fontSize: "22px" }} />
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default BlogsPosts;

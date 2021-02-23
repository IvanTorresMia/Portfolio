import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const TimelineItem = ({ Experience }) => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className="timeline-item"  data-aos="zoom-in-up">
      <div className="timeline-item-content">
        <div data-aos="fade-up">
          <h3>{Experience.date}</h3>
          <h4>{Experience.title}</h4>
          <p>{Experience.place}</p>
          <p>{Experience.description}</p>
        </div>
 
        <span className="circle"></span>
      </div>
    </div>
  );
};

export default TimelineItem;

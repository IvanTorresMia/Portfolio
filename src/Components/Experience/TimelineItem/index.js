import React from "react";

const TimelineItem = ({ Experience }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <h3>{Experience.title}</h3>
        <time>{Experience.date}</time>
        <p>{Experience.place}</p>
        <p>{Experience.description}</p>
        <span className="circle"></span>
      </div>
    </div>
  );
};

export default TimelineItem;

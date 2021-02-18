import React from "react";

const TimelineItem = ({ Experience }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <h3>{Experience.date}</h3>
        <h4>{Experience.title}</h4>
        <p>{Experience.place}</p>
        <p>{Experience.description}</p>
        <span className="circle"></span>
      </div>
    </div>
  );
};

export default TimelineItem;

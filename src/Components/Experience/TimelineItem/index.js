import React from 'react'

const TimelineItem = ({ Experience }) => {
    <div className="timeline-item">
        <div className="timeline-item-content">
            <h3>{Experience.title}</h3>
            <time>{Experience.date}</time>
            <p>{Experience.date}</p>
            <p>{Experience.place}</p>
            <p>{Experience.description}</p>

        </div>
        <span className="circle"></span>
    </div>
}


export default TimelineItem;
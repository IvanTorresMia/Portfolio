import React from 'react'
import Experience from '../../../utils/experience'
import TimelineItem from '../TimelineItem'


const Timeline = () => Experience.length > 0 && (
    <div className="timeline-container">
        {Experience.map((data, i) => (
            <TimelineItem Experience={data} key={i}/>
        ))}
    </div>
)

   

export default Timeline;
import React from 'react'
import Experience from '../../../utils/experience'
import TimelineItem from '../TimelineItem'


const Timeline = () => Experience.length > 0 && (
    <div className="timeline-wraper">
        <h1>Experience</h1>
        <div className="timeline-wraper">
        {Experience.map((data, i) => (
            <TimelineItem Experience={data} key={i}/>
        ))}
        </div>
    </div>
)

   

export default Timeline;
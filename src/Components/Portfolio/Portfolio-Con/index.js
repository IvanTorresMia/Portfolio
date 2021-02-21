import React from 'react';
import PortfolioItem from '../Portfolio-Item'
import Projects from '../../../utils/Projects.js'

const Portfolio = () => {

    return (
        <div className="portfolio-wraper">
            <h1>Portfolio</h1>
            {Projects.map((project, i) => (
                <div className="row">
                <PortfolioItem Projects={project} key={i}/>
                </div>
            ))}
        </div>
    )
}

export default Portfolio;
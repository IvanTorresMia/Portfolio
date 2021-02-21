import React from "react";
import PortfolioItem from "../Portfolio-Item";
import Projects from "../../../utils/Projects.js";

const Portfolio = () => {
  return (
    <div className="portfolio-wraper">
        <h1>Portfolio</h1>
        <div className="row card-group card-wraper">
          {Projects.map((project, i) => (
            <PortfolioItem Projects={project} key={i} />
          ))}
        </div>
    </div>
  );
};

export default Portfolio;

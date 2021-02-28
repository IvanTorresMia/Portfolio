import React from "react";
import PortfolioItem from "../Portfolio-Item";
import Projects from "../../../utils/Projects.js";

const Portfolio = () => {


  return (
    <div className="portfolio-wraper" id="Portfolio">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="container">
        <div className="row card-group card-wraper">
          {Projects.map((project, i) => (
            <PortfolioItem Projects={project} key={i}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

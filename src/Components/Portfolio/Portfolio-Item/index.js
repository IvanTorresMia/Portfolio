import React from 'react';

const PortfolioItem = ({ Projects }) => {

    return (
        <div className="col-sm-4 project-card" style={{backgroundImage: `url(${Projects.img})`}}>
            <div className="card-hover">
                <h3>{Projects.name}</h3>
            </div>
        </div>
    )
}

export default PortfolioItem;
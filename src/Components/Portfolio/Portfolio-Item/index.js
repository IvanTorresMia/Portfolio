import React from 'react';

const PortfolioItem = ({ Projects }) => {

    return (
        <div className="col-sm-4">
            <h3>{Projects.name}</h3>
            <img src={Projects.img} alt={Projects.name} style={{width: "14rem", height: "9rem"}}/>
        </div>
    )
}

export default PortfolioItem;
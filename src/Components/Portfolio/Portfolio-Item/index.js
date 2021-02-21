import React from 'react';

const PortfolioItem = ({ Projects }) => {

    return (
        <div className="col">
            <h3>{Projects.name}</h3>
        </div>
    )
}

export default PortfolioItem;
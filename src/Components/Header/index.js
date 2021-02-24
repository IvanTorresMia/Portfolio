import React from 'react'
import Typed from 'react-typed'

const Header = () => {

    return (
        <div className="header-wraper" id="Home">
            <div className="main-info">
                <h1>Developer</h1>
                <Typed
                className="typed-text"
                strings={["Full Stack MERN", "Web Developement", "Software Engineer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header;

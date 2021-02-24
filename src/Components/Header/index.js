import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-scroll'

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
             
                <Link
                className="btn-main-offer"
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
              >
                {" "}
                Contact Me
              </Link>
            </div>
        </div>
    )
}

export default Header;

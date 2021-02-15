import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../../profile.jpg";

const AboutMe = () => {
  return (
    <div className="jumbotron about-me">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>About Me</h1>
            <p className="lead">Let's change the world through Tech</p>
            <hr />
            <p className="about-me-text">
              Recent Coding Bootcamp Graduate with a ceritficate from UC
              Berkeley Full Stack program. I have develped multiple fullstack
              applications from the ground up Using technologies like React Js,
              jQuery, HTML, CSS, ES6 JavaScript, My Sql, Mongo DB, Axios, Ajax
              and many more.
              <br />
              <br />
              As a new develper I am excited to dive into this industry and
              ready to learn and make an inpact in any enviroment. I 3+ years of
              exprirence in the Auto Mechanic Industry and took many online
              courses prior to the bootcamp, like Code Academy, and Treehouse.
            </p>
            <p className="about-me-text">
              Since being a kid I have been interested and excited by the
              engineering industry. A fun fact is that I used to take apart some
              computers around my house just to know what's inside and hopefully
              find out how it all worked. I eventually got to get some
              expirience fixing laptops and computers for friends and family.
            </p>
            <br />
          </div>
          <div className="col imgCon">
            <img
              className="rounded profile-picture"
              alt="Ivan"
              src={ProfilePic}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

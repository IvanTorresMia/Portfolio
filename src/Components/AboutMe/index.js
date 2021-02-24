import React from "react";
import ProfilePic from "../../profile.jpg";
import githubLogo from "../../skillLogos/githubLogo.png"
import CVLogo from "../../Contact-Folder/cv.png"

const AboutMe = () => {
  return (
    <div className="about-me" id="About-Me">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="aboutMe-title">About Me</h1>
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
            <a href="https://github.com/IvanTorresMia" target="_blank" rel="noreferrer">
              <img
                className="img-thumbnail m-2"
                src={githubLogo}
                alt="GitHub Icon"
              />
            </a>
            <a
              href="https://docs.google.com/document/d/1maNpkxa5KXVrUPQFLhxNPJLqK-fk-TtTDdIiw01sqrk/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <img
                class="img-thumbnail m-2"
                src={CVLogo}
                alt="CV Icon"
              />
            </a>
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

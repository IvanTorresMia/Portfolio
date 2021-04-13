import React from "react";
import ProfilePic from "../../profile.jpg";
import githubLogo from "../../skillLogos/githubLogo.png";
import CVLogo from "../../Contact-Folder/cv.png";

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
              Hi there! My name is Ivan, I am a Coding Bootcamp Graduate with a
              certificate from UC Berkeley Full Stack program. I have developed
              multiple Full Stack applications from the ground up Using
              technologies like React Js, jQuery, HTML, CSS, ES6 JavaScript,
              MySql, Mongo DB, Axios, Ajax and many more.
              <br />
              <br />
              I have been interested and excited by the engineering
              industry for a long time. Since being a kid I would take computers
              apart just to see what's inside, I have always tinkered with
              different things like car engines, computers, and now software, so
              far I am loving software!
            </p>
            <p>
              As a new developer I am excited to dive into this industry and
              ready to learn and make an impact in any environment. With 3+ years
              of experience in the Auto Mechanic Industry and experience with
              many online courses like Code Academy, and Treehouse I am
              confident and excited to be part of this industry
            </p>
            <br />
            <a
              href="https://github.com/IvanTorresMia"
              target="_blank"
              rel="noreferrer"
            >
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
                class="img-thumbnail m-2 cv-logo"
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

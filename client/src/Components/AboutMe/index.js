import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../../profile.jpg";

const AboutMe = () => {
  return (
    <div className="jumbotron about-me">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="">About Me</h1>
            <p className="lead">Let's change the world through Tech</p>
            <hr />
            <p>
              Full Stack Web Developer with certificate in Web Development from
              UC Berkeley. Background in various coding languages, developing
              full stack applications from the ground up. 
              <br />
              <br />
              Specialize in
              Javascript using libraries like React Js, jQuery and others. Some
              of my strengths include effectively working in teams and creative
              problem solving, that is written and verbal communication.
              Engineering mindset with 3+ years of experience in the car
              industry and repairing computers on my own time.
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

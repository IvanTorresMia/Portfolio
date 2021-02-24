import React from "react";
import githubLogo from "../../skillLogos/githubLogo.png";

const Footer = () => {
  return (
    <footer className="footer-wraper top-line">
      <div className="footer navbar-dark bg-dark">
        <div className="footer-copyright text-center py-3 text-muted">
          © 2020 Copyright:
          <a href="https://choosealicense.com/licenses/mit/">MIT licenses</a>
        </div>
        <div className="react-footer text-muted">
          <h3>Made with React Js</h3>
            <p>Link to Github Repo for portfolio</p>
          <a
            href="https://github.com/IvanTorresMia/Portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="img-thumbnail m-2"
              src={githubLogo}
              alt="GitHub Icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

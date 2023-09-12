import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div
      className="text-dark p-4 d-flex align-items-center justify-content-center fixed-bottom"
      style={{ backgroundColor: "#6f4e37c9" }}
    >
      <h6
        className="text-center mb-0"
        style={{ fontSize: "1.2rem", color: "#7ad4e2" }}
      >
        All rights reserved &copy; PK
      </h6>
      <div className="d-flex ml-2">
        <a
          href="https://github.com/pankajajoshi"
          rel="noopener noreferrer"
          target="_blank"
          className="text-light mx-2"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/pearl-pk-31b684277/"
          rel="noopener noreferrer"
          target="_blank"
          className="text-light mx-2"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default Footer;

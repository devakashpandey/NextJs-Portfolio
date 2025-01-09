import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";

const today = new Date();
const currentYear = today.getFullYear();

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-text">
          <p>Developed By Akash Pandey </p>
          <p>Copyright © {currentYear} Akash Pandey. All Rights Reserved.</p>
        </div>
        <div className="footer-icon">
          <a href="https://www.linkedin.com/in/devakashpandey/" target="_blank">
            {" "}
            <CiLinkedin className="footer-icon-inner" />
          </a>
          <a href="https://github.com/devakashpandey" target="_blank">
            {" "}
            <VscGithub className="footer-icon-inner" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

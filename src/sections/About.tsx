import Image from "next/image";
import React from "react";
import myPic from "../../public/my.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="title">
        {" "}
        <h2>
          <span className="code-numbering">01.</span> About Me
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-info">
          <p className="about-info-text">
            Hello!, My name is{" "}
            <span style={{ color: "var(--theme-color)" }}>Akash Pandey</span>{" "}
            based in Delhi. I enjoy creating things that live on the internet.
            My interest in web development started back in{" "}
            <span style={{ color: "var(--theme-color)" }}>2020</span>. I have
            completed my graduation in BCA from Bihar, then I joined Front-end
            development course of Unacademy & also studied it myself.
          </p>{" "}
          <p className="about-info-text">
            I love to work on web application & making new designs using - React
            JS, Next JS, TypeScript & Tailwind CSS.
          </p>
          <p className="about-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-info-list">
            <li className="about-info-list-item">HTML</li>
            <li className="about-info-list-item">CSS</li>
            <li className="about-info-list-item">JavaScript</li>
            <li className="about-info-list-item">React</li>
            <li className="about-info-list-item">Redux</li>
            <li className="about-info-list-item">Tailwind CSS</li>
            <li className="about-info-list-item">SCSS</li>
            <li className="about-info-list-item">Next.js</li>
            <li className="about-info-list-item">TypeScript</li>
          </ul>
        </div>

        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src={myPic} alt="mypic" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

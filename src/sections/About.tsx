import Image from "next/image";
import React from "react";
import myPic from "../../public/my.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        {" "}
        <h2>
          <span className="code-numbering">01.</span> About Me
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-info">
          <p className="about-info-text">
            Hello! I'm{" "}
            <span style={{ color: "var(--theme-color)" }}>Akash Pandey</span>, a
            passionate Front-end Developer based in Delhi with over 2 years of
            hands-on experience. I specialize in building responsive,
            user-friendly web applications that deliver real-world impact.
          </p>
          <p className="about-info-text">
            My journey in web development began in{" "}
            <span style={{ color: "var(--theme-color)" }}>2022</span>, during my
            final year of BCA. Since then, I have continuously upskilled through
            self-learning and professional training from Unacademy.
          </p>
          <p className="about-info-text">
            I enjoy crafting clean and scalable UIs using technologies like:{" "}
            <br />
            React, Next js, TypeScript, & Tailwind CSS.
          </p>
          <p className="about-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-info-list">
            <li className="about-info-list-item">JavaScript</li>
            <li className="about-info-list-item">React</li>
            <li className="about-info-list-item">Redux</li>
            <li className="about-info-list-item">Tailwind CSS</li>
            <li className="about-info-list-item">MUI</li>
            <li className="about-info-list-item">SASS</li>
            <li className="about-info-list-item">Next.js</li>
            <li className="about-info-list-item">Github</li>
            <li className="about-info-list-item">Typescript</li>
            <li className="about-info-list-item">Framer Motion</li>
            <li className="about-info-list-item">React Three Fiber</li>
            <li className="about-info-list-item">GSAP</li>
            <li className="about-info-list-item">Shadcn</li>
            <li className="about-info-list-item">Zustand</li>
          </ul>
        </div>

        <div className="about-grid-photo">
          <div className="about-grid-photo-container">
            <Image src={myPic} alt="mypic" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

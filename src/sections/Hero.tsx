import Button from "@/components/Button";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <h1 className="hero-title">Hi everyone, my name is</h1>
        <h2 className="hero-title-large">
          Akash Pandey<span style={{ fontSize: "25px" }}>●</span>
        </h2>
        <h3 className="hero-title-large hero-title-sub">
          I build things for the web.
        </h3>

        <p className="hero-text">
          A passionate Front-end Developer with 2 years of expertise in
          developing user-friendly, adaptive and responsive websites with
          optimized cross-browser compatibility and runtime performance.{" "}
          <span style={{ color: "var(--light-slate)" }}>
            "I believe web design can be more diverse & inspiring."
          </span>{" "}
        </p>

        <div className="hero-button">
          <Button
            text="My Resume"
            link="https://drive.google.com/file/d/14PmEymDXJyaRvF5xhisMObiVcyv5DJqK/view"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;

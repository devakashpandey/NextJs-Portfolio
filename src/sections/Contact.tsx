import Button from "@/components/Button";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="title">
          <h2>
            <span className="code-numbering">04.</span>Let's Connect
          </h2>
        </div>
        <div className="contact-text">
          I’m currently open to work and actively seeking new opportunities. If
          you’re hiring or have a collaboration idea, feel free to reach out.
          I’m always available and happy to connect!
        </div>

        <div className="contact-cta">
          <Button text="Say Hello" link="mailto:devakashpandey04@gmail.com" />
        </div>
      </div>
    </>
  );
};

export default Contact;

import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <motion.div
        className="contact"
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <motion.div
          className="title"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.7 }}
        >
          <h2>
            <span className="code-numbering">04.</span>Let's Connect
          </h2>
        </motion.div>
        <motion.div
          className="contact-text"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.9 }}
        >
          I’m currently open to work and actively seeking new opportunities. If
          you’re hiring or have a collaboration idea, feel free to reach out.
          I’m always available and happy to connect!
        </motion.div>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 1.1 }}
        >
          <Button text="Say Hello" link="mailto:devakashpandey04@gmail.com" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Contact;

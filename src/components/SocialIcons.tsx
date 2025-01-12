import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { motion } from "framer-motion";

export const SocialIcons = () => {
  const SocialLinks = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://github.com/devakashpandey",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/devakashpandey/",
    },

    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://x.com/devakky04",
    },
    {
      name: "YouTube",
      icon: <FiYoutube />,
      link: "https://www.youtube.com/@firstclasscode",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://www.instagram.com/firstclasscode/",
    },
  ];
  return (
    <>
      <motion.div
        className="social-icons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 1.85 }}
      >
        <ul>
          {SocialLinks.map(({ name, icon, link }) => (
            <li key={name} title={name} className="social-icons-item">
              <Link
                href={link}
                className="social-icons-icon-link"
                target="_blank"
              >
                {icon}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

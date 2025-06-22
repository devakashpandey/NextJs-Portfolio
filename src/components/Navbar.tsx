"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import Logo from "./logo";

const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [responsiveNav, setResponsiveNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 80 ? setNavVisible(true) : setNavVisible(false);
    });
  }, []);
  const menus = [
    { name: "About", link: "/#about" },
    { name: "Experience", link: "/#experience" },
    { name: "Work", link: "/#work" },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];

  useEffect(() => {
    const links = document.querySelectorAll(".nav-item-list-link");
    links.forEach((link) => {
      link.addEventListener("click", () => setResponsiveNav(false));
    });
    const nav = document.querySelector(".nav-items");
    nav?.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    const html = document.querySelector("html");
    html?.addEventListener("click", (e) => {
      setResponsiveNav(false);
    });
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    if (responsiveNav) {
      main?.classList.add("blur");
    } else {
      main?.classList.remove("blur");
    }
  }, [responsiveNav]);

  return (
    <>
      <nav>
        <div className={`wrapper ${responsiveNav ? "blur-nav" : ""}`}>
          <motion.div
            className="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Link href="https://iamakashpandey.netlify.app" target="_akash">
              <Logo />
            </Link>
          </motion.div>{" "}
          <motion.div
            className="responsive-nav-toggle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {responsiveNav ? (
              <IoClose
                onClick={(e) => {
                  e.stopPropagation();
                  setResponsiveNav(false);
                }}
              />
            ) : (
              <MdOutlineMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setResponsiveNav(true);
                }}
              />
            )}
             
          </motion.div>
          <div className={`${responsiveNav && "nav-responsive"} nav-items`}>
            <ul className="nav-item-ul">
              {menus.map(({ name, link }, index) => (
                <motion.li
                  key={name}
                  className="nav-item-list"
                  initial={{ opacity: 0, y: -25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.3 + index * 0.1,
                  }}
                >
                  <Link href={link} className="nav-item-list-link">
                    {name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

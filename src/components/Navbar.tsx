"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

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
          <div className="logo">
            <Link href="https://iamakashpandey.netlify.app" target="_akash">
              <Logo />
            </Link>
          </div>{" "}
          <div className="responsive-nav-toggle">
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
             
          </div>
          <div className={`${responsiveNav && "nav-responsive"} nav-items`}>
            <ul className="nav-item-ul">
              {menus.map(({ name, link }) => (
                <li key={name} className="nav-item-list">
                  <Link href={link} className="nav-item-list-link">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

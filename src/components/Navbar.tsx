import Link from "next/link";
import React from "react";
import Logo from "@/components/Logo";
import Button from "./Button";

const Navbar = () => {
  const menus = [
    { name: "About", link: "/#about" },
    { name: "Experience", link: "/#experience" },
    { name: "Work", link: "/#work" },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];
  return (
    <>
      <nav>
        <div className="wrapper">
          <div className="logo">
            <Link href="https://iamakashpandey.netlify.app" target="_akash">
              <Logo />
            </Link>
          </div>{" "}
          <div className="nav-items">
            <ul className="nav-item-ul">
              {menus.map(({ name, link }) => (
                <li key={name} className="nav-item-list">
                  <Link href={link} className="nav-item-list-link">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="nav-button">
              <Button
                text="Resume"
                link="https://drive.google.com/file/d/14PmEymDXJyaRvF5xhisMObiVcyv5DJqK/view"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

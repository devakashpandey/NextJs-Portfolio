import Link from "next/link";
import React from "react";
import Logo from "./logo";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="wrapper">
          <div className="logo">
            <Link href="">
              <Logo />
            </Link>
          </div>{" "}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

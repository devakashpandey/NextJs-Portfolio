import Link from "next/link";
import React from "react";

const Button = ({ text, link }: { text: string; link: string }) => {
  return (
    <>
      <Link href={link} target="_resume" className="btn" title="Resume">
        {text}
      </Link>
    </>
  );
};

export default Button;

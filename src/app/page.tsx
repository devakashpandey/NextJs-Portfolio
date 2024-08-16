"use client";
import "@/scss/index.scss";
import { Raleway, Fira_Code } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
const firacode = Fira_Code({
  subsets: ["latin"],
  weight: ["700", "600", "500", "400", "300"],
});

export default function Home() {
  return (
    <>
      <style jsx global>{`
        :root {
          --raleway: ${raleway.style.fontFamily};
          --fira-code: ${firacode.style.fontFamily};
        }
      `}</style>
    </>
  );
}

"use client";
import Email from "@/components/Email";
import { SocialIcons } from "@/components/SocialIcons";
import "@/scss/index.scss";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import { Raleway, Fira_Code } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
const firacode = Fira_Code({
  subsets: ["latin"],
  weight: ["700", "600", "500", "400", "300"],
});

export default function Home() {
  return (
    <div>
      <style jsx global>{`
        :root {
          --raleway: ${raleway.style.fontFamily};
          --fira-code: ${firacode.style.fontFamily};
        }
      `}</style>
      <SocialIcons />
      <Email />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}

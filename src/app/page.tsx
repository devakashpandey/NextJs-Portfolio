"use client";
import Email from "@/components/Email";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { SocialIcons } from "@/components/SocialIcons";
import "@/scss/index.scss";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import { Raleway, Fira_Code } from "next/font/google";
import { useState } from "react";

const raleway = Raleway({ subsets: ["latin"] });
const firacode = Fira_Code({
  subsets: ["latin"],
  weight: ["700", "600", "500", "400", "300"],
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoader = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <div>
      <style jsx global>{`
        :root {
          --raleway: ${raleway.style.fontFamily};
          --fira-code: ${firacode.style.fontFamily};
        }
      `}</style>

      {showContent && (
        <>
          <Navbar />
          <SocialIcons />
          <Email />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoader} />
    </div>
  );
}

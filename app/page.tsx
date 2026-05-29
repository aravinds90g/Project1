"use client";

import { useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { initLenis } from "@/lib/lenis";
import { initGSAP } from "@/lib/gsap-init";

const Cursor = dynamic(() => import("@/components/Cursor"), { ssr: false });
const Preloader = dynamic(() => import("@/components/Preloader"), { ssr: false });
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Marquee = dynamic(() => import("@/components/Marquee"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });
const Stats = dynamic(() => import("@/components/Stats"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    initGSAP();
    initLenis();
  }, []);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoaded(true);
    document.body.style.overflow = "auto";
  }, []);

  return (
    <main className="bg-black text-white">
      <Cursor />
      <Preloader onComplete={handlePreloaderComplete} />
      <Navbar />
      <Hero isReady={isLoaded} />
      <About />
      <Projects />
      <Marquee />
      <Experience />
      <Testimonials />  
      <Stats />
      <Services />
      <Contact />
    </main>
  );
}

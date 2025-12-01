"use client";

import React, { useEffect, useRef } from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { MdArrowOutward } from "react-icons/md";
import GlitchText from "./ui/GlitchText";
import { antonio, autiowide, nosifer, orbitron, potta_One, rajdhani } from "../app/fonts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const glitchRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const textGenRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Create a timeline for the initial entrance animations
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 }
    });

    // Initial entrance animations
    tl.fromTo(
      backgroundRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5 }
    )
    .fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 0.4 },
      "-=1"
    )
    .fromTo(
      headingRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=0.5"
    )
    .fromTo(
      glitchRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1 },
      "-=0.7"
    )
    .fromTo(
      buttonRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=0.5"
    )
    .fromTo(
      textGenRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=0.4"
    )
    .fromTo(
      descriptionRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=0.3"
    );

    // Scroll-triggered animations
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: false,
        anticipatePin: 1,
      }
    });

    // Parallax effect on background
    scrollTl.to(
      backgroundRef.current,
      {
        y: "30%",
        scale: 1.1,
        ease: "none"
      },
      0
    );

    // Fade out overlay on scroll
    scrollTl.to(
      overlayRef.current,
      {
        opacity: 0.8,
        ease: "none"
      },
      0
    );

    // Parallax effect on content (moves slower)
    scrollTl.to(
      contentRef.current,
      {
        y: "15%",
        ease: "none"
      },
      0
    );

    // Scale down and fade out heading
    scrollTl.to(
      headingRef.current,
      {
        scale: 0.9,
        opacity: 0.7,
        y: "-20%",
        ease: "none"
      },
      0
    );

    // Special effect for glitch text
    scrollTl.to(
      glitchRef.current,
      {
        scale: 0.85,
        opacity: 0.8,
        y: "-15%",
        ease: "none"
      },
      0
    );

    // Move button up and fade
    scrollTl.to(
      buttonRef.current,
      {
        y: "-40%",
        opacity: 0.5,
        ease: "none"
      },
      0
    );

    // Text generate effect moves
    scrollTl.to(
      textGenRef.current,
      {
        y: "-20%",
        opacity: 0.6,
        ease: "none"
      },
      0
    );

    // Description moves and fades
    scrollTl.to(
      descriptionRef.current,
      {
        y: "-30%",
        opacity: 0.4,
        ease: "none"
      },
      0
    );

    // Add some interactive hover effects
    if (buttonRef.current) {
      buttonRef.current.addEventListener("mouseenter", () => {
        gsap.to(buttonRef.current, {
          scale: 1.05,
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      });

      buttonRef.current.addEventListener("mouseleave", () => {
        gsap.to(buttonRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
      scrollTl.kill();
      
      if (buttonRef.current) {
        buttonRef.current.removeEventListener("mouseenter", () => {});
        buttonRef.current.removeEventListener("mouseleave", () => {});
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative flex items-center justify-center h-screen overflow-hidden bg-black"
    >
      {/* === BACKGROUND IMAGE === */}
      <img
        ref={backgroundRef}
        src="/heroSectionImage.jpeg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
      />

      {/* === OVERLAY for contrast === */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-black/40 z-10" 
      />

      {/* === HERO CONTENT === */}
      <div 
        ref={contentRef}
        className="z-30 flex flex-col w-full text-center px-5"
      >
        {/* === MAIN HEADING - UPDATED BASED ON IMAGE === */}
        <div 
          ref={headingRef}
          className="w-full mb-2"
        >
          <h2
            className={`${antonio.className} tracking-tight font-normal leading-none drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]`}
          >
            <span
              className={`${potta_One.className} glow-text text-cyan-100 w-full text-7xl`}
            >
              Hello {" "}
            </span>
            <span className="text-6xl py-3">🌎</span>
            <span
              className={`${potta_One.className} glow-text w-full text-cyan-100 mr-7 text-7xl`}
            >
              !,{" "}
            </span>
            
            <span className={`${potta_One.className} justify-end w-11/12 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] text-center text-5xl`}>
              {"  "} I'm Aravind, {" "} A
            </span> 
          </h2>
        </div> 

        {/* === GLITCH DEVELOPER WITH UNDERLINE === */}
        <div 
          ref={glitchRef}
          className="relative my-4 mt-10"
        >
          <span className="inline-block font-extrabold leading-none tracking-widest">
            <GlitchText
              speed={1.9}
              enableShadows={true}
              enableOnHover={false}
              className={`${nosifer.className}
                text-transparent bg-clip-text
                bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
                drop-shadow-[0_0_15px_rgba(0,0,255,0.6)]
                
                text-[clamp(2.5rem,8vw,6rem)]
                sm:text-[clamp(3rem,10vw,7rem)]
                md:text-[clamp(4rem,10vw,10rem)]
                lg:text-[clamp(5rem,8vw,12rem)]
                xl:text-[clamp(6rem,8vw,14rem)]

                tracking-widest
              `}
            >
              DEVELOPER
            </GlitchText>
          </span>
        </div>

        {/* === BUTTON === */}
        <div ref={buttonRef}>
          <a
            href="https://www.linkedin.com/in/aravind-s-90g/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              otherClasses="mt-10"
              title="Want to see my work"
              position="right"
              icon={<MdArrowOutward />}
            />
          </a>
        </div>

        {/* === TEXT GENERATION === */}
        <div ref={textGenRef}>
          <TextGenerateEffect
            className={`max-w-[900px] relative text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mx-auto text-gray-200 ${autiowide.className}`}
            words="Full-Stack Developer · Innovator in Cloud Solutions · IoT Developer"
          />
        </div>

        {/* === DESCRIPTION === */}
        <div 
          ref={descriptionRef}
          className="space-y-2 mt-6"
        >
          <p className={`text-lg text-center opacity-90 max-w-2xl mx-auto`}>
            Transforming Ideas into Scalable, Secure IoT and Web Solutions
          </p>
          <p className="text-lg text-center opacity-90 max-w-2xl mx-auto font-anton">
            Building the Future with Web3, IoT, and Cloud Technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
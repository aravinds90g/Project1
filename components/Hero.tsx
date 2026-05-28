"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

gsap.registerPlugin();

function splitTextToChars(text: string) {
  return text.split("").map((char, i) => (
    <span
      key={i}
      className="inline-block will-change-transform"
      style={{ whiteSpace: char === " " ? "pre" : "normal" }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}

interface HeroProps {
  isReady: boolean;
}

export default function Hero({ isReady }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const availabilityRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isReady) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Label
      tl.fromTo(
        labelRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      // Line 1 characters
      const line1Chars = line1Ref.current?.querySelectorAll("span");
      if (line1Chars) {
        tl.fromTo(
          line1Chars,
          { y: 120, opacity: 0, rotateX: -40 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.03,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }

      // Line 2 characters
      const line2Chars = line2Ref.current?.querySelectorAll("span");
      if (line2Chars) {
        tl.fromTo(
          line2Chars,
          { y: 120, opacity: 0, rotateX: -40 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.03,
            ease: "power3.out",
          },
          "-=0.7"
        );
      }

      // Line 3 characters
      const line3Chars = line3Ref.current?.querySelectorAll("span");
      if (line3Chars) {
        tl.fromTo(
          line3Chars,
          { y: 120, opacity: 0, rotateX: -40 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.03,
            ease: "power3.out",
          },
          "-=0.7"
        );
      }

      // Role label
      tl.fromTo(
        roleRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );

      // Availability
      tl.fromTo(
        availabilityRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );

      // Scroll indicator
      tl.fromTo(
        scrollRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      );

      // Scroll line loop
      gsap.to(scrollLineRef.current, {
        y: "100%",
        duration: 1.5,
        repeat: -1,
        ease: "none",
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isReady]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col justify-center px-6 md:px-12 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/hero-section.png"
          alt=""
          className="w-full h-full object-cover opacity-70"
        />
        {/* <div className="absolute inset-0 bg-black/70" /> */}
      </div>

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,42,109,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full pt-24">
        {/* Label */}
        <span
          ref={labelRef}
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40 mb-6 block opacity-0"
        >
          IoT & Full-Stack Developer
        </span>

        {/* Main heading */}
        <h1 className="font-display font-bold leading-[0.9] tracking-tighter">
          <div
            ref={line1Ref}
            className="text-[clamp(3rem,10vw,10rem)] text-white"
            style={{ perspective: "1000px" }}
          >
            {splitTextToChars("BUILDING")}
          </div>
          <div
            ref={line2Ref}
            className="text-[clamp(3rem,10vw,10rem)] text-stroke"
            style={{ perspective: "1000px" }}
          >
            {splitTextToChars("SMART")}
          </div>
          <div
            ref={line3Ref}
            className="text-[clamp(3rem,10vw,10rem)] text-white"
            style={{ perspective: "1000px" }}
          >
            {splitTextToChars("SOLUTIONS")}
          </div>
        </h1>
      </div>

      {/* Vertical role label */}
      <div
        ref={roleRef}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 opacity-0 hidden md:block"
      >
        <span
          className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 whitespace-nowrap"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          IoT & Full-Stack Developer
        </span>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-12 flex items-end justify-between">
        {/* Availability */}
        <div ref={availabilityRef} className="flex items-center gap-3 opacity-0">
          <span className="relative flex h-2.5 w-2.5">
            <span className="dot-pulse absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
            Available for projects
          </span>
        </div>

        {/* Scroll indicator */}
        <div ref={scrollRef} className="flex flex-col items-center gap-3 opacity-0">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
            <div
              ref={scrollLineRef}
              className="absolute top-0 left-0 w-full h-1/2 bg-white/40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

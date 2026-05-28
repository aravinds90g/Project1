"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { label: "GH", href: "https://github.com/aravinds90g" },
  { label: "LI", href: "https://linkedin.com/in/aravind-s-085410215" },
  { label: "EM", href: "mailto:aravinds90g@gmail.com" },
];

function splitTextToChars(text: string) {
  return text.split("").map((char, i) => (
    <span
      key={i}
      className="inline-block will-change-transform"
      style={{ whiteSpace: char === " " ? "pre" : "normal" }}
    >
      {char === " " ? " " : char}
    </span>
  ));
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLAnchorElement>(null);
  const emailCharsRef = useRef<HTMLSpanElement[]>([]);
  const underlineRef = useRef<HTMLSpanElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const email = "aravinds90g@gmail.com";

  const scrambleEmail = useCallback(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    const emailArray = email.split("");
    const totalIterations = 12;
    let iteration = 0;

    const interval = setInterval(() => {
      emailCharsRef.current.forEach((span, index) => {
        if (!span) return;
        if (index < iteration) {
          span.textContent = emailArray[index];
        } else {
          span.textContent = chars[Math.floor(Math.random() * chars.length)];
        }
      });

      iteration += 1;
      if (iteration > emailArray.length + totalIterations) {
        clearInterval(interval);
        emailCharsRef.current.forEach((span, index) => {
          if (span) span.textContent = emailArray[index] || "";
        });
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading entrance
      const allLines = [line1Ref.current, line2Ref.current, line3Ref.current];
      allLines.forEach((line) => {
        if (!line) return;
        const chars = line.querySelectorAll("span");
        gsap.fromTo(
          chars,
          { y: 80, opacity: 0, rotateX: -30 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.02,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Email entrance
      gsap.fromTo(
        emailRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: emailRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      // Footer entrance
      const footer = sectionRef.current?.querySelector(".footer-row");
      if (footer) {
        gsap.fromTo(
          footer,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footer,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleEmailHover = () => {
    scrambleEmail();
    if (underlineRef.current) {
      gsap.fromTo(
        underlineRef.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  };

  const handleEmailLeave = () => {
    if (underlineRef.current) {
      gsap.to(underlineRef.current, {
        scaleX: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col justify-center px-6 md:px-12 py-32 overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        ref={glowRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none ambient-glow"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,42,109,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full text-center">
        {/* Massive heading */}
        <h2 className="font-display font-bold leading-[0.95] tracking-tighter mb-16">
          <div
            ref={line1Ref}
            className="text-[clamp(3rem,10vw,9rem)] text-white"
            style={{ perspective: "1000px" }}
          >
            {splitTextToChars("LET US")}
          </div>
          <div
            ref={line2Ref}
            className="text-[clamp(3rem,10vw,9rem)] text-stroke"
            style={{ perspective: "1000px" }}
          >
            {splitTextToChars("WORK")}
          </div>
          <div
            ref={line3Ref}
            className="text-[clamp(3rem,10vw,9rem)] text-white"
            style={{ perspective: "1000px" }}
          >
            {splitTextToChars("TOGETHER")}
            <span className="text-accent">.</span>
          </div>
        </h2>

        {/* Email */}
        <a
          ref={emailRef}
          href={`mailto:${email}`}
          className="inline-block relative group opacity-0"
          onMouseEnter={handleEmailHover}
          onMouseLeave={handleEmailLeave}
        >
          <span className="font-mono text-[clamp(1rem,3vw,2rem)] tracking-tight">
            {email.split("").map((char, i) => (
              <span
                key={i}
                ref={(el) => {
                  if (el) emailCharsRef.current[i] = el;
                }}
                className="inline-block"
              >
                {char}
              </span>
            ))}
          </span>
          <span
            ref={underlineRef}
            className="absolute -bottom-2 left-0 w-full h-[2px] bg-accent"
            style={{ transform: "scaleX(0)", transformOrigin: "left" }}
          />
        </a>
      </div>

      {/* Footer */}
      <div className="footer-row absolute bottom-8 left-6 right-6 md:left-12 md:right-12 flex flex-col md:flex-row items-center justify-between gap-6 opacity-0">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">
          © 2025 Aravind. All rights reserved.
        </span>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center font-mono text-[10px] text-white/40 hover:text-accent hover:border-accent/50 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">
          Built with Next.js & GSAP
        </span>
      </div>
    </section>
  );
}

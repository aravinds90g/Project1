"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Full-Stack Development",
    description:
      "Custom web applications built with the MERN stack and Next.js. Focus on authentication, REST APIs, WebSockets, and responsive UI design with Tailwind CSS.",
    tags: ["MongoDB", "Express.js", "React.js", "Next.js", "Node.js"],
  },
  {
    number: "02",
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps built with React Native and Expo. Features include authentication, real-time data, QR code scanning, and cloud integration.",
    tags: ["React Native", "Expo", "NativeWind", "Appwrite"],
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    description:
      "Deploying and managing applications on AWS EC2/S3, Azure Cloud, Vercel, Render, and Railway. Database management with MongoDB Atlas.",
    tags: ["AWS EC2", "AWS S3", "Azure", "MongoDB Atlas"],
  },
  {
    number: "04",
    title: "AI Application Development",
    description:
      "Building AI-powered applications with LLM integration, voice AI assistants, and intelligent automation. From chatbots to AI SaaS products with real-world impact.",
    tags: ["LLMs", "OpenAI", "Voice AI", "LangChain"],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      const headerItems = headerRef.current?.querySelectorAll(".animate-item");
      if (headerItems) {
        gsap.fromTo(
          headerItems,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll(".service-card");
      cards?.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-32 px-6 md:px-12"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-20">
          <span className="animate-item font-mono text-[11px] uppercase tracking-[0.3em] text-accent mb-4 block">
            Expertise
          </span>
          <h2 className="animate-item font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] tracking-tight">
            What I build
          </h2>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="service-card group relative p-8 md:p-10 border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Number */}
              <span className="font-display text-[clamp(4rem,8vw,6rem)] font-bold text-white/[0.03] leading-none absolute top-4 right-6 select-none">
                {service.number}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight mb-4">
                  {service.title}
                </h3>
                <p className="text-white/50 text-base leading-relaxed mb-6 max-w-md">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 border border-white/[0.08] text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
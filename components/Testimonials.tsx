"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const learningItems = [
  {
    title: "IoT Applications",
    description:
      "Developing connected IoT solutions using microcontrollers, cloud services, and real-time data pipelines for smart automation and monitoring.",
    tag: "IoT",
  },
  {
    title: "AI SaaS Products",
    description:
      "Creating AI-powered SaaS platforms that leverage LLMs and cloud services to deliver intelligent, scalable solutions for real-world problems.",
    tag: "SaaS",
  },
  {
    title: "Agentic AI",
    description:
      "Building autonomous AI agents that can plan, reason, and execute tasks independently — from code generation to multi-step workflows with tool use.",
    tag: "AI Agents",
  },
  {
    title: "AI for Productivity",
    description:
      "Leveraging AI to automate repetitive work, accelerate development workflows, and boost overall productivity through intelligent tooling and automation.",
    tag: "AI/ML",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header animation
      const headerEls = sectionRef.current?.querySelectorAll(".animate-header");
      if (headerEls) {
        headerEls.forEach((el) => {
          gsap.fromTo(
            el,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }

      // Card staggered entrance
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 80, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            delay: (index % 2) * 0.15,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-32 px-6 md:px-12"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="relative mb-20">
          <span className="absolute -top-16 -left-4 font-display text-[clamp(8rem,20vw,16rem)] font-bold text-white/[0.02] leading-none select-none pointer-events-none">
            03
          </span>
          <span className="animate-header font-mono text-[11px] uppercase tracking-[0.3em] text-accent mb-4 block opacity-0">
            Current Learning
          </span>
          <h2 className="animate-header font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight opacity-0">
            What I am
            <br />
            <span className="text-stroke">building next</span>
          </h2>
        </div>

        {/* Learning items grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {learningItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group relative p-8 lg:p-10 border border-white/[0.06] bg-surface/30 hover:border-accent/20 transition-all duration-500 opacity-0"
            >
              {/* Decorative quote mark */}
              <span className="absolute top-6 right-8 font-display text-[6rem] leading-none text-white/[0.03] select-none pointer-events-none">
                &rarr;
              </span>

              {/* Accent corner glow on hover */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(255,42,109,0.06) 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10">
                <h3 className="font-display text-xl font-semibold tracking-tight text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-white/60 text-base leading-relaxed mb-6 group-hover:text-white/70 transition-colors duration-500">
                  {item.description}
                </p>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 border border-white/[0.08] rounded-full text-white/40">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent/40 group-hover:w-full transition-all duration-700 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

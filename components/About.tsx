"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 4, suffix: "", label: "Tech Stacks" },
  { value: 3, suffix: "+", label: "Active Projects" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const statValuesRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Right column text animations
      const textElements = rightColRef.current?.querySelectorAll(".animate-text");
      if (textElements) {
        textElements.forEach((el) => {
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

      // Stats count-up
      stats.forEach((stat, index) => {
        const el = statValuesRef.current[index];
        if (!el) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toString();
          },
        });
      });

      // Image clip-path reveal
      gsap.fromTo(
        imageInnerRef.current,
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-[100dvh] py-32 px-6 md:px-12 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.5] pointer-events-none"
        style={{ backgroundImage: "url('/portfolio-image-4.png')" }}
      />
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - sticky */}
          <div ref={leftColRef} className="lg:sticky lg:top-32 lg:self-start">
            <div className="relative">
              {/* Decorative number */}
              <span className="absolute -top-16 -left-4 font-display text-[clamp(8rem,20vw,16rem)] font-bold text-white/[0.02] leading-none select-none pointer-events-none">
                01
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent mb-4 block">
                About Me
              </span>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
                Building real-world
                <br />
                tech solutions with
                <br />
                <span className="text-stroke">precision</span>
                <br />
                and innovation
              </h2>
            </div>
          </div>

          {/* Right column */}
          <div ref={rightColRef} className="space-y-12">
            <div className="animate-text">
              <p className="text-white/60 text-lg leading-relaxed">
                I am a final-year BE Electronics and Communication Engineering student passionate about
                building real-world technology solutions using Full-Stack Development, AI/ML, Cloud,\n                and Mobile App Development. I specialize in the MERN stack, Next.js, and React Native.
              </p>
            </div>

            <div className="animate-text">
              <p className="text-white/60 text-lg leading-relaxed">
                My approach combines technical excellence with practical problem-solving. I enjoy
                creating innovative applications — from mobile apps\n                that simplify college workflows to SaaS platforms that solve real-world problems.
                Every project is built with intention and attention to detail.
              </p>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-6 py-8 border-y border-white/[0.06]"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="animate-text">
                  <div className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-none">
                    <span ref={(el) => { statValuesRef.current[index] = el; }}>0</span>
                    <span className="text-accent">{stat.suffix}</span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40 mt-2 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Currently working on */}
            <div className="animate-text">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3 block">
                Currently working on
              </span>
              <p className="text-white/80 text-base leading-relaxed">
                Building AI-powered SaaS applications and voice AI assistants with\n                AIML integration for real-time intelligence and automation.
              </p>
            </div>

            {/* Portrait */}
            <div ref={imageRef} className="relative overflow-hidden rounded-sm">
              <div
                ref={imageInnerRef}
                className="aspect-[4/5] bg-surface relative overflow-hidden"
                style={{ clipPath: "inset(100% 0 0 0)" }}
              >
                <img
                  src="/about-portrait.png"
                  alt="Portrait"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

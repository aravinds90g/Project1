"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 6, suffix: "+", label: "Technologies Used" },
  { value: 3, suffix: "", label: "IoT Integrations" },
  { value: 4, suffix: "", label: "App Platforms" },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stats.forEach((stat, index) => {
        const el = valuesRef.current[index];
        if (!el) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toString();
          },
        });
      });

      // Animate dividers
      const dividers = sectionRef.current?.querySelectorAll(".stat-divider");
      if (dividers) {
        gsap.fromTo(
          dividers,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 px-6 md:px-12">
      {/* Top accent line */}
      <div className="max-w-[1400px] mx-auto mb-16">
        <div className="h-[3px] bg-accent/30 w-full" />
      </div>

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, index) => (
            <div key={stat.label} className="relative flex flex-col items-center text-center">
              {/* Vertical divider */}
              {index > 0 && (
                <div className="stat-divider absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block w-[1px] h-16 bg-white/[0.06] origin-center" />
              )}

              <div className="font-display text-[clamp(3rem,8vw,6rem)] font-bold leading-none tracking-tighter">
                <span ref={(el) => { valuesRef.current[index] = el; }}>0</span>
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mt-4">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

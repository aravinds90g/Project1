"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    year: "6 Month",
    company: "Grantley Edutech Private Limited",
    role: "Cloud Computing Intern",
    description:
      "Completed a cloud computing internship in both AWS and Microsoft Azure platforms. Worked with AWS EC2 for virtual cloud servers and S3 for cloud storage and hosting. Used Azure IoT Hub for connecting and managing IoT devices in the cloud. Gained practical knowledge in cloud deployment, virtual machine management, storage services, networking, and security concepts.",
  },
  {
    year: "6 Month",
    company: "Labmetric",
    role: "Full-Stack Developer Intern",
    description:
      "Completed a full-stack development internship focused on modern web application development using the MERN stack. Built responsive UIs with React.js and Tailwind CSS, developed REST APIs with Node.js and Express.js, and managed databases with MongoDB. Implemented authentication, routing, and API integration.",
  },
  {
    year: "Current Focus",
    company: "AI & Full-Stack Development",
    role: "Self-Directed Learner",
    description:
      "Actively learning Voice AI assistants, AIML integration, advanced DSA, and AI-powered SaaS applications. Building projects that push the boundaries of full-stack and AI.",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // SVG line draw animation
      const line = lineRef.current;
      if (line) {
        const length = line.getTotalLength();
        gsap.set(line, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(line, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: true,
          },
        });
      }

      // Row entrance animations
      rowsRef.current.forEach((row, index) => {
        if (!row) return;
        gsap.fromTo(
          row,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            delay: index * 0.1,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 px-6 md:px-12"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent mb-4 block">
            Experience
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight">
            Where I have <span className="text-stroke">worked</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* SVG vertical line */}
          <svg
            ref={svgRef}
            className="absolute left-0 md:left-[180px] top-0 h-full w-[2px] overflow-visible"
            preserveAspectRatio="none"
          >
            <path
              ref={lineRef}
              d="M1 0/ L1 1000"
              stroke="#ff2a6d"
              strokeWidth="1"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Experience rows */}
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => { rowsRef.current[index] = el; }}
                className="relative grid grid-cols-1 md:grid-cols-[180px_40px_1fr_1fr] gap-4 md:gap-8 py-10 border-b border-white/[0.06] opacity-0"
              >
                {/* Year */}
                <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/40 md:text-right md:pr-8">
                  {exp.year}
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex items-start justify-center pt-1">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                </div>

                {/* Company & Role */}
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight mb-1">
                    {exp.company}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
                    {exp.role}
                  </span>
                </div>

                {/* Description */}
                <div>
                  <p className="text-white/50 text-sm leading-relaxed max-w-md">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

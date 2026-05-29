"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    name: "GATE PASS MANAGER",
    image: "/gate-pass.png",
    description:
      "A real-world mobile application developed with React Native and MongoDB to simplify the college gate pass approval process, eliminating manual paperwork and physical signatures.",
    tags: ["React Native", "Expo", "MongoDB", "Node.js"],
  },
  {
    number: "02",
    name: "HOSPITAL FOOD DELIVERY",
    image: "/hospital-food.png",
    description:
      "A full-stack application to manage and streamline food delivery inside hospitals, helping organize food distribution efficiently for patients and staff.",
    tags: ["Next.js", "Express.js", "MongoDB", "Node.js"],
  },
  {
    number: "03",
    name: "EVENT PLATFORM",
    image: "/event-platform.png",
    description:
      "A modern event management platform with real-time updates via WebSockets, user authentication, cloud image uploads, and a responsive UI.",
    tags: ["React", "WebSockets", "Cloudinary", "Tailwind CSS"],
  },
  {
    number: "04",
    name: "IPHONE 3D WEBSITE",
    image: "/iphone-3d.png",
    description:
      "A premium 3D animated web experience inspired by the Apple iPhone 15 Pro website, featuring 3D product visualization and smooth animations.",
    tags: ["Three.js", "GSAP", "Framer Motion", "React.js"],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

      cards.forEach((card, index) => {
        const isLast = index === cards.length - 1;

        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: isLast ? "bottom bottom" : "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: true,
          onUpdate: (self) => {
            if (!isLast) {
              const progress = self.progress;
              gsap.to(card, {
                scale: 1 - progress * 0.05,
                filter: `brightness(${1 - progress * 0.4})`,
                duration: 0.1,
                overwrite: true,
              });
            }
          },
        });

        const content = card.querySelectorAll(".project-content");
        gsap.fromTo(
          content,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
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
      id="projects"
      ref={sectionRef}
      className="relative"
      style={{ marginTop: "-1px" }}
    >
      <div className="px-6 md:px-12 pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            Selected Works
          </span>
        </div>
      </div>

      {projects.map((project, index) => (
        <div
          key={project.number}
          ref={(el) => { cardsRef.current[index] = el; }}
          className="relative min-h-[100dvh] w-full will-change-transform"
          data-cursor-project="true"
        >
          <div className="absolute inset-0 bg-black" />
          <div className="relative h-full min-h-[100dvh] flex flex-col lg:flex-row">
            <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 lg:py-0">
              <div className="relative">
                <span className="absolute -top-20 -left-4 font-display text-[clamp(6rem,15vw,12rem)] font-bold text-white/10 leading-none select-none pointer-events-none project-content">
                  {project.number}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 block project-content">
                  Project {project.number}
                </span>
                <h3 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight mb-6 project-content">
                  {project.name}
                </h3>
                <p className="text-white/50 text-base leading-relaxed max-w-md mb-8 project-content">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-10 project-content">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 border border-white/[0.08] rounded-full text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-accent transition-all duration-300 project-content"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="relative">
                    View Project
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white/20 group-hover:bg-accent group-hover:scale-x-110 transition-all duration-300 origin-left" />
                  </span>
                  <span className="group-hover:tracking-[0.3em] transition-all duration-300">
                    →
                  </span>
                </a>
              </div>
            </div>
            <div className="flex-1 relative overflow-hidden">
              <div className="absolute inset-4 lg:inset-8 rounded-sm overflow-hidden bg-surface group">
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/[0.06]" />
        </div>
      ))}
    </section>
  );
}

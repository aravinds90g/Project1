"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const skillsRow1 = [
  "MongoDB", "Express.js", "React.js", "Next.js", "Node.js",
  "Tailwind CSS", "TypeScript", "JavaScript", "REST APIs", "React Native",
  "Expo", "NativeWind", "Appwrite", "Cloudinary", "WebSockets",
];

const skillsRow2 = [
  "ESP32", "ESP8266", "MQTT", "HiveMQ", "Azure IoT Hub",
  "AWS EC2", "AWS S3", "MongoDB Atlas", "Three.js", "GSAP",
  "Framer Motion", "Java", "Python", "DSA", "AIML",
];

export default function Marquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<gsap.core.Tween | null>(null);
  const tickerRef2 = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const row1 = row1Ref.current;
      const row2 = row2Ref.current;
      if (!row1 || !row2) return;

      const row1Items = row1.querySelectorAll(".marquee-item");
      const row2Items = row2.querySelectorAll(".marquee-item");

      // Duplicate items for seamless loop
      const cloneRow1 = row1.innerHTML;
      const cloneRow2 = row2.innerHTML;
      row1.innerHTML = cloneRow1 + cloneRow1;
      row2.innerHTML = cloneRow2 + cloneRow2;

      const totalWidth1 = row1.scrollWidth / 2;
      const totalWidth2 = row2.scrollWidth / 2;

      // Row 1 - scroll left
      tickerRef.current = gsap.to(row1, {
        x: -totalWidth1,
        duration: 40,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth1),
        },
      });

      // Row 2 - scroll right (start from negative)
      gsap.set(row2, { x: -totalWidth2 });
      tickerRef2.current = gsap.to(row2, {
        x: 0,
        duration: 50,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => {
            const val = parseFloat(x);
            return val >= 0 ? val - totalWidth2 : val;
          }),
        },
      });

      // Hover speed boost
      const section = sectionRef.current;
      if (section) {
        section.addEventListener("mouseenter", () => {
          tickerRef.current?.timeScale(3);
          tickerRef2.current?.timeScale(3);
        });
        section.addEventListener("mouseleave", () => {
          tickerRef.current?.timeScale(1);
          tickerRef2.current?.timeScale(1);
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderItems = (items: string[], startAccent: boolean = false) => {
    return items.map((skill, index) => {
      const isAccent = (index + (startAccent ? 1 : 0)) % 4 === 0;
      return (
        <span key={index} className="marquee-item flex items-center shrink-0">
          <span
            className={`font-display text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight whitespace-nowrap ${
              isAccent ? "text-accent" : "text-white/20"
            }`}
          >
            {skill}
          </span>
          <span className="text-white/10 mx-8 text-xl">◆</span>
        </span>
      );
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden border-y border-white/[0.06]"
    >
      <div className="mb-8">
        <div
          ref={row1Ref}
          className="flex items-center will-change-transform"
          style={{ width: "max-content" }}
        >
          {renderItems(skillsRow1, false)}
        </div>
      </div>
      <div>
        <div
          ref={row2Ref}
          className="flex items-center will-change-transform"
          style={{ width: "max-content" }}
        >
          {renderItems(skillsRow2, true)}
        </div>
      </div>
    </section>
  );
}

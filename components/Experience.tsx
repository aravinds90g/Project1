import React from "react";
import { Button } from "./ui/MovingBorder";
import { workExperience } from "@/data";
import { autiowide } from "@/app/fonts";

const Experience = () => {
  return (
    <section
      id="projects"
      className="relative py-24 flex flex-col items-center justify-center w-full overflow-hidden"
    >
      {/* === BACKGROUND GRID === */}
      {/* === GRID BACKGROUND === */}
      <div className="h-screen w-full dark:bg-black bg-white absolute dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      {/* === TITLE === */}
      <h1 className={`text-7xl glow-text md:text-6xl text-center mb-16 font-semibold z-10 ${autiowide.className}`}>
        Work <span className={`text-cyan-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]`}>Highlights</span>
      </h1>

      {/* === EXPERIENCE GRID === */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-32 w-full max-w-4xl px-5 md:px-0">
        {workExperience.map((card) => (
          <Button key={card.id} duration={7000} className="w-full">
            <div className="p-10 w-full text-center">
              <img
                className="mx-auto mt-2 w-16 h-16 object-contain"
                src={card.thumbnail}
                alt={card.title}
              />
              <h2 className="text-xl font-bold mt-4">{card.title}</h2>
              <p className="text-sm mt-2 opacity-80">{card.desc}</p>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;

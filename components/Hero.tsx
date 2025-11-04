import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { MdArrowOutward } from "react-icons/md";
import LightRays from "./ui/LightRays";

const Hero = () => {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      {/* === BACKGROUND IMAGE === */}
      <img
        src="/heroSectionImage.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
      />

      {/* === OVERLAY for better contrast === */}
      {/* <div className="absolute inset-0 bg-black/60 z-10" /> */}

      {/* === LIGHT RAYS EFFECT === */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.4}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="w-full h-full"
        />
      </div>

      {/* === HERO CONTENT === */}
      <div className="relative z20 flex flex-col items-center justify-center text-center text-white px-5">
        {/* === HEADING === */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest mb-6 font-bold leading-tight">
          Hi I{`'`}m Aravind,{" "}
          <span className="bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">
            A DEVELOPER
          </span>
        </h2>

        {/* === TEXT GENERATION === */}
        <TextGenerateEffect
          className="max-w-[900px] relative text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold mx-auto"
          words="Full-Stack Web Developer · Innovator in Cloud Solutions · IoT Developer"
        />

        {/* === BUTTON === */}
        <div>
          <a
            href="https://www.linkedin.com/in/aravind-s-90g/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              otherClasses="mt-10"
              title="Want to see my work"
              position="right"
              icon={<MdArrowOutward />}
            />
          </a>
        </div>

        {/* === DESCRIPTION === */}
        <p className="text-lg text-center mt-6 opacity-90 max-w-2xl mx-auto">
          Transforming Ideas into Scalable, Secure IoT and Web Solutions
        </p>
        <p className="text-lg text-center opacity-90 max-w-2xl mx-auto">
          Building the Future with Web3, IoT, and Cloud Technologies
        </p>
      </div>
    </section>
  );
};

export default Hero;

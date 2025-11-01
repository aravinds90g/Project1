import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <div id="#about" className="pb-20 pt-36 ">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        {/* Original purple */}
        <Spotlight
          className="left-96 top-28 h-[80vh] w-[50vw] rotate-12"
          fill="purple"
        />
        {/* Mirrored purple in opposite direction */}
        <Spotlight
          className="-right-96 top-28 h-[80vh] w-[50vw] -rotate-12"
          fill="pink"
        />
        {/* Blue spotlight stays as is */}
        <Spotlight
          className="-right-1/2 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      <div>
        <div className="h-screen w-full dark:bg-black bg-white absolute dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>

        <div className="flex  relative justify-center   ">
          <div className="max-[89vw]">
            <h2 className="text-3xl text-center uppercase tracking-widest ">
              Hi I{`'`}m Aravind, A Developer
            </h2>
            <TextGenerateEffect
              className="text-center max-w-[900px] text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold"
              words="Full-Stack Web Developer  Innovator in Cloud Solutions  IoT Developer"
            />
            <p className="text-center">
              Transforming Ideas into Scalable, Secure IoT and Web Solutions
            </p>

            <p className="text-center">
              Building the Future with Web3, IoT, and Cloud Technologies
            </p>
            <div className="mt-10">
              <a href="https://www.linkedin.com/in/aravind-s-90g/">
                <MagicButton
                  otherClasses={`mt-10`}
                  title="Want to see my work "
                  position="right"
                  icon={<MdArrowOutward />}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

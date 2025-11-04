"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Grid = () => {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const text = textRef.current;

    gsap.fromTo(
      img,
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: img,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      text,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: text,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center 
      bg-black px-6 md:px-20 py-32 overflow-hidden"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-black 
      opacity-50 pointer-events-none"></div>

      <div className="h-full w-full absolute dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Heading */}
      <h2 className="relative z-10 text-6xl md:text-7xl font-extrabold text-center mb-20 
      text-white tracking-tight drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">
        About <span className="text-blue-500">Me</span>
      </h2>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center transform transition-all duration-500 hover:scale-105 group">
          <div className="relative">
            <img
              ref={imgRef}
              src="/profileImage.jpeg"
              alt="Aravind"
              className="rounded-2xl w-[360px] h-[480px] md:w-[420px] md:h-[520px] 
              object-cover border-4 border-purple-500 group-hover:border-blue-500 
              shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-all duration-300"
            />
          </div>
        </div>

        {/* Text */}
        <div
          ref={textRef}
          className="md:w-1/2 text-center md:text-left space-y-6 
          bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 shadow-2xl"
        >
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Hi, I'm{" "}
            <span className="font-bold text-purple-400 hover:text-blue-400 transition">Aravind</span> — 
            a passionate{" "}
            <span className="font-semibold text-blue-400">IoT and Full-Stack Developer</span> 
            who bridges the gap between hardware and the cloud.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I love building smart systems that connect the digital and physical worlds. 
            My expertise lies in{" "}
            <span className="text-blue-400 font-semibold hover:text-purple-400 transition">
              React, Next.js, Node.js, and MongoDB
            </span> 
            for web development, and{" "}
            <span className="text-blue-400 font-semibold hover:text-purple-400 transition">
              ESP32, MQTT, and Azure IoT Hub
            </span>{" "}
            for IoT integration.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I enjoy solving real-world problems with{" "}
            <span className="text-purple-400 font-semibold hover:text-blue-400 transition">
              AI, Cloud, and IoT
            </span>, 
            focusing on automation and innovation that make technology more human-centric.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            When I’m not coding, I love experimenting with new sensors, learning cloud platforms like{" "}
            <span className="text-blue-400 font-semibold">Azure and AWS</span>, 
            and exploring ways to bring intelligence to embedded devices. 
            My goal is to become an{" "}
            <span className="text-purple-400 font-semibold">IoT Solutions Architect</span> 
            and design scalable, secure, and impactful IoT ecosystems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Grid;

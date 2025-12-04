"use client";
import React, { useEffect, useRef } from "react";
import { FC, SVGProps } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Approch = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px"
    };

    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-title-in");
        }
      });
    }, observerOptions);

    const cardsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.children;
          Array.from(cards).forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("animate-card-in");
            }, index * 200);
          });
        }
      });
    }, observerOptions);

    if (titleRef.current) titleObserver.observe(titleRef.current);
    if (cardsContainerRef.current) cardsObserver.observe(cardsContainerRef.current);

    return () => {
      titleObserver.disconnect();
      cardsObserver.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-black text-white overflow-hidden">
      <style jsx>{`
        @keyframes titleSlideUp {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardReveal {
          from {
            opacity: 0;
            transform: translateY(150px) scale(0.8) rotateY(45deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1) rotateY(0deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-title-in {
          animation: titleSlideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-card-in {
          animation: cardReveal 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
                     float 3s ease-in-out 1.5s infinite;
        }

        h1:not(.animate-title-in) {
          opacity: 0;
          transform: translateY(100px);
        }

        .card-wrapper:not(.animate-card-in) {
          opacity: 0;
          transform: translateY(150px) scale(0.8);
        }

        .glow-text {
          text-shadow: 0 0 40px rgba(34, 211, 238, 0.4);
        }
      `}</style>

      {/* Title */}
      <h1
        ref={titleRef}
        className="text-6xl md:text-7xl glow-text text-center mt-10 font-semibold tracking-tight"
      >
        My Problem-Solving{" "}
        <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">
          Approach
        </span>
      </h1>

      {/* Cards Grid */}
      <div
        ref={cardsContainerRef}
        className="py-20 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-4"
      >
        <div className="card-wrapper">
          <Card
            title="Planning & Strategy"
            description="We begin by understanding your vision and goals, mapping out your website or app's structure, target audience, and features. This stage lays the foundation for a clear, actionable plan that guides the entire project."
            icon={<AceternityIcon order="Phase 1" />}
            color="emerald"
          />
        </div>

        <div className="card-wrapper">
          <Card
            title="Development & Iteration"
            description="As I start developing, I bring the blueprint to life, turning ideas into functional designs. With continuous feedback and adjustments, I refine every element to ensure a seamless and user-friendly experience."
            icon={<AceternityIcon order="Phase 2" />}
            color="purple"
          />
        </div>

        <div className="card-wrapper">
          <Card
            title="Finalization & Delivery"
            description="The final stage is all about fine-tuning. I meticulously test every aspect, address any issues, and polish the product to ensure it's ready for launch, delivering quality and performance that exceed expectations."
            icon={<AceternityIcon order="Phase 3" />}
            color="sky"
          />
        </div>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  description,
  color,
}: {
  title: string;
  icon: React.ReactNode;
  description?: string;
  color: "emerald" | "purple" | "sky";
}) => {
  const [hovered, setHovered] = React.useState(false);

  const colorClasses = {
    emerald: "from-emerald-500/20 to-cyan-500/20",
    purple: "from-purple-500/20 to-pink-500/20",
    sky: "from-sky-500/20 to-cyan-500/20"
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/[0.15] group/canvas-card relative h-[30rem] lg:h-[40rem] max-w-sm w-full mx-auto rounded-3xl overflow-hidden backdrop-blur-sm bg-white/5 shadow-2xl transition-all duration-500 hover:shadow-cyan-500/20"
    >
      {/* Corner Icons */}
      <Icon className="absolute h-8 w-8 -top-4 -left-4 text-cyan-400 opacity-60" />
      <Icon className="absolute h-8 w-8 -bottom-4 -left-4 text-purple-400 opacity-60" />
      <Icon className="absolute h-8 w-8 -top-4 -right-4 text-pink-400 opacity-60" />
      <Icon className="absolute h-8 w-8 -bottom-4 -right-4 text-emerald-400 opacity-60" />

      {/* Canvas Reveal on Hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // className="h-full w-full absolute inset-0"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} rounded-3xl`}>
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 p-8 h-full flex flex-col justify-center items-center text-center">
        <div className="mb-8 transition-all duration-500 group-hover/canvas-card:-translate-y-10 group-hover/canvas-card:scale-110">
          {icon}
        </div>

        <h2 className="text-4xl font-bold text-white mb-4 opacity-0 group-hover/canvas-card:opacity-100 translate-y-8 group-hover/canvas-card:translate-y-0 transition-all duration-500">
          {title}
        </h2>

        <p className="text-lg text-gray-300 max-w-xs opacity-0 group-hover/canvas-card:opacity-100 translate-y-8 group-hover/canvas-card:translate-y-0 transition-all duration-700 delay-100">
          {description}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order?: string }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-lg group-hover:blur-xl transition duration-1000 opacity-70 group-hover:opacity-100"></div>
      <div className="relative px-8 py-6 bg-black rounded-full ring-1 ring-white/10 shadow-2xl">
        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          {order}
        </span>
      </div>
    </div>
  );
};

export const Icon: FC<SVGProps<SVGSVGElement>> = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approch;
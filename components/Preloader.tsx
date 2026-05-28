"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const topPanelRef = useRef<HTMLDivElement>(null);
  const bottomPanelRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const completeRef = useRef(false);

  useEffect(() => {
    const obj = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        completeRef.current = true;
        const exitTl = gsap.timeline({
          onComplete: () => {
            setIsVisible(false);
            onComplete();
          },
        });

        exitTl
          .to(topPanelRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: "power4.inOut",
          })
          .to(
            bottomPanelRef.current,
            {
              yPercent: 100,
              duration: 0.8,
              ease: "power4.inOut",
            },
            "<"
          );
      },
    });

    tl.to(obj, {
      val: 100,
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: () => {
        const current = Math.round(obj.val);
        setCount(current);
        if (lineRef.current) {
          lineRef.current.style.width = `${current}%`;
        }
      },
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9998] pointer-events-none"
      style={{ overflow: "hidden" }}
    >
      <div
        ref={topPanelRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-black will-change-transform"
      />
      <div
        ref={bottomPanelRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-black will-change-transform"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <span
          ref={counterRef}
          className="font-display text-[clamp(4rem,12vw,10rem)] font-bold leading-none tracking-tighter"
        >
          {count}
        </span>
        <div className="w-[200px] h-[1px] bg-white/10 mt-4 relative overflow-hidden">
          <div
            ref={lineRef}
            className="absolute top-0 left-0 h-full bg-accent"
            style={{ width: "0%" }}
          />
        </div>
      </div>
    </div>
  );
}

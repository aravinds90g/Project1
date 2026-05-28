"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isProjectHover, setIsProjectHover] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button");
      const isProject = target.closest("[data-cursor-project]");

      if (isProject) {
        setIsProjectHover(true);
        setIsHovering(true);
        setCursorText("VIEW");
      } else if (isLink) {
        setIsHovering(true);
        setIsProjectHover(false);
        setCursorText("");
      } else {
        setIsHovering(false);
        setIsProjectHover(false);
        setCursorText("");
      }
    };

    const animate = () => {
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * 0.15;
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPosRef.current.x}px, ${ringPosRef.current.y}px) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[10000] will-change-transform"
        style={{
          width: isProjectHover ? 100 : isHovering ? 60 : 40,
          height: isProjectHover ? 100 : isHovering ? 60 : 40,
          borderRadius: "50%",
          border: `1.5px solid ${isHovering || isProjectHover ? "#ff2a6d" : "rgba(255,255,255,0.5)"}`,
          backgroundColor: isHovering || isProjectHover ? "rgba(255,42,109,0.1)" : "transparent",
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background-color 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {cursorText && (
          <span
            className="font-mono text-[10px] tracking-widest text-accent"
            style={{ opacity: isProjectHover ? 1 : 0, transition: "opacity 0.3s ease" }}
          >
            {cursorText}
          </span>
        )}
      </div>
      <div
        ref={dotRef}
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[10001] will-change-transform"
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: isHovering || isProjectHover ? "transparent" : "#ffffff",
          transition: "background-color 0.2s ease",
        }}
      />
    </>
  );
}

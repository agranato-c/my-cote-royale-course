"use client"
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { gsap } from "gsap"; 
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type FadeInProps = {
  children: React.ReactNode;
  vars?: gsap.TweenVars;
  start?: string;
  className?: string;
};

export const FadeIn = ({ children, start="top 80%", vars = {}, className }: FadeInProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to("containerRef.current", {
          // scale: 1, // 100%
          duration: 5,
          opacity: 1,
          ease: "power3.out",
          y: 0,
          stagger: 0,
          ...vars,
          scrollTrigger: {
            trigger: containerRef.current,
            start, 
          }
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to("containerRef.current", {
          // scale: 1, // 100%
          duration: 0.5,
          opacity: 1,
          ease: "none",
          y: 0,
          stagger: 0,
          // ...vars,
        });
      });

    }, 
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className ={clsx("opacity-0", className)}>
      {children}
    </div>
  )
};


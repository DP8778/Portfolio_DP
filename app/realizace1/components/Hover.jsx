"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const HoverShowcase = () => {
  const showcaseRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(showcaseRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(showcaseRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.5,
      ease: "power2.in",
    });
  };

  return (
    <div
      className="relative w-64 h-40 bg-gray-800 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="text-white font-semibold">Hover to Show Project</p>
      
      {/* Hidden image that appears on hover */}
      <div
        ref={showcaseRef}
        className="absolute top-0 left-0 w-full h-full opacity-0 scale-90 transition-all"
      >
        <Image
          src="/Ellipse.png" // Replace with your image
          alt="Project Showcase"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default HoverShowcase;

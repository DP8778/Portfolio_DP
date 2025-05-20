"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

const Hover2 = () => {
  const [showImage, setShowImage] = useState(false);
  const showcaseRef = useRef(null);

  useEffect(() => {
    const moveImage = (e) => {
      if (showImage && showcaseRef.current) {
        gsap.to(showcaseRef.current, {
          x: e.clientX - showcaseRef.current.offsetWidth / 2,
          y: e.clientY - showcaseRef.current.offsetHeight / 2,
          duration: 0.001,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", moveImage);
    return () => window.removeEventListener("mousemove", moveImage);
  }, [showImage]);

  useEffect(() => {
    if (showImage && showcaseRef.current) {
      gsap.fromTo(
        showcaseRef.current,
        { scale: 0, opacity: 1 },
        { scale: 1, opacity: 1, duration: 0.9, ease: "power2.out" }
      );
    } else if (!showImage && showcaseRef.current) {
      gsap.to(showcaseRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
      });
    }
  }, [showImage]);

  return (
    <div
      className="relative w-164 h-164 bg-gray-700 flex items-center justify-center text-white cursor-pointer"
      onMouseEnter={() => setShowImage(true)}
      onMouseLeave={() => setShowImage(false)}
    >
      Hover over me
      <div
        ref={showcaseRef}
        className="absolute pointer-events-none"
        style={{ position: "fixed", top: 0, left: 0 }}
      >
        <Image src="/images/figma.png" alt="Showcase" width={150} height={100} />
      </div>
    </div>
  );
};

export default Hover2;

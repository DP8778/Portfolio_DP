'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GsapTimelineExample() {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  useEffect(() => {
    // Initial non-scroll animations
    const timeline = gsap.timeline();

    timeline
      .to(box1Ref.current, { x: 100, duration: 1, backgroundColor: "#3498db" })
      .to(box2Ref.current, { y: 100, duration: 1, scale: 1.5 })
      .to(box3Ref.current, { rotation: 360, duration: 1, opacity: 0.5 });

    // Scroll-triggered animation for scaling box2
    gsap.to(box2Ref.current, {
      scale: 5,
      scrollTrigger: {
        trigger: box2Ref.current,
        start: '20% center', // Start animation when box2 reaches the center of the viewport
        end: '40% top', // End animation when box2 leaves the top of the viewport
        scrub: true, // Smooth animation tied to scroll
        markers: true, // Debug markers (remove in production)
      },
    });

    return () => {
      timeline.kill(); // Clean up GSAP timeline
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up scroll triggers
    };
  }, []);

  return (
    <div style={{ height: '200vh', padding: '50px' }}>
      <div
        ref={box1Ref}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: '#e74c3c',
          marginBottom: '200px',
        }}
      ></div>
      <div
        ref={box2Ref}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: '#2ecc71',
          marginBottom: '200px',
        }}
      ></div>
      <div
        ref={box3Ref}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: '#9b59b6',
        }}
      ></div>
    </div>
  );
}

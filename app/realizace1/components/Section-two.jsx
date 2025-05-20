'use client';

import React, { useEffect, useRef } from 'react';
import styles from './Section2.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      opacity: 0, // Fade-out effect
      scrollTrigger: {
        trigger: textRef.current, // Element to trigger the scroll animation
        start: 'top 12%', // Start animation when the element reaches 80% of the viewport
        end: 'top 5%', // End animation at 20% of the viewport
        scrub: true, // Smoothly connects the animation to the scroll position
      },
    });
  }, []);

  return (
    <div className={styles.section}>
      <p
        ref={textRef}
        className={styles.text}
      >
        Scroll to fade me out!
      </p>
    </div>
  );
};

export default Section2;

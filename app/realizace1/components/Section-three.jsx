'use client';

import React, { useEffect, useRef } from 'react';
import styles from './Section2.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Inicializace GSAP animace
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 }, // Start opacity 0, text posunutý dolů
      {
        opacity: 1,
        y: 0, // Návrat na původní pozici
        duration: 1.5, // Doba trvání animace
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current, // Element, který spouští animaci
          start: 'top 85%', // Spuštění, když element dosáhne 85 % viewportu
          toggleActions: 'play none none reset',
        },
      }
    );
  }, []);

  return (
    <div className={styles.section}>
      <p ref={textRef} className={styles.text}>
        Scroll to reveal me!
      </p>
    </div>
  );
};

export default Section3;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Customd.module.scss";

export default function Button({ backgroundColor = "#455CE9", ...attributes }) {
  const lettersRef = useRef([]); // Ref pro jednotlivá písmena

  useEffect(() => {
    // Clear refs array on unmount
    return () => {
      lettersRef.current = [];
    };
  }, []);

  const handleMouseEnter = () => {
    gsap.to(lettersRef.current, {
      color: "#455CE9", // Nová barva textu
      stagger: 0.06, // Zpoždění mezi písmeny
      ease: "power3.out",
      duration: 0.9,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(lettersRef.current, {
      color: "#000", // Původní barva textu
      stagger: 0.05,
      ease: "power3.out",
      duration: 0.5,
    });
  };

  const text = "fuck ya";

  const renderText = () => {
    return [...text].map((letter, index) => (
      <span
        key={index}
        ref={(el) => (lettersRef.current[index] = el)} // Každé písmeno uložíme do ref
        className={styles.letter}
      >
        {letter}
      </span>
    ));
  };

  return (
    <div
      className={styles.roundedButton}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...attributes}
    >
      <p className={styles.text}>{renderText()}</p>
    </div>
  );
}

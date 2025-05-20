import styles from './Customc.module.scss';
import React from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function index({ children, backgroundColor = "#455CE9", ...attributes }) {

  const circle = useRef(null);
  const textRef = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(circle.current, { top: "0%", width: "150%", duration: 8, ease: "power3.in" }, "enter")
      .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit")
      .to(textRef.current, { rotationX: 360, duration: 0.6, ease: "ease.in" }, "enter");
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <div
      className={styles.roundedButton}
      style={{ overflow: "hidden" }}
      onMouseEnter={() => manageMouseEnter()}
      onMouseLeave={() => manageMouseLeave()}
      {...attributes}
    >
      <p ref={textRef} className={styles.text}>
        {children}
      </p>
      <div
        ref={circle}
        style={{ backgroundColor }}
        className={styles.circle}
      ></div>
    </div>
  );
}

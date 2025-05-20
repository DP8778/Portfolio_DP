import styles from './Customf.module.scss';
import React, { useRef, useState } from 'react';
import Image from 'next/image';

export default function Index({ 
  children, 
  imagePath = "/icon.png", // Path relative to the public folder
  imageAlt = "", 
  imageWidth = 20,
  imageHeight = 20,
  ...attributes 
}) {
  const textRef = useRef(null);
  const [isBlue, setIsBlue] = useState(false);

  const handleMouseEnter = () => {
    // Add the underline and start the color animation on hover
    textRef.current.classList.add(styles.hovered);
    
    // Set a timeout to match the color transition time (0.6s)
    setTimeout(() => {
      setIsBlue(true);
    }, 600); // 600ms matching the color transition time
  };

  const handleMouseLeave = () => {
    // Remove the underline and stop the color animation when not hovering
    textRef.current.classList.remove(styles.hovered);
    setIsBlue(false);
  };

  return (
    <div
      className={styles.button}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...attributes}
    >
      <span ref={textRef} className={styles.text}>
        {children}
        {isBlue && (
          <span className={styles.imageWrapper}>
            <Image 
              src={'/images/cart.png'}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              className={styles.hoverImage}
            />
          </span>
        )}
      </span>
    </div>
  );
}
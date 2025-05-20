'use client';

import Image from 'next/image';
import styles from './Hero3.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from '../../../common/Magnetic';
import Headertwo from '../Headertwo/index.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
    const divRef = useRef(null);
    const rectangleRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const [allowScroll, setAllowScroll] = useState(false);

    useEffect(() => {
        // Initially prevent scrolling
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.position = 'fixed';
        }

        // Image Scaling Animation
        gsap.to(rectangleRef.current, {
            scale: 1.5,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: divRef.current,
                start: 'top top',
                end: '+=600px', // Adjust for longer/shorter effect
                scrub: true,
                onUpdate: (self) => {
                    if (self.progress > 0.9) {
                        setAllowScroll(true); // Enable scrolling when animation nears end
                    }
                },
            },
        });
    }, []);

    useEffect(() => {
        // When allowed, restore natural scrolling
        if (allowScroll && scrollContainerRef.current) {
            scrollContainerRef.current.style.position = 'relative';
        }
    }, [allowScroll]);

    return (
        <div ref={scrollContainerRef}>
            <Headertwo />
            <div ref={divRef} className={styles.divize}>
                <div className={styles.under}>
                    <p className="j-font4">David Pešek</p>
                </div>
                <div>
                    <Image
                        ref={rectangleRef}
                        width={700}
                        height={40}
                        className={styles.rectangle}
                        alt="ellipse"
                        src="/Group3.png"
                    />
                </div>
            </div>
        </div>
    );
}

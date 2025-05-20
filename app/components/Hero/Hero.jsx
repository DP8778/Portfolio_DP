'use client'
import Image from 'next/image';
import styles from './Hero.module.scss';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Magnetic from '../../../common/Magnetic';


export default function index() {

    const ellipseRef = useRef(null);
    const rectangleRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            ellipseRef.current,
            { rotation: 80,  }, // Starting rotation
            { rotation: 0,duration: 2.0, ease: 'power1.out' } // Rotate to 90 degrees in 1 second
        );
        

    }, []);

    return (
        <div className={styles.divize}>
            <div className={styles.under}>
                <div className={styles.text}>
                    <p className='j-font4'>David Pešek</p>
                </div>
                <div className={styles.skills}>
                    <div className="mx-5">
                        <div className={styles.dovednost}>
                            <p className={styles.contactp}>Web development</p>
                            <Image fill={true}  alt="ellipse" src="/Rectangle9bl.png" />
                        </div>
                    </div>
                    <div className="mx-5">
                        <div className={styles.dovednost}>
                            <p className={styles.contactpp}>UX/UI</p>
                            <Image fill={true}  alt="ellipse" src="/Rectangle9bl.png" />
                        </div>
                    </div>
                    <div className='mx-5'>
                        <div className={styles.dovednost}>
                            <p className={styles.contactp}>Grafický design</p>
                            <Image fill={true}  alt="ellipse" src="/Rectangle9bl.png" />
                        </div>
                    </div>
                </div>
                <div className={styles.contact}>
                    <Magnetic>
                        <p className="j-font4 text-3xl px-10 pt-[45px]">tel. 739140013</p>
                    </Magnetic>
                    <p className="j-font4 text-3xl px-10 pt-[45px]">e-mail: david.pesek@yahoo.com</p>
                </div>
            </div>
            <div>
                <Image ref={rectangleRef} width={1700} height={10} className={styles.ellipse} alt="ellipse" src="/RectangleC.png" />
                
                <Image ref={ellipseRef} width={1300} height={40} className={styles.rectangle} alt="ellipse" src="/EllipseB.png" />
            </div>      
        </div>
    )
}
import Image from 'next/image';
import Background from '../../../public/images/lookbook.png';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function Section() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div className='bg-slate-300'>
            <div
            ref={container} 
            className='relative flex items-center justify-center bg-slate-300 h-screen overflow-hidden'
            style={{clipPath: "polygon(0% 0, 65% 0%, 100% 20%, 100% 100%, 25% 100%, 0 80%)"}}
            >
            <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
                <Link href='./'>
                <p className='w-[50vw] text-[2vw] self-end uppercase mix-blend-difference'>Beauty and quality need the right time to be conceived and realised even in a world that is in too much of a hurry.</p>
                <p className='text-[5vw] uppercase mix-blend-difference'>Background Parallax</p>
                </Link>
            </div>
            <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
                <motion.div style={{y}} className='relative w-full h-full'>
                <Image src={Background} fill alt="image" style={{objectFit: "cover"}}/>
                </motion.div>
            </div>
            </div>
        </div>
    )
}

"use client"

import React, { JSX } from 'react';
import { motion } from 'framer-motion';

export default function Main(): JSX.Element {
    const blinkAnimation = {
        scale: [1, 0.5, 1],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    };

    return (
        <>
            <section className='bgSlide1'>
                <div className='maxW h-full'>
                    <article className='h-full flex flex-col items-center justify-center relative'>
                        <div>
                            <h1 className='uppercase text-white text-5xl text-center lg:text-left lg:text-[86px]'>Academia</h1>
                            <div className='flex justify-center lg:justify-start lg:gap-x-60'>
                                <h1 className='uppercase text-white text-5xl  lg:text-[190px]'>300</h1>
                                <h1 className='uppercase text-white text-5xl  lg:text-[190px]'>Fit</h1>
                            </div>
                        </div>

                        <div>
                            <img className='absolute top-[550px] left-[45%] transform -translate-x-1/2 -translate-y-1/2 w-[60%]'  src="/ccv-1.png"  alt="" />
                            {/* X */}
                            <motion.img 
                                className='absolute left-0 w-[100px]' 
                                src="/x-main.png" 
                                alt=""
                                animate={blinkAnimation}
                            />
                            {/* X */}
                            <motion.img 
                                className='absolute right-0 top-[200px] w-[100px]' 
                                src="/x-main.png" 
                                alt=""
                                animate={blinkAnimation}
                            />
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}
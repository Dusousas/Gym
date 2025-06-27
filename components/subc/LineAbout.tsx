import React from 'react';
import { GiNinjaStar } from 'react-icons/gi';
import { motion } from 'framer-motion';

export default function LineAbout() {
    const items = [
        'Musculação',
        'Crossfit',
        'Jiu-jitsu',
        'Muay Thai',
        'Fit Dance',
    ];

    return (
        <section className= "overflow-hidden z-20 relative">
            <div className="py-2 w-full bg-Yellow ">
                <div className="whitespace-nowrap animate-slide flex w-max gap-10 border-y-3 border-GrayDark py-2">
                    {[...items, ...items].map((item, index) => (
                        <div key={index} className="flex items-center gap-10">
                            <h1 className="uppercase text-2xl tracking-widest text-GrayDark">{item}</h1>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                            >
                                <GiNinjaStar className="text-2xl" />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* <div className="py-2 w-[104%] bg-GrayDark text-white absolute bottom-0 rotate-5 ">
                <div className="whitespace-nowrap animate-slide flex w-max gap-10 border-y-3 border-white py-2">
                    {[...items, ...items].map((item, index) => (
                        <div key={index} className="flex items-center gap-10">
                            <h1 className="uppercase text-2xl tracking-widest text-white">{item}</h1>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                            >
                                <GiNinjaStar className="text-2xl" />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div> */}

        </section>


    );
}

import React from 'react';
import { motion } from 'framer-motion';

export default function SmokeAbout() {
    return (
        <>
            {/* Fumaça fixa à direita */}
            <img
                src="smoke.png"
                alt="fumaça"
                className="absolute right-[-200px] top-0 h-full max-w-none object-cover pointer-events-none z-[-1]"
            />

            <img
                src="smoke.png"
                alt="fumaça"
                className="absolute left-[150px] top-0 h-full max-w-none object-cover pointer-events-none z-[-1] opacity-30"
            />

            {/* Fumaça animada com fade-in, movimento e fade-out */}
            <motion.img
                src="smoke.png"
                alt="fumaça"
                className="absolute left-[-50px] top-0 h-full max-w-none object-cover pointer-events-none z-[-1]"
                initial={{ opacity: 0, x: 0 }}
                animate={{
                    opacity: [0, 0.5, 1, 0.5, 0], // fade in → full → fade out
                    x: [0, 20, 40, 60, 80],       // move lentamente para a direita
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                }}
            />
        </>
    );
}

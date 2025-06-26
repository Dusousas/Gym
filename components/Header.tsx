import React, { useState, useEffect } from 'react';
import Navbar from './subc/Navbar';

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setIsAtTop(currentScrollY <= 50);

            if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={`
                py-4 z-20 w-full fixed transition-transform duration-300 border-b border-white/40
                ${isAtTop ? 'bg-black/40' : 'bg-black/80'}
                ${isVisible ? 'translate-y-0' : '-translate-y-full'}
                backdrop-blur
            `}
        >
            <div className="maxW flex justify-between items-center">
                <div>
                    <a href='/' className="text-3xl uppercase text-RedP font-bold tracking-[4px] cursor-pointer font-Plateia text-white">300Fit</a>
                </div>
                <Navbar />
            </div>
        </header>
    );
}

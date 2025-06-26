import React from 'react';
import AboutEfect from './subc/AboutEfect';
import Button from './subc/Button';

export default function About() {
    return (
        <>
            <section className='bg-[#110E10] outline py-20 relative'>
                <div className='maxW flex flex-col lg:flex-row'>

                    <article className='w-1/2'>
                        <AboutEfect />
                        <h1 className='uppercase text-white text-4xl'>A Academia Mais Completa da Região.</h1>
                        <p className='mt-8 text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate veniam facere quidem modi deserunt libero fuga eligendi hic quasi facilis labore impedit aliquid, necessitatibus illo beatae enim, corporis nostrum esse!</p>
                        <div className='flex mt-6'>
                            <Button />
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}
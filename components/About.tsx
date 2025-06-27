import React from 'react';
import AboutEfect from './subc/AboutEfect';

export default function About() {
    return (
        <>
            <section className='bg-[#110E10] outline py-20 '>
                <div className='maxW flex flex-col lg:flex-row'>

                    <article className='relative lg:w-1/2'>
                        <AboutEfect />
                        <h1 className='uppercase text-white text-2xl text-center lg:text-4xl lg:text-left'>A Academia Mais Completa da Região.</h1>
                        <p className='mt-8 text-white text-center lg:text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate veniam facere quidem modi deserunt libero fuga eligendi hic quasi facilis labore impedit aliquid, necessitatibus illo beatae enim, corporis nostrum esse!</p>
                        <div className='flex mt-6'>
                        <a href="" className='bg-GrayP px-10 py-4 uppercase font-semibold text-sm text-white border-x-3 border-Yellow'>Entre em contato</a>
                        </div>
                    </article>

                    <article className='outline flex justify-end lg:w-1/2'>
                        {/* CONTAINER CARDS */}
                        <div>
                            {/* CARDS SINGLES */}
                            <div className='bg-GrayP/40 border-b-5 border-Yellow w-[400px] py-8 px-8 text-right rounded-3xl '>
                                <h1 className='text-white uppercase tracking-widest text-md '>Alunos</h1>
                                <h1 className='text-white text-5xl'>123K +</h1>
                                
                            </div>

                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}
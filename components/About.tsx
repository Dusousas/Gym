import React from 'react';
import AboutEfect from './subc/AboutEfect';
import SmokeAbout from './subc/SmokeAbout';
import LineAbout from './subc/LineAbout';

const items = [
    'Musculação',
    'Crossfit',
    'Jiu-jitsu',
    'Muay Thai',
    'Fit Dance',
];

export default function About() {
    return (
        <>
            <section className='bg-[#110E10] bgAbout h-[110vh] relative z-10'>
                <SmokeAbout />
                <div className='maxW flex flex-col items-center lg:flex-row'>

                    <article className='relative mt-10 lg:w-[45%]'>
                        <AboutEfect />
                        <h1 className='uppercase text-white text-2xl text-center lg:text-4xl lg:text-left'>A Academia Mais Completa da Região.</h1>
                        <p className='mt-8 text-white text-center lg:text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate veniam facere quidem modi deserunt libero fuga eligendi hic quasi facilis labore impedit aliquid, necessitatibus illo beatae enim, corporis nostrum esse!</p>
                        <div className='flex mt-6'>
                            <a href="" className='bg-GrayP px-10 py-4 uppercase font-semibold text-sm text-white border-x-3 border-Yellow'>Entre em contato</a>
                        </div>
                    </article>

                    <article className='flex justify-end relative lg:w-[55%]'>
                        <img className='hidden left-[30px] w-[60%] absolute lg:block ' src="/about-persona1.png" alt="" />
                        {/* CONTAINER CARDS */}
                        <div className='flex flex-col gap-y-8 py-40'>
                            {/* CARDS SINGLES */}
                            <div className='bg-GrayP/40 border-b-5 border-Yellow w-[400px] py-8 px-8 text-right rounded-3xl '>
                                <h1 className='text-white uppercase tracking-widest text-md '>Alunos</h1>
                                <h1 className='text-white text-5xl'>123K +</h1>
                            </div>

                            {/* CARDS SINGLES */}
                            <div className='bg-GrayP/40 border-b-5 border-Yellow w-[400px] py-8 px-8 text-right rounded-3xl '>
                                <h1 className='text-white uppercase tracking-widest text-md '>Alunos</h1>
                                <h1 className='text-white text-5xl'>123K +</h1>
                            </div>

                            {/* CARDS SINGLES */}
                            <div className='bg-GrayP/40 border-b-5 border-Yellow w-[400px] py-8 px-8 text-right rounded-3xl '>
                                <h1 className='text-white uppercase tracking-widest text-md '>Alunos</h1>
                                <h1 className='text-white text-5xl'>123K +</h1>
                            </div>
                        </div>
                    </article>
                </div>

            <LineAbout />

            </section>

        </>
    );
}
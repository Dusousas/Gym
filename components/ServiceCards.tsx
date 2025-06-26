import React from 'react';
import Nunbers from './subc/Nunbers';

export default function ServiceCards() {
    return (
        <>
            <section className='py-8 bg-[#110E10]'>
                <div className=''>
                    <article className='flex flex-col lg:flex-row '>
                        <div className='bg-[#070606] border border-white/40 p-6 overflow-hidden lg:w-1/3'>
                            <div className='bgCardService1 relative '>
                                <div className='absolute inset-0 bg-black/60 z-0' />
                                <div className='relative z-10'>
                                    <h1 className='text-white uppercase text-3xl tracking-widest pt-8 px-8 '>Group</h1>
                                    <h1 className='text-white uppercase text-3xl tracking-widest pb-8 px-8'>Workout</h1>
                                    <Nunbers />
                                </div>
                            </div>
                        </div>

                        <div className='bg-[#070606] border-y border-white/40 p-6 overflow-hidden lg:w-1/3'>
                            <div className='bgCardService1 relative '>
                                <div className='absolute inset-0 bg-black/60 z-0' />
                                <div className='relative z-10'>
                                    <h1 className='text-white uppercase text-3xl tracking-widest pt-8 px-8'>Group</h1>
                                    <h1 className='text-white uppercase text-3xl tracking-widest pb-8 px-8'>Workout</h1>
                                    <Nunbers />
                                </div>
                            </div>
                        </div>

                        <div className='bg-[#070606] border border-white/40 p-6 overflow-hidden lg:w-1/3'>
                            <div className='bgCardService1 relative '>
                                <div className='absolute inset-0 bg-black/60 z-0' />
                                <div className='relative z-10'>
                                    <h1 className='text-white uppercase text-3xl tracking-widest pt-8 px-8'>Group</h1>
                                    <h1 className='text-white uppercase text-3xl tracking-widest pb-8 px-8'>Workout</h1>
                                    <Nunbers />
                                </div>
                            </div>
                        </div>

                    </article>
                </div>
            </section>
        </>
    );
}

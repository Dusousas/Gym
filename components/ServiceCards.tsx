import React from 'react';
import Nunbers from './subc/Nunbers';

export default function ServiceCards() {
    return (
        <>
            <section className='py-20 bg-[#110E10]'>
                <div className=''>
                    <article className='flex'>
                        <div className='bg-[#070606] border border-white/40 p-6 w-1/3 '>
                        {/* Overlay */}
                        <div className='bg-black/40' />
                            <div className='bgCardService1 relative z-10'>
                                <h1 className='text-white uppercase text-3xl tracking-widest pt-8 px-8'>Group</h1>
                                <h1 className='text-white uppercase text-3xl tracking-widest pb-8 px-8'>Workout</h1>
                                <Nunbers />
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}
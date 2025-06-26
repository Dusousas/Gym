'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Nunbers from './subc/Nunbers';

export default function ServiceCards() {
    const cardData = [
        { id: 1, bgClass: 'bgCardService1', number: '01' },
        { id: 2, bgClass: 'bgCardService2', number: '02' },
        { id: 3, bgClass: 'bgCardService3', number: '03' },
        { id: 4, bgClass: 'bgCardService1', number: '04' },
        { id: 2, bgClass: 'bgCardService2', number: '05' },
        { id: 3, bgClass: 'bgCardService3', number: '06' },

    ];

    return (
        <section className='py-8 bg-[#110E10]'>

            <Swiper
                spaceBetween={0}
                modules={[Pagination]}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                }}
            >
                {cardData.map((card) => (
                    <SwiperSlide key={card.id}>
                        <div className='bg-[#070606] border border-white/40 p-6 overflow-hidden h-full group cursor-pointer'>
                            <div className={`${card.bgClass} relative h-full overflow-hidden transition-all duration-500 ease-out group-hover:scale-110 group-hover:translate-x-2 group-hover:translate-y-2`}>
                                <div className='absolute inset-0 bg-black/60 z-0' />
                                <div className='relative z-10 h-full flex flex-col justify-between outline'>
                                    <div className='px-10 py-10'>
                                        <h1 className='text-white uppercase text-3xl tracking-widest'>Group</h1>
                                        <h1 className='text-white uppercase text-3xl tracking-widest'>Workout</h1>
                                    </div>
                                    <div className=''>
                                        <Nunbers number={card.number} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
}
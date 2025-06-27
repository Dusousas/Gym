import React, { JSX } from 'react';

export default function AboutEffect(): JSX.Element {
    return (
        <div className='absolute top-[-35px] lg:left-0 lg:top-[-40px]'>
            <svg
                className="pxl-item--svg-stroke text-[96px] lg:text-[160px]"
                strokeWidth="1.2"
                width="358"
                height="80"
                viewBox="0 0 258 180"
            >
                <text
                    className="pxl-item-text--svg-stroke font-Plateia uppercase"
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                >
                    About
                </text>
            </svg>
        </div>
    );
}
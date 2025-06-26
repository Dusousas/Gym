import React, { JSX } from 'react';

export default function AboutEffect(): JSX.Element {
    return (
        <div className='absolute left-[114px] top-[-10px]'>
            <svg
                className="pxl-item--svg-stroke"
                strokeWidth="1.2"
                width="800"
                height="180"
                viewBox="0 0 800 180"
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
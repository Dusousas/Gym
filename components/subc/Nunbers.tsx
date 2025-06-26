import React from 'react';

export default function Nunbers({ number }: { number: string }) {
    return (
        <div className='pb-8 pt-16'>
            <svg
                className="pxl-item--svg-stroke"
                strokeWidth="1.2"
                width="200"
                height="120"
                viewBox="0 0 200 120"
            >
                <text
                    className="pxl-item-text--svg-stroke font-Plateia"
                    x="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    y="50%"
                >
                    {number}
                </text>
            </svg>
        </div>
    );
}

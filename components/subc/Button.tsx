import React from 'react';

interface BoxData {
    letter: string;
    hoverLetter: string;
    translateDirection: 'up' | 'down';
}

const HoverButton: React.FC = () => {
    const boxes: BoxData[] = [
        { letter: 'F', hoverLetter: 'F', translateDirection: 'down' },
        { letter: 'A', hoverLetter: 'A', translateDirection: 'up' },
        { letter: 'L', hoverLetter: 'L', translateDirection: 'down' },
        { letter: 'E', hoverLetter: 'E', translateDirection: 'up' },
        { letter: 'C', hoverLetter: 'C', translateDirection: 'down' },
        { letter: 'O', hoverLetter: 'O', translateDirection: 'up' },
        { letter: 'N', hoverLetter: 'N', translateDirection: 'down' },
        { letter: 'O', hoverLetter: 'O', translateDirection: 'up' },
        { letter: 'S', hoverLetter: 'S', translateDirection: 'down' },
        { letter: 'C', hoverLetter: 'C', translateDirection: 'up' },
        { letter: 'O', hoverLetter: 'O', translateDirection: 'down' },

    ];

    return (
        <div className="flex group">
            {boxes.map((box, index) => (
                <div
                    key={index}
                    className="w-[35px] h-[40px] flex justify-center items-center text-[15px] font-bold text-black transition-all duration-800 cursor-pointer relative bg-[#3E3E3E] overflow-hidden"
                >
                    {box.letter}
                    <div className={`absolute top-0 bg-Yellow w-full h-full flex items-center justify-center transition-transform duration-400
                        ${box.translateDirection === 'down'
                            ? 'translate-y-full group-hover:translate-y-0'
                            : '-translate-y-full group-hover:translate-y-0'
                        }`}>
                        {box.hoverLetter}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HoverButton;
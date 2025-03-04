import React from 'react';

const Card = ({ children, otherClasses, positionClasses }) => {
    return (
        <div
            className={`relative overflow-hidden rounded-xl p-[1px] focus:outline-none ${positionClasses}`}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <div
                className={`h-full w-full rounded-xl
       bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
            >
                {children}
            </div>
        </div>
    );
};

export default Card;

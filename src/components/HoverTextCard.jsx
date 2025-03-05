const HoverTextCard = ({ stepText, hoverHeading, hoverText, otherClasses }) => {
    return (
        <div
            className={`relative overflow-hidden rounded-xl text-white text-center cursor-pointer group transition-all duration-300 lg:w-[19vw] max-w-[30rem] w-[70vw] py-44 lg:py-60 ${otherClasses}`}
        >
            <span className="absolute inset-[-1000%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <div className="absolute inset-[1px] bg-gray-950 rounded-xl border border-gray-700 flex flex-col items-center justify-center transition-all duration-300">
                <div className="relative inline-flex items-center justify-center rounded-xl text-lg p-[1px] focus:outline-none font-medium opacity-100 group-hover:opacity-0 transition-all duration-300 transform group-hover:-translate-y-16 group-hover:scale-95 overflow-hidden">
                    <span className="absolute inset-[-1000%] opacity-100 group-hover:opacity-0 transition-opacity duration-300 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="relative px-8 py-2 rounded-xl bg-gray-950 text-purple font-bold text-2xl">
                        {stepText}
                    </span>
                </div>

                <span className="absolute inset-0 text-center flex flex-col items-center justify-center text-lg font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-16 group-hover:translate-y-0 group-hover:scale-100 px-12">
                    <h1 className="text-2xl font-bold text-purple mb-3">
                        {hoverHeading}
                    </h1>
                    <p className="text-sm text-white-100">{hoverText}</p>
                </span>
            </div>
        </div>
    );
};

export default HoverTextCard;

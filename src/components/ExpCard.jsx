const ExpCard = ({ title, description, image, otherClasses }) => {
    return (
        <div className={`flex lg:items-center lg:justify-center flex-col lg:flex-row border border-gray-700 rounded-xl p-6 py-10 group bg-slate-950 hover:bg-gray-900 duration-300 ${otherClasses} lg:h-full`}>
            <img
                src={image}
                alt="experience"
                className="mb-6 lg:mb-0 lg:w-[90px] h-full w-1/4 lg:mr-6"
            />
            <div className="flex-grow">
                <h2 className="text-start text-white text-xl md:text-2xl font-bold transform transition-transform duration-300 group-hover:translate-x-2">
                    {title}
                </h2>
                <p className="text-start text-white-100 mt-3 font-semibold max-w-[25rem] transform transition-transform duration-300 group-hover:translate-x-2">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ExpCard;

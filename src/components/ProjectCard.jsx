import { MdOutlineArrowOutward } from 'react-icons/md';

const ProjectCard = ({
    type,
    image,
    title,
    description,
    link,
    technologies,
    otherClasses,
}) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`border border-gray-700 mb-12 p-6 rounded-2xl flex flex-col gap-4 w-9/12 duration-300 max-sm:w-full hover:bg-gray-900 ${otherClasses}`}
        >
            <div className="border border-gray-900 relative bg-[linear-gradient(138deg,#020024_0%,#622db1_20%,#000054_35%)] w-full h-64 overflow-hidden rounded-lg">
                <img
                    className={`absolute inset-0 w-9/12 h-full object-contain md:scale-125 ${
                        type === 'mobile' ? 'scale-110' : 'scale-150'
                    } left-24 top-8 rotate-[6deg] rounded-lg`}
                    src={image}
                    alt={title}
                />
            </div>
            <h3 className="text-white font-semibold text-2xl">{title}</h3>
            <p className="text-white-200 -mt-2 text-lg">{description}</p>

            <div className="flex justify-between mt-1">
                <div className="flex relative min-h-[40px] w-1/2 max-sm:w-full">
                    {technologies.map((ico, key) => (
                        <span
                            key={key}
                            className="border border-gray-400 border-opacity-40 bg-black-100 hover:bg-gray-800 duration-300 rounded-full p-2 absolute"
                            style={{
                                left: `${key * 35}px`,
                                zIndex: `${key * 2}`,
                            }}
                        >
                            <img src={ico.img} alt="icon" className="w-6 h-6" />
                        </span>
                    ))}
                </div>

                <span className="flex items-center gap-1 text-lg text-purple p-2 px-4 rounded-lg hover:bg-purple hover:bg-opacity-20 duration-300">
                    <p className="max-sm:hidden">Check it out!</p>
                    <MdOutlineArrowOutward />
                </span>
            </div>
        </a>
    );
};

export default ProjectCard;

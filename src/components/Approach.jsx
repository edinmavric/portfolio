import HoverTextCard from './HoverTextCard';

const Approach = () => {
    return (
        <section id="approach" className="text-white my-24 lg:mt-32">
            <h1 className="font-bold text-4xl md:text-5xl text-center">
                My <span className="text-purple">approach</span>
            </h1>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 my-16">
                <HoverTextCard
                    stepText="Step 1"
                    hoverHeading="Planning & Strategy"
                    hoverText="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
                />
                <HoverTextCard
                    stepText="Step 2"
                    hoverHeading="Development & Progress Update"
                    hoverText="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
                />
                <HoverTextCard
                    stepText="Step 3"
                    hoverHeading="Development & Launch"
                    hoverText="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
                />
            </div>
        </section>
    );
};

export default Approach;

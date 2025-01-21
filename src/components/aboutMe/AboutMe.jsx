import about from "../../assets/images/about-t.png";

const AboutMe = () => {
    const skills = [
        { name: "UX", percentage: 90 },
        { name: "Website Design", percentage: 85 },
        { name: "App Design", percentage: 80 },
        { name: "Graphic Design", percentage: 75 },
    ];
    return (
        <div className="dark:text-white text-black max-w-[1470px] mx-auto md:mb-[70px]  flex justify-between items-center flex-col lg:flex-row gap-10 lg:gap-20">
            {/* Image Section */}
            <div className="h-auto lg:h-[675px] w-full lg:w-[40%] flex justify-center items-center relative">
                <div className="relative">
                    {/* Gradient Circle */}
                    <div className="absolute top-0 left-0 lg:mt-[18%] rounded-full bg-gradient-to-t from-[#FF8233] to-[#FFFFFF00] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[545px] lg:h-[545px]">
                        <div className="bg-white left-[4px] top-[4px] relative w-[290px] h-[290px] sm:w-[392px] sm:h-[392px] lg:w-[537px] lg:h-[537px] rounded-full shadow-inner shadow-[#00000078]"></div>
                    </div>

                    {/* Profile Image */}
                    <img
                        src={about}
                        alt="About Me"
                        className="top-0 left-[4px] relative rounded-full h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[640px] lg:w-[540px]"
                    />
                </div>

                {/* Decorative Rectangle */}
                <div className="absolute lg:top-[15%] top-[12%] lg:left-[17%] h-[40px] w-[180px] sm:h-[60px] sm:w-[250px] lg:h-[83px] lg:w-[374px] bg-[#FD6F0099] opacity-60"></div>
            </div>

            {/* Description Section */}
            <div className="w-full lg:w-[55%] mt-8 lg:mt-0 p-4">
                <h2 className="text-2xl md:text-4xl font-bold ">About Me</h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed  my-[15px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
                    orci id dolor ultrices fermentum vel id neque. Ut pellentesque, augue
                    nec aliquam feugiat, nulla eros suscipit risus, nec pulvinar dolor
                    felis non sapien.
                </p>
                <div className="max-w-[600px] mt-6 ">
                    {skills.map((skill, index) => (
                        <div key={index} className="mb-6">
                            {/* Skill Name */}
                            <h3 className="text-black dark:text-white text-lg font-semibold mb-2">{skill.name}</h3>
                            {/* Skill Progress Bar */}
                            <div className="relative w-full h-2 rounded-full bg-gray-200">
                                {/* Filled Progress */}
                                <div
                                    className="absolute top-0 left-0 h-2 rounded-full bg-orange-500"
                                    style={{ width: `${skill.percentage}%` }}
                                ></div>
                                {/* Circle */}
                                <div
                                    className="absolute top-1/2 -translate-y-1/2 h-5 w-5 bg-white border-2 border-orange-500 rounded-full"
                                    style={{ left: `calc(${skill.percentage}% - 10px)` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutMe;

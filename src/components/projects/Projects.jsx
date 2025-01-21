import { useState } from "react";
import image1 from "../../assets/images/project/aircallin-short.png";
import image2 from "../../assets/images/project/aircallinf-long.png";
import busines2 from "../../assets/images/project/business-long.png";
import busines1 from "../../assets/images/project/business-short.png";
import ecom2 from "../../assets/images/project/ecom-long.png";
import ecom1 from "../../assets/images/project/ecom-short.png";

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("Web Design");

    return (
        <div className="dark:text-white text-black max-w-[1413px] mx-auto md:my-[150px]  flex flex-col justify-between items-center">
            <h2 className="lg:text-[65px] md:text-5xl text-3xl font-semibold ">My Projects</h2>
            <p className="text-[21px] font-normal lg:w-[932px] text-center mt-[30px] mb-[60px]">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
            </p>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-14">
                <button
                    className={`text-[20px] sm:text-[24px] font-normal border-2 rounded-[12px] px-4 py-2 ${activeCategory === "All"
                        ? "bg-orange-500 text-white border-orange-500"
                        : "text-black dark:bg-white bg-[#F8F8F8] border-2 border-[#545454]"
                        }`}
                    onClick={() => setActiveCategory("All")}
                >
                    All
                </button>
                <button
                    className={`text-[20px] sm:text-[24px] font-normal border-2 rounded-[12px] px-4 py-2 ${activeCategory === "UI/UX"
                        ? "bg-orange-500 text-white border-orange-500"
                        : "text-black dark:bg-white bg-[#F8F8F8] border-2 border-[#545454]"
                        }`}
                    onClick={() => setActiveCategory("UI/UX")}
                >
                    UI/UX
                </button>
                <button
                    className={`text-[20px] sm:text-[24px] font-normal border-2 rounded-[12px] px-4 py-2 ${activeCategory === "Web Design"
                        ? "bg-orange-500 text-white border-orange-500"
                        : "text-black dark:bg-white bg-[#F8F8F8] border-2 border-[#545454]"
                        }`}
                    onClick={() => setActiveCategory("Web Design")}
                >
                    Web Design
                </button>
                <button
                    className={`text-[20px] sm:text-[24px] font-normal border-2 rounded-[12px] px-4 py-2 ${activeCategory === "App Design"
                        ? "bg-orange-500 text-white border-orange-500"
                        : "text-black dark:bg-white bg-[#F8F8F8] border-2 border-[#545454]"
                        }`}
                    onClick={() => setActiveCategory("App Design")}
                >
                    App Design
                </button>
                <button
                    className={`text-[20px] sm:text-[24px] font-normal border-2 rounded-[12px] px-4 py-2 ${activeCategory === "Graphic Design"
                        ? "bg-orange-500 text-white border-orange-500"
                        : "text-black dark:bg-white bg-[#F8F8F8] border-2 border-[#545454]"
                        }`}
                    onClick={() => setActiveCategory("Graphic Design")}
                >
                    Graphic Design
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Web Design */}
                {activeCategory === "All" || activeCategory === "Web Design" ? (
                    <>
                        <div className="">
                            <div className=" shadow-md rounded-lg  w-[300px] h-[300px] sm:w-[374px] sm:h-[400px] lg:w-w-[445px] lg:h-[489px] bg-[#FFEBDB] overflow-hidden">
                                <div className="relative">
                                    <img src={image2} alt="" className="absolute top-0 right-0 mr-8 w-[300px] h-[300px] sm:w-[274px] sm:h-[400px] lg:w-[274px] lg:h-[489px]" />
                                    <img
                                        src={image1}
                                        alt="About Me"
                                        className="top-24 left-10 relative  h-[300px] w-[275px] sm:h-[400px] sm:w-[275px] lg:h-[405px] lg:w-[275px]"
                                    />
                                </div>
                            </div>
                            <div className=" mt-10">
                                <p className="text-[#FD6F00] text-[19px]">Web Design </p>
                                <h3 className="text-[24px] font-bold text-black dark:text-white mt-2">
                                    AirCalling Landing Page Design
                                </h3>
                            </div>
                        </div>
                        <div className="">
                            <div className=" shadow-md rounded-lg w-[300px] h-[300px] sm:w-[374px] sm:h-[400px] lg:w-w-[445px] lg:h-[489px] bg-[#FFEBDB] overflow-hidden">
                                <div className="relative">
                                    <img src={busines2} alt="" className="absolute top-0 right-0 mr-8 w-[300px] h-[300px] sm:w-[274px] sm:h-[400px] lg:w-[274px] lg:h-[489px]" />
                                    <img
                                        src={busines1}
                                        alt="About Me"
                                        className="top-24 left-10 relative  h-[300px] w-[275px] sm:h-[400px] sm:w-[275px] lg:h-[405px] lg:w-[275px]"
                                    />
                                </div>
                            </div>
                            <div className="mt-10">
                                <p className="text-[#FD6F00] text-[19px]">Web Design </p>
                                <h3 className="text-[24px] font-bold text-black dark:text-white mt-2">
                                    Business Landing Page Design
                                </h3>
                            </div>
                        </div>
                        <div className="">
                            <div className=" shadow-md rounded-lg w-[300px] h-[300px] sm:w-[374px] sm:h-[400px] lg:w-w-[445px] lg:h-[489px] bg-[#FFEBDB] overflow-hidden">
                                <div className="relative">
                                    <img src={ecom2} alt="" className="absolute top-0 right-0 mr-8 w-[300px] h-[300px] sm:w-[274px] sm:h-[400px] lg:w-[274px] lg:h-[489px]" />
                                    <img
                                        src={ecom1}
                                        alt="About Me"
                                        className="top-24 left-10 relative  h-[300px] w-[275px] sm:h-[400px] sm:w-[275px] lg:h-[405px] lg:w-[275px]"
                                    />
                                </div>
                            </div>
                            <div className="mt-10">
                                <p className="text-[#FD6F00] text-[19px]">Web Design </p>
                                <h3 className="text-[24px] font-bold text-black dark:text-white mt-2">
                                    Ecom Web Page Design
                                </h3>
                            </div>
                        </div>
                    </>
                ) : null}

                {/* UI/UX */}
                {activeCategory === "All" || activeCategory === "UI/UX" ? (
                    <div className="">
                        <div className=" shadow-md rounded-lg w-[300px] h-[300px] sm:w-[374px] sm:h-[400px] lg:w-w-[445px] lg:h-[489px] bg-[#FFEBDB] overflow-hidden">
                            <div className="relative">
                                <img src={ecom2} alt="" className="absolute top-0 right-0 mr-8 w-[300px] h-[300px] sm:w-[274px] sm:h-[400px] lg:w-[274px] lg:h-[489px]" />
                                <img
                                    src={ecom1}
                                    alt="About Me"
                                    className="top-24 left-10 relative  h-[300px] w-[275px] sm:h-[400px] sm:w-[275px] lg:h-[405px] lg:w-[275px]"
                                />
                            </div>
                        </div>
                        <div className="mt-10">
                            <p className="text-[#FD6F00] text-[19px]">Web Design </p>
                            <h3 className="text-[24px] font-bold text-black dark:text-white mt-2">
                                Ecom Web Page Design
                            </h3>
                        </div>
                    </div>
                ) : null}

                {/* App Design */}
                {activeCategory === "All" || activeCategory === "App Design" ? (
                    <div className="">
                        <div className=" shadow-md rounded-lg w-[300px] h-[300px] sm:w-[374px] sm:h-[400px] lg:w-w-[445px] lg:h-[489px] bg-[#FFEBDB] overflow-hidden">
                            <div className="relative">
                                <img src={busines2} alt="" className="absolute top-0 right-0 mr-8 w-[300px] h-[300px] sm:w-[274px] sm:h-[400px] lg:w-[274px] lg:h-[489px]" />
                                <img
                                    src={busines1}
                                    alt="About Me"
                                    className="top-24 left-10 relative  h-[300px] w-[275px] sm:h-[400px] sm:w-[275px] lg:h-[405px] lg:w-[275px]"
                                />
                            </div>
                        </div>
                        <div className="mt-10">
                            <p className="text-[#FD6F00] text-[19px]">Web Design </p>
                            <h3 className="text-[24px] font-bold text-black dark:text-white mt-2">
                                Business Landing Page Design
                            </h3>
                        </div>
                    </div>
                ) : null}

                {/* Graphic Design */}
                {activeCategory === "All" || activeCategory === "Graphic Design" ? (
                    <div className="">
                        <div className=" shadow-md rounded-lg w-[300px] h-[300px] sm:w-[374px] sm:h-[400px] lg:w-w-[445px] lg:h-[489px] bg-[#FFEBDB] overflow-hidden">
                            <div className="relative">
                                <img src={busines2} alt="" className="absolute top-0 right-0 mr-8 w-[300px] h-[300px] sm:w-[274px] sm:h-[400px] lg:w-[274px] lg:h-[489px]" />
                                <img
                                    src={busines1}
                                    alt="About Me"
                                    className="top-24 left-10 relative  h-[300px] w-[275px] sm:h-[400px] sm:w-[275px] lg:h-[405px] lg:w-[275px]"
                                />
                            </div>
                        </div>
                        <div className="mt-10">
                            <p className="text-[#FD6F00] text-[19px]">Web Design </p>
                            <h3 className="text-[24px] font-bold text-black dark:text-white mt-2">
                                Business Landing Page Design
                            </h3>
                        </div>
                    </div>
                ) : null}
            </div>

        </div>
    );
};

export default Projects;
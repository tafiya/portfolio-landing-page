import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import banner from "../../assets/images/banner2.png";
// import about from "../../assets/images/about-t.png";
const Banner = () => {
    return (
        <div className="dark:text-white text-black max-w-[1400px] mx-auto lg:gap-0 gap-10 md:my-[70px] my-16 flex w-full justify-between items-center flex-col lg:flex-row px-10 md:px-20">
            <div className="lg:w-2/4 flex flex-col xl:items-start items-center ">
                <h1 className="text-2xl font-semibold">
                    Hi I am
                </h1>
                <h1 className="text-[32px] text-[#FD6F00]  font-semibold">
                    Muhammad Umair
                </h1>
                <h2 className="xl:text-[100px] lg:text-[60px] md:text-5xl font-extrabold leading-tight">
                    UI & UX <br />
                    <span className="xl:ml-[230px] lg:ml-20 md:ml-16 ">Designer</span>
                </h2>
                <p className="text-sm md:text-2xl tracking-tight mt-10 mb-5 ">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
                </p>
                <button className="mt-5 md:md-10 text-white w-[188px] h-[52px] px-3 text-sm md:text-lg md:py-2 md:px-4 duration-300 font-[21px] rounded-[5px] bg-[#FD6F00]">
                    Hire Me
                </button>
            </div>

            <div className="flex flex-col justify-center items-center gap-8">
                {/* Image Section */}
                <div className="h-auto lg:h-[675px] w-full flex justify-center items-center relative">
                    <div className="relative">
                        {/* Gradient Circle */}
                        <div className="absolute top-0 lg:mt-[26%] left-[9.5%] rounded-full bg-gradient-to-t from-[#FF8233] to-[#FFFFFF00] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[485px] lg:h-[485px]">
                            <div className="bg-white left-[4px] top-[4px] relative w-[290px] h-[290px] sm:w-[392px] sm:h-[392px] lg:w-[478px] lg:h-[478px] rounded-full shadow-inner shadow-[#00000078]"></div>
                        </div>

                        {/* Profile Image */}
                        <img
                            src={banner}
                            alt="About Me"
                            className=" left-[10%] relative rounded-full h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[605px] lg:w-[480px]"
                        />
                    </div>

                    {/* Decorative Rectangle */}
                    <div className="absolute xl:top-[15%] top-[12%] xl:left-[17%] ml-10 xl:ml-0  h-[40px] w-[180px] sm:h-[60px] sm:w-[250px] lg:h-[83px] lg:w-[374px] bg-[#FD6F0099] opacity-60"></div>
                </div>
                <div className=" flex text-[32px] gap-14">
                    <a href="#facebook"> <FaFacebook /></a>
                    <a href="#twitter">  <FaTwitter /></a>
                    <a href="#instagram"> <FaInstagram /></a>
                    <a href="#linkedin"> <FaLinkedin /></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
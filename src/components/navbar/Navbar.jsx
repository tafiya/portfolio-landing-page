import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/images/Subtract.png";

const Navbar = () => {
    const [menu, openMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
    return (
        <nav className="max-w-[1420px] mx-auto flex flex-wrap justify-between md:items-center text-black dark:text-white px-4 md:mt-[24px] mt-6 md:px-0">
            <div className=" flex items-center gap-[22px] ">
                <img src={logo} className="xl:w-[37px] w-[30px] h-[30px] xl:h-[37px]" alt="" />
                <h2 className="xl:text-5xl text-3xl font-bold tracking-wide">
                    M<span className=" font-normal ">umair</span>
                </h2>
            </div>

            <ul
                className={`${menu ? "block" : "hidden"
                    }     mx-24 py-2 mt-4 font-normal md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center items-center md:bg-transparent md:static md:mx-0 md:flex gap-6 xl:text-[21px] text-lg`}
            >
                <a href="#home">
                    <li className=" transition-all duration-300 p-1 md:p-0">
                        Home
                    </li>
                </a>
                <a href="#aboutMe">
                    <li className=" transition-all duration-300 p-1 md:p-0">
                        About Me
                    </li>
                </a>
                <a href="#services">
                    <li className=" transition-all duration-300 p-1 md:p-0">
                        Services
                    </li>
                </a>
                <a href="#Projects">
                    <li className=" transition-all duration-300 p-1 md:p-0">
                        Projects
                    </li>
                </a>
                <a href="#testimonials">
                    <li className=" transition-all duration-300 p-1 md:p-0">
                        Testimonials
                    </li>
                </a>
                <a href="#Footer">
                    <li className=" transition-all duration-300 p-1 md:p-0">
                        Contact
                    </li>
                </a>

                <li className="">
                    <button className="xl:w-[188px] text-white rounded-[5px] h-[52px] px-2 py-2 bg-[#FD6F00]">
                        Download CV
                    </button>
                </li>

            </ul>
            {showMenu ? (
                <IoMdMenu
                    size={30}
                    className="md:hidden absolute right-10 top-6 transition-all duration-300"
                    onClick={() => {
                        openMenu(!menu);
                        setShowMenu(!showMenu);
                    }}
                />
            ) : (
                <IoClose
                    onClick={() => {
                        openMenu(!menu);
                        setShowMenu(!showMenu);
                    }}
                    size={30}
                    className="md:hidden absolute right-10 top-6 transition-all duration-300"
                />
            )}
        </nav>
    );
};

export default Navbar;
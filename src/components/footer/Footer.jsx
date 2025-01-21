
import logo from "../../assets/images/Subtract.png";
const Footer = () => {
    return (
        <>
            <footer className="footer footer-center space-y-10 py-20 text-black dark:text-white bg-[#F8F8F8] dark:bg-transparent rounded p-10 ">
                <div className=" flex items-center gap-[22px] ">
                    <img src={logo} className="w-[37px] h-[37px]" alt="" />
                    <h2 className="text-5xl font-bold tracking-wide">
                        M<span className=" font-normal ">umair</span>
                    </h2>
                </div>
                <nav className="grid md:grid-flow-col grid-flow-row gap-4 font-normal text-[21px]">
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">Projects</a>
                    <a className="link link-hover">Testimonials</a>
                    <a className="link link-hover">Contact</a>

                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                        <a href="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.33 3.608 1.305.976.976 1.243 2.243 1.305 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.33 2.633-1.305 3.608-.976.976-2.243 1.243-3.608 1.305-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.33-3.608-1.305-.976-.976-1.243-2.243-1.305-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.33-2.633 1.305-3.608.976-.976 2.243-1.243 3.608-1.305C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.012 7.052.07c-1.642.071-3.115.37-4.281 1.535C1.606 2.771 1.308 4.244 1.237 5.886.012 7.166 0 7.569 0 12s.012 4.834.07 6.114c.071 1.642.37 3.115 1.535 4.281 1.166 1.166 2.639 1.464 4.281 1.535 1.28.058 1.683.07 6.114.07s4.834-.012 6.114-.07c1.642-.071 3.115-.37 4.281-1.535 1.166-1.166 1.464-2.639 1.535-4.281.058-1.28.07-1.683.07-6.114s-.012-4.834-.07-6.114c-.071-1.642-.37-3.115-1.535-4.281C20.166.442 18.693.144 17.052.07 15.772.012 15.369 0 12 0zm0 5.838c-3.406 0-6.162 2.757-6.162 6.162S8.594 18.162 12 18.162 18.162 15.406 18.162 12 15.406 5.838 12 5.838zm0 10.324c-2.295 0-4.162-1.866-4.162-4.162S9.705 7.838 12 7.838s4.162 1.866 4.162 4.162-1.866 4.162-4.162 4.162zm6.406-10.833c-.796 0-1.442-.646-1.442-1.442 0-.796.646-1.442 1.442-1.442.796 0 1.442.646 1.442 1.442 0 .796-.646 1.442-1.442 1.442z">
                                </path>
                            </svg>

                        </a>
                    </div>
                </nav>

            </footer >
            <footer className="footer bg-[#545454] dark:bg-black  flex items-center justify-center px-10 py-6">
                <aside className=" text-white ">
                    <p> © <span className=" text-[#FD6F00]">Mumair </span> All right reserved, Inc</p>
                </aside>
            </footer>
        </>

    );
};

export default Footer;
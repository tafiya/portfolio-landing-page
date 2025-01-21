

const Contact = () => {
    return (
        <section className="flex flex-col items-center justify-center my-[140px] text-black dark:text-white text-center">
            <h1 className="lg:text-[65px] md:text-5xl text-3xl font-semibold ">Lets Design Together</h1>
            <p className=" my-10 lg:w-[690px] ">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus
                netus in. Aliquet donec morbi convallis pretium.
            </p>
            <div className="flex items-center gap-4">
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="px-4 py-2 dark:bg-white bg-[#F8F8F8] dark:text-black lg:w-[628px] lg:h-[75px] border border-[#AFAFAF] rounded-[14px] focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="px-6 py-2 lg:h-[75px] lg:w-[222px] bg-orange-500 text-white lg:text-[24px] rounded-[14px] hover:bg-orange-600">
                    Contact Me
                </button>
            </div>
        </section>
    );
};

export default Contact;
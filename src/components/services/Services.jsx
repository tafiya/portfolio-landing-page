
import ui from '../../assets/images/Group 19.png';
import app from '../../assets/images/app.png';
import graphic from '../../assets/images/graphic.png';
import web from '../../assets/images/web..png';
const Services = () => {
    return (
        <div className="dark:text-white text-black max-w-[1413px] mx-auto md:mb-[70px]  flex flex-col justify-between items-center">
            <h2 className="lg:text-[65px] md:text-5xl text-3xl font-semibold ">Services</h2>
            <p className="text-[21px] font-normal lg:w-[932px] text-center mt-6 mb-7 md:mb-[60px]">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
            </p>
            <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[31px] text-black ">
                <div className=" lg:w-[330px] w-[300px] h-[346] bg-[#F8F8F8] rounded-[14px] px-8 py-[52px]">
                    <img src={ui} alt="" />
                    <h2 className=" my-5 text-[32px] font-semibold">UI/UX</h2>
                    <p className=" text-[19px]">
                        Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
                    </p>
                </div>
                <div className=" lg:w-[330px] w-[300px] h-[346] bg-[#F8F8F8] rounded-[14px] px-8 py-[52px]">
                    <img src={web} alt="" />
                    <h2 className=" my-5 text-[32px] font-semibold">Web Design </h2>
                    <p className=" text-[19px]">
                        Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
                    </p>
                </div>
                <div className="lg:w-[330px] w-[300px] h-[346] bg-[#F8F8F8] rounded-[14px] px-8 py-[52px]">
                    <img src={app} alt="" />
                    <h2 className=" my-5 text-[32px] font-semibold">App Design</h2>
                    <p className=" text-[19px]">
                        Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
                    </p>
                </div>
                <div className="lg:w-[330px] w-[300px] h-[346] bg-[#F8F8F8] rounded-[14px] px-8 py-[52px]">
                    <img src={graphic} alt="" />
                    <h2 className=" my-5 text-[32px] font-semibold">Graphic Design </h2>
                    <p className=" text-[19px]">
                        Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Services;
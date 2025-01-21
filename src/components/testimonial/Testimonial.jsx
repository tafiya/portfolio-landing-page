import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import person1 from "../../assets/images/Ellipse 10.png";
import person2 from "../../assets/images/Ellipse 11.png";
import './style.css';


const Testimonial = () => {
    return (
        <section className="text-black dark:text-white mx-auto md:my-[70px] flex flex-col justify-between items-center">
            {/* Title Section */}
            <h2 className="lg:text-[65px] md:text-5xl text-3xl font-semibold">
                Testimonials
            </h2>
            <p className="text-[21px] font-normal lg:w-[932px] text-center mt-[30px] mb-[60px]">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
                lectus netus in. Aliquet donec morbi convallis pretium.
            </p>

            {/* Carousel Section */}
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false, // Disable default slide shadows
                }}
                pagination={{
                    clickable: true,

                }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper gap-10 text-black"
            >
                <SwiperSlide className="swiper-slide lg:p-14 bg-[#F8F8F8]">
                    <div className=' flex lg:flex-row flex-col items-center lg:gap-6 justify-center'>
                        <img src={person1} className='lg:w-[235px] w-16 h-16 lg:h-[235px] rounded-full' alt="" />
                        <div>
                            <div className=' flex gap-1 lg:p-0 p-4'>
                                <sup className=' text-orange-500 text-4xl'>,,</sup>
                                <p className=' lg:text-[21px] text-xs lg:text-justify'> Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices. <sub className=' text-orange-500 lg:text-4xl'>,,</sub></p>
                            </div>
                            <div className='lg:p-4 '>
                                <h2 className=' lg:text-2xl text-xs lg:text-start text-center'>Name</h2>
                                <h2 className=' lg:text-[19px] text-xs lg:text-start text-center '>CEO</h2>
                            </div>

                        </div>
                    </div>


                </SwiperSlide >
                <SwiperSlide className="swiper-slide lg:p-14 bg-[#F8F8F8]">
                    <div className=' flex lg:flex-row flex-col items-center lg:gap-6 justify-center'>
                        <img src={person2} className='lg:w-[235px] w-16 h-16 lg:h-[235px] rounded-full' alt="" />
                        <div>
                            <div className=' flex gap-1 lg:p-0 p-4'>
                                <sup className=' text-orange-500 text-4xl'>,,</sup>
                                <p className=' lg:text-[21px] text-xs lg:text-justify'> Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices. <sub className=' text-orange-500 lg:text-4xl'>,,</sub></p>
                            </div>
                            <div className='lg:p-4 '>
                                <h2 className=' lg:text-2xl text-xs lg:text-start text-center'>Name</h2>
                                <h2 className=' lg:text-[19px] text-xs lg:text-start text-center '>CEO</h2>
                            </div>

                        </div>
                    </div>


                </SwiperSlide >
                <SwiperSlide className="swiper-slide lg:p-14 bg-[#F8F8F8]">
                    <div className=' flex lg:flex-row flex-col items-center lg:gap-6 justify-center'>
                        <img src={person1} className='lg:w-[235px] w-16 h-16 lg:h-[235px] rounded-full' alt="" />
                        <div>
                            <div className=' flex gap-1 lg:p-0 p-4'>
                                <sup className=' text-orange-500 text-4xl'>,,</sup>
                                <p className=' lg:text-[21px] text-xs lg:text-justify'> Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices. <sub className=' text-orange-500 lg:text-4xl'>,,</sub></p>
                            </div>
                            <div className='lg:p-4 '>
                                <h2 className=' lg:text-2xl text-xs lg:text-start text-center'>Name</h2>
                                <h2 className=' lg:text-[19px] text-xs lg:text-start text-center '>CEO</h2>
                            </div>
                        </div>
                    </div>
                </SwiperSlide >
                <SwiperSlide className="swiper-slide lg:p-14 bg-[#F8F8F8]">
                    <div className=' flex lg:flex-row flex-col items-center lg:gap-6 justify-center'>
                        <img src={person2} className='lg:w-[235px] w-16 h-16 lg:h-[235px] rounded-full' alt="" />
                        <div>
                            <div className=' flex gap-1 lg:p-0 p-4'>
                                <sup className=' text-orange-500 text-4xl'>,,</sup>
                                <p className=' lg:text-[21px] text-xs lg:text-justify'> Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices. <sub className=' text-orange-500 lg:text-4xl'>,,</sub></p>
                            </div>
                            <div className='lg:p-4 '>
                                <h2 className=' lg:text-2xl text-xs lg:text-start text-center'>Name</h2>
                                <h2 className=' lg:text-[19px] text-xs lg:text-start text-center '>CEO</h2>
                            </div>
                        </div>
                    </div>
                </SwiperSlide >
            </Swiper>
        </section>
    );
};

export default Testimonial;
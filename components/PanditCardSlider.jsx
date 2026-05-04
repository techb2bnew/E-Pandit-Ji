"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";

const data = [
  {
    name: "Sri Raghav Joshi",
    exp: "10+ Years Experience",
    img: "/assets/pandit-profile-5.png",
  },
  {
    name: "Pandit DS Joshi",
    exp: "8+ Years Experience",
    img: "/assets/panditai-ds-joshi.png",
  },
  {
    name: "Pandit Yatharth",
    exp: "9+ Years Experience",
    img: "/assets/yatharth.png",
  },
    {
    name: "Viney Chandra",
    exp: "25+ Years of Experience",
    img: "/assets/achayra-pandit.png",
  },
  {
    name: "Pandit Vidushi",
    exp: "9+ Years Experience",
    img: "/assets/pandit-profile-6.png",
  },
];

const PanditCardSlider = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black px-6 py-14">
      <div className="mx-auto max-w-[1280px] text-center relative">

        {/* Title */}
        <h2 className="text-4xl md:text-[45px] xl:text-[52px] 2xl:text-[64px] leading-[1.05] font-primary text-white">
          Trusted Pandits Near You
        </h2>

        <p className="text-lg xl:text-[20px] 2xl:text-[25px] 2xl:leading-8 font-secondary mb-8 md:mb-14 text-white max-w-6xl mx-auto">
          Connect with highly experienced and trusted pandits who provide authentic Vedic guidance and perform rituals with devotion and precision.
        </p>


        <div className="relative">
            {/* 🔥 Custom SVG Arrows */}
            <div className="custom-prev absolute left-[-10px] top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-[#efe0b3] hover:bg-[#d6b97b] text-black p-3 rounded-full shadow-lg transition flex items-center justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            </div>

            <div className="custom-next absolute right-[-10px] top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-[#efe0b3] hover:bg-[#d6b97b] text-black p-3 rounded-full shadow-lg transition flex items-center justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </div>
            {/* Swiper */}
            <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
            }}
            breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            >
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                <div className="bg-[#efe0b3] shadow-md rounded-2xl p-4 text-center hover:shadow-xl transition duration-300">

                    <div className="w-full h-[300px] overflow-hidden rounded-xl mb-4">
                    <Image
                        width={400}
                        height={400}
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover"
                    />
                    </div>

                    <h3 className="mt-4 text-xl xl:text-2xl font-primary text-black">
                    {item.name}
                    </h3>

                    <p className="text-black text-sm font-semibold mt-1">
                    {item.exp}
                    </p>

                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PanditCardSlider;
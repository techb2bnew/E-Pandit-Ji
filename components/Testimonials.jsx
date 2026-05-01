"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Description from "./Uiux/Description";
import Title from "./Uiux/Title";



export default function Testimonials({testimonials}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const handlePrev = () => {
    setAnimate(false);
    setTimeout(() => {
      setActiveIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
      setAnimate(true);
    }, 150);
  };

  const handleNext = () => {
    setAnimate(false);
    setTimeout(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
      setAnimate(true);
    }, 150);
  };

  const activeTestimonial = testimonials?.[activeIndex];

  return (
    <section className="relative w-full overflow-hidden bg-black px-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-7 inn_container items-center">
        
        {/* LEFT IMAGE */}
        <div className="flex items-center justify-center">
          <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-[34px] border-[1.5px] border-primary bg-black/95 max-md:rounded-[24px] max-md:p-4">
            <Image
              src="/assets/palmistry-hand.png"
              alt="Palmistry hand"
              width={620}
              height={620}
              className="h-full w-full object-contain rounded-[36px]"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col items-center gap-y-5 md:gap-y-8 text-center md:items-start md:text-left">
          
          <div>
            <p className="mb-[10px] text-[26px] font-medium leading-[1.2] text-primary max-md:text-[16px]">
              Testimonials
            </p>

            <Title
              title={"Our Client Say"}
              Class={"text-white"}
            />
          </div>

          {/* TESTIMONIAL CARD */}
          <div className="flex min-h-[290px] w-full flex-col justify-center rounded-[28px] border-[1.5px] border-primary px-12 overflow-hidden">
            
            <div
              className={`transition-all duration-500 ease-in-out ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Image
                src={"/icons/dublequte.svg"}
                alt=""
                width={80}
                height={80}
              />

              <Description
                description={activeTestimonial?.text}
                variant={"secondary"}
                Class={"text-white text-center"}
              />

              <p className="mx-auto mt-[26px] text-center text-[22px] font-bold leading-[1.3] text-white max-md:text-[20px]">
                {activeTestimonial?.name}
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-[26px] flex items-center justify-center gap-[14px] md:justify-start">
            <button
              type="button"
              className="h-[42px] w-[42px] cursor-pointer rounded-[12px] border-[1.5px] border-primary bg-transparent text-[20px] text-primary shadow-[0_0_16px_rgba(245,197,24,0.12)] transition-all duration-200 hover:-translate-y-px hover:bg-[rgba(245,197,24,0.08)]"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              ←
            </button>

            <button
              type="button"
              className="h-[42px] w-[42px] cursor-pointer rounded-[12px] border-[1.5px] border-primary bg-transparent text-[20px] text-primary shadow-[0_0_16px_rgba(245,197,24,0.12)] transition-all duration-200 hover:-translate-y-px hover:bg-[rgba(245,197,24,0.08)]"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
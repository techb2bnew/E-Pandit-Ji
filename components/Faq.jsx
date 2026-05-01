"use client";

import { useState, useRef, useEffect } from "react";
import Title from "./Uiux/Title";
import Description from "./Uiux/Description";
// import Image from "next/image";.
import { IoIosArrowDown } from "react-icons/io";


export default function Faq({faqs}) {
  const [openIndex, setOpenIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Try to play the video
      const playVideo = async () => {
        try {
          await video.play();
          console.log("Video started playing");
        } catch (error) {
          console.log("Video autoplay failed:", error);
        }
      };
      playVideo();
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black  pb-12 xl:pb-16 2xl:pb-18 md:pt-12 xl:pt-16 2xl:pt-18">
      <div className="pointer-events-none absolute bottom-[10px] left-[-20px] h-[240px] w-[240px] bg-[url('/assets/faq/sun-moon-symbol.png')] bg-center bg-contain bg-no-repeat opacity-[0.08] max-md:h-[180px] max-md:w-[180px]" />

      <div className="inn_container grid  lg:grid-cols-[3fr_2fr] 2xl:grid-cols-2 items-center gap-10 ">
        <div className="max-w-full lg:max-w-[780px] relative z-10">
          <p className="mb-[10px] text-[26px] font-medium leading-[1.2] text-[#f5c518] max-md:text-[16px]">
            FAQ’s
          </p>

          <Title
            title={'Quick answers to your mindful queries'}
            Class={'text-white'}
          />


          <div className="mt-4 border-t border-transparent">
            {faqs?.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border-b border-white/20"
                >
                  <button
                    className="flex w-full cursor-pointer items-center justify-between gap-5 bg-transparent px-[4px] py-[22px] text-left max-md:px-1 max-md:py-[18px]"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    type="button"
                  >
                    <span className="text-[24px] 2xl:text-[26px] font-normal leading-[1.4] text-white max-[1200px]:text-[21px] max-md:text-[18px]">
                      {faq.question}
                    </span>
                    <span className={`mt-[2px] transition-all duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                     <IoIosArrowDown className="text-primary text-2xl" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-[4px] pb-[18px]">
                      <Description
                       description={faq.answer}
                       Class={'text-white'}
                       variant={'secondary'}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:relative lg:min-h-[620px] overflow-hidden">
          <div className="absolute inset-0 top-0">
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute left-0 top-0 h-full w-full object-cover opacity-35 lg:opacity-100"
            >
              <source
                src="/assets/videos/0_Earth_Planet_1080x1920.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
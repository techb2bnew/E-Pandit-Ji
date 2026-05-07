import React from "react";
import Title from "./Uiux/Title";
import Description from "./Uiux/Description";
import Button from "./Uiux/Button";
import MobileBannerBar from "./Uiux/MobileBannerBar";

const ContactUsBanner = () => {
  return (
    <div>
      
      <section className="relative md:min-h-[500px] 2xl:min-h-[620px] overflow-hidden bg-[url('/assets/contactus.png')] bg-cover bg-center bg-no-repeat pb-[120px] pt-[190px] max-[991px]:min-h-0 max-[991px]:pb-12 max-[991px]:pt-[140px]">
        {/* <div className="absolute inset-0 z-1 bg-black/70" /> */}
        <MobileBannerBar />
        <div className="relative z-2 mx-auto max-w-[1400px] px-6 text-center pt-10 md:pt-16 2xl:pt-28 md:pb-12 2xl:pb-16">
          <p className="text-primary text-xl md:text-2xl 2xl:text-[26px] font-semibold mb-4">
            Trusted By 10k+ Users...
          </p>

          <Title
            title={
              "Contact Us"
            }
            Class={"text-white"}
          />
            <p className="mt-4 xl:mt-6 text-white text-base md:text-lg xl:text-xl 2xl:text-2xl font-primary font-normal">
            Contact ई-Pandit jee for astrology guidance, kundli matching, and remedies. Reach us easily for personalized solutions, expert advice, and spiritual support for your life.

            </p>
          {/* <Description
            description={
              "Contact ई-Pandit ji for astrology guidance, kundli matching, and remedies. Reach us easily for personalized solutions, expert advice, and spiritual support for your life."
            }
            Class={"text-white max-w-6xl mx-auto text-base md:text-lg xl:text-xl 2xl:text-2xl font-primary font-normal"}
          /> */}

          {/* <div className="pt-8">
            <Button
              button_name={"Calculate My Number"}
              variant={"primary"}
              Class={"text-black"}
            />

            <p className="text-[20px] text-white max-[991px]:text-[16px] pt-3">
              100% private | Fast delivery
            </p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default ContactUsBanner;

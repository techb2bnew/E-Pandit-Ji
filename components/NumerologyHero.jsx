"use client";

import Link from "next/link";
import Button from "./Uiux/Button";
import Description from "./Uiux/Description";
import MobileBannerBar from "./Uiux/MobileBannerBar";
import Title from "./Uiux/Title";

export default function NumerologyHero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden pb-[120px] pt-[190px] max-[991px]:min-h-0 max-[991px]:pb-1 max-[991px]:pt-[140px]">

      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/videos/numberpopup.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60 z-[1]" />

      <div className="relative z-[2] inn_container text-center md:pt-22 md:pb-16">
        <MobileBannerBar />

        <p className="text-primary text-xl md:text-2xl 2xl:text-[26px] font-semibold mb-4 pt-12">
          Trusted by 25k Users
        </p>

        <Title
          title={
            "Check Which Numbers <span class='text-primary'> Work </span> in Favour of You"
          }
        />

        <Description
          description={
            "Numbers influence your life, shaping decisions, guiding choices, and affecting future success, happiness, relationships, and personal growth in meaningful ways."
          }
          Class={"text-white max-w-5xl mx-auto"}
        />

        <div className="pt-8">
          <Link href={"/numerology#numerology_card"}>
            <Button
              button_name={"Get Your Life Path Number"}
              variant={"primary"}
              Class={"text-black"}
            />
          </Link>

          <p className="text-[20px] text-white max-[991px]:text-[16px] pt-3">
            100% private | Fast delivery
          </p>
        </div>
      </div>
    </section>
  );
}
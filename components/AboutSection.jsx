import Image from "next/image";
import Title from "./Uiux/Title";
import Description from "./Uiux/Description";
import Button from "./Uiux/Button";

export default function AboutSection() {
  return (
    <section className="relative  flex xl:min-h-[76vh] items-center overflow-hidden bg-black py-12 !pb-0 md:pb-auto xl:py-16 2xl:py-20">
      <div className="inn_container w-full">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover scale-[3]"
          >
            <source
              src="/assets/videos/GettyImages-1071921688.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-2 mx-auto grid w-full  grid-cols-[2.5fr_3fr] items-center gap-10 max-[991px]:grid-cols-1  ">
          <div className="relative hidden md:flex aspect-square w-full  items-center justify-center overflow-hidden rounded-full bg-black">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-[115%] w-[115%] object-cover"
            >
              <source
                src="/assets/videos/0_Cosmic_Sky_2160x3840.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="relative z-2 text-white md:max-w-[90%] mx-auto text-center md:text-start">
            <p className="mb-[14px] text-xl xl:text-2xl 2xl:text-[26px] font-secondary font-semibold uppercase text-[#f4c400]">
              About us
            </p>

            <Title title={"Guiding Your Life Through Grah and Nakshatra"} />

            <Description
              description={
                "For 3+ years, ePandit Ji has guided lives through Grah and Nakshatra with accurate insights, helping you make confident decisions with clarity and trust."
              }
              Class={"text-white"}
            />

            <div className="mt-8">
              <Button
                variant={"secondary"}
                button_name={"Explore Your Future"}
                Class={"text-primary"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

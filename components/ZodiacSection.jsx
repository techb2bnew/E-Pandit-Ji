import Image from "next/image";
import Title from "./Uiux/Title";
import Description from "./Uiux/Description";
import Button from "./Uiux/Button";
import ZodiacCards from "./ZodiacCards";

const zodiacCards = [
  {
    name: "Leo",
    image: "/assets/leo.png"
  },
  {
    name: "Virgo",
    image: "/assets/virgo.png",
    active: true
  },
  {
    name: "libra",
    image: "/assets/libra.png"
  },
  {
    name: "Scorpio",
    image: "/assets/scorpio.png"
  }
];

const stats = [
  {
    image: "/assets/moonwithring.png",
    alt: "Trusted by Million Clients",
    label: "Kundali Matches Successfully Made",
    stats : '20K'
  },
  {
    image: "/assets/moonwithring.png",
    alt: "Years of Experience",
    label: "Years of Trusted Astrology Experience",
    stats : '15+'
  },
  {
    image: "/assets/moonwithring.png",
    alt: "Types of Horoscopes",
    label: "Expert Astrologers & Numerologist ",
    stats : '50+'
  },
  {
    image: "/assets/moonwithring.png",
    alt: "Qualified Astrologers",
    label: "Accurate Horoscope Predictions",
    stats : '99%'
  },
  {
    image: "/assets/moonwithring.png",
    alt: "Success Horoscope",
    label: "Happy Clients Guided Worldwide",
    stats : '1M'
  }
];

export default function ZodiacSection() {
  const handleDailyHoroscopeClick = () => {
    if (typeof window === "undefined") return;
    const el = document.getElementById("daily-horoscope-tabs");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <section className="relative min-h-[1000px] w-full overflow-hidden bg-black pt-8 xl:pt-14 2xl:pt-18 pb-12 xl:pb-14 2xl:pb-18">
      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover object-[center_70%] opacity-[0.72] brightness-[0.78] contrast-[1.08] saturate-[1.05] scale-[1.04]"
        >
          <source
            src="/assets/videos/0_Space_Planet_3840x2160.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.52)_32%,rgba(0,0,0,0.28)_58%,rgba(0,0,0,0.5)_82%,rgba(0,0,0,0.86)_100%)]" />
      </div>

      <div className="relative z-2 inn_container">
        {/* Top content */}
        <div className="grid 2xl:grid-cols-2 items-start gap-7 " id="Zodiac">
          <div className="text-center md:text-start">
            <p className="mb-3 text-2xl 2xl:text-[26px] font-medium leading-[1.2] text-primary max-md:text-[16px]">
              Horoscope Predictions
            </p>
            <Title title={"Select Your Zodiac Sign"} />

            <h3 className="mt-2 text-2xl md:text-3xl 2xl:text-[33px] font-primary leading-[1.2] text-primary max-[1280px]:text-[28px] max-md:text-[22px]">
              Know What Your Horoscope Sign Says About You
            </h3>
            <Description
              description={`Get Accurate, Detailed Horoscope Insights Tailored Just For You. Click on your Rashi to get daily, weekly, monthly, and yearly predictions, plus guidance on personality, career growth, health, marriage, and life decisions.`}
              Class={"text-white pt-4"}
              variant={"secondary"}
            />
          </div>

          <div className="flex items-center justify-center h-full">
            {/* <div className=" flex justify-center gap-3 2xl:pt-10"> */}
              <Button
                variant={"primary"}
                button_name={"Daily Horoscope"}
                Class={"text-black"}
                onClick={handleDailyHoroscopeClick}
              />
              {/* <Button
                variant={"primary"}
                button_name={"Weekly Horoscope"}
                Class={"text-black"}
              />
              <Button
                variant={"primary"}
                button_name={"Monthly Horoscope"}
                Class={"text-black"}
              />
              <Button
                variant={"secondary"}
                button_name={"Yearly Horoscope"}
                Class={"text-primary"}
              /> */}
            {/* </div> */}
          </div>
        </div>

        {/* Zodiac cards area */}
        <ZodiacCards />

        {/* Bottom stats */}

      </div>
      <div className="md:pt-14  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 relative">
        {stats.map((item, index) =>
          <div
            key={index}
            className="flex md:min-h-[190px] flex-col items-center justify-start border-r border-white/10 px-[18px] pb-3 pt-8 text-center max-[992px]:border-b max-[992px]:last:border-b-0 max-[992px]:odd:border-r max-[992px]:even:border-r-0 max-md:border-b max-md:border-r-0 max-md:last:border-b-0"
          >
            <div className="relative">
              <Image
                src={item.image}
                alt={item.alt}
                width={1000}
                height={500}
                className="max-w-[80%] mx-auto"
              />
              <span className="text-2xl md:text-4xl absolute w-full h-full left-0 top-0 flex justify-center items-center font-primary">
                {item.stats}
              </span>
            </div>
            <p className="mt-[14px] max-w-[80%] whitespace-pre-line text-base  md:text-lg lg:text-xl xl:text-[22px] 2xl:text-[26px] 2xl:leading-9 text-white">
              {item.label}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

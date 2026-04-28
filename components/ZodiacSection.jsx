import Image from "next/image";
import Title from "./Uiux/Title";
import Description from "./Uiux/Description";
import Button from "./Uiux/Button";

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
    label: "Trusted by\nMillion Clients",
    stats : '1M+'
  },
  {
    image: "/assets/moonwithring.png",
    alt: "Years of Experience",
    label: "Years of \n Experience",
    stats : '20+'
  },
  {
    image: "/assets/moonwithring.png",
    alt: "Types of Horoscopes",
    label: "Types of  \nHoroscopes",
    stats : '50+'
  },
  {
    image: "/assets/moonwithring.png",
    alt: "Qualified Astrologers",
    label: "Qualified  \nAstrologers",
    stats : '99+'
  },
  {
    image: "/assets/moonwithring.png",
    alt: "Success Horoscope",
    label: "Success \n Horoscope",
    stats : '99+'
  }
];

export default function ZodiacSection() {
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
        <div className="grid 2xl:grid-cols-2 items-start gap-7 ">
          <div className="text-center 2xl:text-center">
            <p className="mb-3 text-2xl 2xl:text-[26px] font-medium leading-[1.2] text-primary max-md:text-[16px]">
              Click To Choose
            </p>
            <Title title={"Choose Your Zodiac Sign"} />

            <h3 className="mt-2 text-2xl md:text-3xl 2xl:text-[33px] font-primary leading-[1.2] text-primary max-[1280px]:text-[28px] max-md:text-[22px]">
              Know What Your Horoscope Sign Says About You
            </h3>
            <Description
              description={`Click on your Rashi to know about your Personality, Traits, Life
              Predictions, and Remedies — including Daily, Weekly, Monthly, and
              Yearly Horoscope 2026 insights!`}
              Class={"text-white pt-4"}
              variant={"secondary"}
            />
          </div>

          <div className="flex items-center justify-center 2xl:justify-start h-full">
            <div className="grid md:grid-cols-2 gap-6 2xl:pt-10">
              <Button
                variant={"primary"}
                button_name={"Daily Horoscope"}
                Class={"text-black"}
              />
              <Button
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
              />
            </div>
          </div>
        </div>

        {/* Zodiac cards area */}
        <div className="mt-20 grid grid-cols-1 items-center gap-4 max-[992px]:gap-4 md:grid-cols-[64px_1fr_64px] md:gap-[26px]">
          <button
            className="hidden h-[58px] w-[58px] cursor-pointer rounded-[14px] border-[1.5px] border-primary bg-[rgba(10,10,10,0.78)] text-[28px] text-primary shadow-[0_0_22px_rgba(245,197,24,0.18)] md:inline-flex md:items-center md:justify-center max-[992px]:hidden"
            aria-label="Previous zodiac"
          >
            ←
          </button>

          <div className="grid grid-cols-4 items-center gap-[26px] max-[1280px]:gap-[18px] max-[992px]:grid-cols-2 max-md:grid-cols-1">
            {zodiacCards.map(card =>
              <div
                key={card.name}
                className={`flex min-h-[320px] flex-col items-center justify-center rounded-[34px] border-[1.5px] border-[rgba(245,197,24,0.88)] bg-[rgba(10,10,10,0.42)] px-[18px] pb-5 pt-7 shadow-[0_0_18px_rgba(245,197,24,0.08)] backdrop-blur-xs [-webkit-backdrop-filter:blur(4px)] max-[1280px]:min-h-[280px] max-md:min-h-[250px] max-md:rounded-[24px] ${card.active
                  ? "shadow-[0_0_18px_rgba(245,197,24,0.35),0_0_36px_rgba(245,197,24,0.16)]"
                  : ""} ${card.name === "Leo"
                    ? "rotate-[-7deg] max-md:rotate-0"
                    : card.name === "Virgo"
                      ? "rotate-0"
                      : card.name === "libra"
                        ? "rotate-[-4deg] max-md:rotate-0"
                        : "rotate-[7deg] max-md:rotate-0"}`}
              >
                <div className="flex min-h-[190px] items-center justify-center">
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={180}
                    height={180}
                    className="h-auto w-full max-w-[180px] object-contain max-md:max-w-[140px]"
                  />
                </div>
                <p className="mt-[10px] text-center text-[28px] font-medium leading-[1.2] text-primary max-[1280px]:text-[24px] max-md:text-[22px]">
                  {card.name}
                </p>
              </div>
            )}
          </div>

          <button
            className="hidden h-[58px] w-[58px] cursor-pointer rounded-[14px] border-[1.5px] border-primary bg-[rgba(10,10,10,0.78)] text-[28px] text-primary shadow-[0_0_22px_rgba(245,197,24,0.18)] md:inline-flex md:items-center md:justify-center max-[992px]:hidden"
            aria-label="Next zodiac"
          >
            →
          </button>
        </div>

        {/* Bottom stats */}

      </div>
      <div className="pt-12 md:pt-20 2xl:pt-30 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 relative">
        {stats.map((item, index) =>
          <div
            key={index}
            className="flex min-h-[190px] flex-col items-center justify-start border-r border-white/10 px-[18px] pb-3 pt-8 text-center max-[992px]:border-b max-[992px]:last:border-b-0 max-[992px]:odd:border-r max-[992px]:even:border-r-0 max-md:border-b max-md:border-r-0 max-md:last:border-b-0"
          >
            <div className="relative">
              <Image
                src={item.image}
                alt={item.alt}
                width={1000}
                height={500}
                className="max-w-[80%] mx-auto"
              />
              <span className="text-4xl absolute w-full h-full left-0 top-0 flex justify-center items-center font-primary">
                {item.stats}
              </span>
            </div>
            <p className="mt-[14px] max-w-[180px] whitespace-pre-line text-base  md:text-lg lg:text-xl xl:text-[22px] 2xl:text-[26px] 2xl:leading-9 text-white">
              {item.label}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

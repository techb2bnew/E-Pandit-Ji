import Image from "next/image";
import Link from "next/link";
import Title from "./Uiux/Title";
import Description from "./Uiux/Description";

const services = [
  {
    title: "Janam Kundli",
    image: "/assets/kundli.png",
    href: "/kundli",
    isComingSoon: false,
  },
  {
    title: "Numerology Calculation",
    image: "/assets/numerology.png",
    href: "/numerology",
    isComingSoon: false,
  },
  {
    title: "Couple Match Making",
    image: "/assets/match-making.png",
    href: "/match-making",
    isComingSoon: true,
  },
  {
    title: "Vedic Remedies",
    image: "/assets/remedy.png",
    href: "/remedy",
    isComingSoon: true,
  },
];

export default function OurServicesSection({ title, description }) {
  return (
    <section className="w-full md:px-6 md:pb-14 2xl:pt-14">
      <div className="inn_container text-center">
        <p className="mb-2 text-xl md:text-[22px] xl:text-2xl 2xl:text-[26px] text-primary font-secondary">
          Click To Choose
        </p>

        <Title title={title ? title : "Our Vedic Astrology Services"} />

        <Description
          description={
            description
              ? description
              : `Understand your life better with our Vedic astrology services, offering deep insights into your personality, relationships, career, and future, helping you make confident decisions with clarity and trusted guidance.`
          }
          Class={"text-white max-w-6xl mx-auto"}
        />

        <div className="mt-8 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-[80%] md:max-w-7xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="relative flex flex-col items-center">
              
              {/* Coming Soon Badge */}
              {service.isComingSoon && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 text-[10px] px-2 py-[2px] rounded bg-red-500 text-white animate-pulse whitespace-nowrap">
                  Coming Soon
                </span>
              )}

              <Link
                href={service.isComingSoon ? "#" : service.href}
                onClick={(e) => {
                  if (service.isComingSoon) e.preventDefault();
                }}
                className="group flex flex-col items-center w-full h-full"
              >
                <div className="flex aspect-square w-full items-center justify-center rounded-[18px] bg-[#efe0b3] p-[18px] transition-[transform,box-shadow] duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_12px_28px_rgba(245,197,24,0.12)] max-w-[70%] md:max-w-[220px] max-md:rounded-[16px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={240}
                    height={240}
                    className="h-full w-full object-contain"
                  />
                </div>

                <p className="mt-4 text-xl xl:text-2xl font-primary">
                  {service.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
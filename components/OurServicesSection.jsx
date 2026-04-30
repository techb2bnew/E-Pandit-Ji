import Image from "next/image";
import Link from "next/link";
import Title from "./Uiux/Title";
import Description from "./Uiux/Description";


const services = [
  {
    title: "Kundli",
    image: "/assets/kundli.png",
    href: "/kundli",
  },
  {
    title: "Numerology",
    image: "/assets/numerology.png",
    href: "/numerology",
  },
  {
    title: "Match Making",
    image: "/assets/match-making.png",
    href: "/match-making",

  },
  {
    title: "Remedy",
    image: "/assets/remedy.png",
    href: "/remedy",
  },
];

export default function OurServicesSection() {
  return (
    <section className="w-full bg-black md:px-6 md:pb-14 xl:pt-14">
      <div className="inn_container text-center">
        <p className="mb-2 text-xl md:text-[22px] xl:text-2xl 2xl:text-[26px] text-primary font-secondary">
          Click To Choose
        </p>

        <Title
          title={'Our Services'}
        />

       <Description
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.`}
        Class={'text-white max-w-7xl mx-auto'}
        />

        <div className="mt-8 md:mt-14  grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-[80%] md:max-w-7xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col items-center"
            >
              <div className="flex aspect-square w-full  items-center justify-center rounded-[18px] bg-[#efe0b3] p-[18px] transition-[transform,box-shadow] duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_12px_28px_rgba(245,197,24,0.12)] max-w-[70%] md:max-w-[220px] max-md:rounded-[16px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={240}
                  height={240}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="mt-4 text-xl xl:text-2xl 2xl:text-3xl font-primary">
                {service.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
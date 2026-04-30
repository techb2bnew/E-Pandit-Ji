import {
  ArrowRight,
  Stars,
  Sparkles,
  HeartHandshake,
  Flower2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Janam Kundli",
    icon: "/icons/houses12.svg",
    href: "/kundli"
  },
  {
    title: "Numerology Calculation",
    icon: "/icons/numerology.svg",
    href: "/numerology"
  },
  {
    title: "Couple Match Making ",
    icon: "/icons/wedding.svg",
    href: "/match-making"
  },
  {
    title: "Vedic Remedies",
    icon: "icons/medicine.svg",
    href: "/remedy"
  }
];

export default function ServicesStrip() {
  return (
    <section className="relative z-5 mt-[-34px] w-full bg-black px-6 max-md:mt-0 max-md:px-4 max-md:pt-5 inn_container">
      <div className="mx-auto grid  grid-cols-4 gap-[18px] rounded-[28px] bg-[#efe0b3] p-[26px] shadow-[0_10px_30px_rgba(0,0,0,0.16)] max-[1200px]:grid-cols-2 max-md:grid-cols-1 max-md:gap-[14px] max-md:rounded-[20px] max-md:p-4">
        {services.map(service =>
          <Link href={service.href}>
            <button
              key={service.title}
              className="flex py-3 md:py-4 cursor-pointer items-center w-full justify-between gap-4 rounded-[22px] border-[1.5px] border-[#cfcfcf] bg-[#e9e9e9] px-[26px] transition-[transform,box-shadow] duration-200 hover:translate-y-[-2px] hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)] max-md:rounded-[18px] max-md:px-[18px]"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="inline-flex p-2 shrink-0 items-center justify-center rounded-full bg-primary text-[#111111] h-[38px] w-[38px]">
                  <Image
                    src={service.icon}
                    alt=""
                    width={40}
                    height={40}
                    className=""
                  />
                </span>
                <span className="whitespace-nowrap font-primary text-xl  leading-[1.1] text-[#111111] max-md:text-[18px]">
                  {service.title}
                </span>
              </div>

              <span className="inline-flex shrink-0 items-center justify-center text-[#111111]">
                <ArrowRight size={24} strokeWidth={2.1} />
              </span>
            </button>
          </Link>
        )}
      </div>
    </section>
  );
}

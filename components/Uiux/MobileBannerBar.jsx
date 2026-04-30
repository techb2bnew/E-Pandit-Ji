
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
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
const MobileBannerBar = () => {
  return (
    <div className='block md:hidden'>
      <div className="grid grid-cols-4 gap-1 md:gap-3 max-w-7xl mx-auto max-w-[95%]">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col items-center"
            >
              <div className="flex aspect-square w-full  max-w-[85%]  items-center justify-center rounded-[18px] bg-[#efe0b3] p-2 md:p-[18px] transition-[transform,box-shadow] duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_12px_28px_rgba(245,197,24,0.12)]  max-md:rounded-[16px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={240}
                  height={240}
                  className="h-full w-full max-w-[80%] mx-auto object-contain"
                />
              </div>
              <p className="mt-2 text-[10px]">
                {service.title}
              </p>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default MobileBannerBar

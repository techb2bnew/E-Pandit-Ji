import React from "react";
import Image from "next/image";
import Title from "@/components/Uiux/Title";
import Description from "@/components/Uiux/Description";
import MobileBannerBar from "./Uiux/MobileBannerBar";
export const AboutUsBanner = () => {
  return (
    <main className="overflow-x-hidden">
      <section className="relative w-full  flex items-center overflow-hidden pt-32.5 md:pt-40">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/glaxysat.png"
            alt="About us background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        <div className="inn_container w-full relative z-10  md:pt-10">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] items-end gap-0 lg:gap-8 2xl:gap-14 gap-y-8">
            <div className="text-white text-center lg:text-start order-2 lg:order-1 pb-12 md:pb-16  self-center">
              <p className="text-primary text-xl md:text-2xl 2xl:text-[26px] font-semibold mb-4">
                Trusted By 10k+ Users...
              </p>

              <Title
                title={`About Us <span style="color:#ffd700">E-Pandit Ji</span>`}
                isH1
                Class="text-white"
              />

              <div className="mt-5 md:mt-7 space-y-4">
                <Description
                  description="At e-Pandit Ji, we bring the timeless wisdom of Vedic astrology and numerology into the modern digital era. Our mission is to empower individuals with accurate insights about their life, helping them make confident decisions and move forward with clarity and purpose."
                  Class="text-white/80"
                  variant="secondary"
                />
                <Description
                  description="We understand that every person's journey is unique. That's why we focus on delivering personalized astrology solutions based on your birth details. From Kundli (Janam Kundli) creation to numerology analysis and life guidance, our platform is designed to provide deep, meaningful, and easy-to-understand predictions."
                  variant="secondary"
                  Class="text-white/80"
                />
                <Description
                  description="Our system uses advanced calculation methods combined with traditional astrological principles to generate highly accurate reports. Every Kundli is carefully prepared using your date, time, and place of birth, ensuring precise planetary positions and authentic results."
                  variant="secondary"
                  Class="text-white/80"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <MobileBannerBar />
              <div className="relative flex justify-center items-end  self-end pt-6 md:pt-0">

                <Image
                  src="/assets/about_us_banner22.png"
                  alt="E-Pandit Ji Astrologer"
                  width={1000}
                  height={720}
                  className=""
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

const aboutcontent = [
  {
    title: "Our Expertise",
    description:
      "At e-Pandit Ji, we specialize in a wide range of astrology services that help you understand different aspects of your life:",
    keypoint: [
      "Kundli Generation: Detailed and accurate birth charts",
      "Numerology Analysis: Discover the power of numbers in your life",
      "Career Guidance: Make informed professional decisions",
      "Marriage & Relationship Insights: Understand compatibility and harmony",
      "Astrological Remedies: Practical solutions for life challenges"
    ],
    descriptionlower:
      "Our goal is to provide complete life guidance through astrology, not just predictions.",
    image: "/assets/aboutpandit1.png",
    side: 'left'
  },
  {
    title: "Our Approach",
    description:
      "We believe that astrology should be simple, accessible, and reliable. That’s why we have built a platform that combines:",
    keypoint: [
      "Traditional Vedic knowledge",
      "Modern technology & automation",
      "Instant report generation",
      "User-friendly experience"
    ],
    descriptionlower:
      "With just a few details, you can get your Kundli and predictions instantly, without any complexity.",
    image: "/assets/aboutpandit2.png",
    side: 'right'
  },
  {
    title: "Why Choose e-Pandit Ji",
    description:
      "Choosing the right astrology platform is important. At e-Pandit Ji, we stand out because of our commitment to quality and trust:",
    keypoint: [
      "Accurate and authentic calculations",
      "Fast and instant results",
      "100% secure and private data",
      "Easy-to-understand reports",
      "Expert-backed insights and guidance"
    ],
    descriptionlower:
      "We are dedicated to delivering results that truly add value to your life.",
    image: "/assets/aboutpandit3.png",
    side: 'left'
  },
  {
    title: "Our Vision",
    description:
      "Our vision is to make astrology a trusted and essential tool for everyone. We aim to help people:",
    keypoint: [
      "Understand their strengths and weaknesses",
      "Make better life decisions",
      "Overcome challenges with confidence",
      "Achieve success, happiness, and peace"
    ],
    descriptionlower:
      "We believe that the answers you seek are already written in the stars — and at e-Pandit Ji, we help you discover them.",
    image: "/assets/aboutpandit4.png",
    side: 'right'
  }
];

export default function AboutUsContent() {
  return (
    <div className="bg-[url(/assets/glaxybg.webp)] bg-cover ">
      <div className="inn_container pb-14 md:pt-14 space-y-10 md:space-y-16">
        {
          aboutcontent.map((data, index) => {
            return (
              <div className="">
                {
                  data.side === 'left' ?
                    <div key={index} className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-y-10 md:gap-5">
                      <div className="border-2 border-primary rounded-2xl h-fit my-auto md:max-w-[80%] mx-auto">
                        <Image
                          src={data.image}
                          alt=""
                          width={1000}
                          height={500}
                          className="max-w-[90%] mx-auto"
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="xl:max-w-[90%] text-center">
                          <Title title={data.title} Class={"text-white"} />
                          <Description
                            description={data.description}
                            Class={"text-white"}
                          />

                          <div className="pt-6 space-y-3 ps-7 lg:ps-10">
                            {data.keypoint.map((item, index) =>
                              <li className="font-secondary text-xl text-white" key={index}>
                                {item}
                              </li>
                            )}
                          </div>

                          <Description
                            description={data.descriptionlower}
                            Class={"text-white mt-4"}
                          />
                        </div>
                      </div>
                    </div>
                    :
                    <div key={index} className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-y-10 md:gap-5">
                      <div className="flex justify-center items-center order-2 md:order-1">
                        <div className="xl:max-w-[90%] text-center">
                          <Title title={data.title} Class={"text-white"} />
                          <Description
                            description={data.description}
                            Class={"text-white"}
                          />

                          <div className="pt-6 space-y-3 ps-7 lg:ps-10">
                            {data.keypoint.map((item, index) =>
                              <li className="font-secondary text-xl text-white" key={index}>
                                {item}
                              </li>
                            )}
                          </div>

                          <Description
                            description={data.descriptionlower}
                            Class={"text-white mt-4"}
                          />
                        </div>
                      </div>
                      <div className="border-2 border-primary rounded-2xl h-fit my-auto md:max-w-[80%] mx-auto order-1 md:order-2">
                        <Image
                          src={data.image}
                          alt=""
                          width={1000}
                          height={500}
                          className="max-w-[90%] mx-auto"
                        />
                      </div>
                    </div>
                }
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

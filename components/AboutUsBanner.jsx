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
                title={`About Us – <span style="color:#ffd700">ई-Pandit ji</span>`}
                isH1
                Class="text-white"
              />

              <div className="mt-5 md:mt-7 space-y-4">
                <Description
                  description="ई-Pandit ji is dedicated to bringing authentic Vedic astrology to everyone in a simple, practical, and meaningful way. Our vision is to guide individuals toward clarity, peace, and long-term success by using ancient astrological wisdom in a modern and easy-to-understand form."
                  Class="text-white/80"
                  variant="secondary"
                />
                <Description
                  description="We aim to help people make better life decisions through accurate predictions and trusted spiritual guidance that truly improves their life journey."
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
    title: "Who We Are",
    description:
      "We are a team of experienced astrologers, Vedic scholars, and spiritual consultants who are passionate about helping people find solutions to life challenges. ई-Pandit ji combines traditional Vedic knowledge with a modern approach to deliver clear and reliable guidance. Our experts carefully study each kundli and provide deep insights related to marriage, career, health, relationships, and financial stability. We believe in honest consultation that brings real value and trust to every individual.",
    // keypoint: [
    //   "Kundli Generation: Detailed and accurate birth charts",
    //   "Numerology Analysis: Discover the power of numbers in your life",
    //   "Career Guidance: Make informed professional decisions",
    //   "Marriage & Relationship Insights: Understand compatibility and harmony",
    //   "Astrological Remedies: Practical solutions for life challenges"
    // ],
    // descriptionlower:
    //   "Our goal is to provide complete life guidance through astrology, not just predictions.",
    image: "/assets/aboutpandit1.png",
    side: 'left'
  },
  {
    title: "What We Offer",
    description:
      "At ई-Pandit ji, we offer a wide range of astrology and spiritual services including kundli matching, numerology reports, gemstone suggestions, mantra chanting guidance, yantra solutions, and Vedic remedies.",
    // keypoint: [
    //   "Traditional Vedic knowledge",
    //   "Modern technology & automation",
    //   "Instant report generation",
    //   "User-friendly experience"
    // ],
    descriptionlower:
      " Every service is personalized according to your birth chart to ensure maximum accuracy and effectiveness. Our solutions are designed to help reduce life obstacles, improve opportunities, and bring balance in personal and professional life. We focus on providing practical remedies that are easy to follow and deliver meaningful results.",
    image: "/assets/aboutpandit2.png",
    side: 'right'
  },
  {
    title: "Our Approach",
    description:
      "Our approach is simple, detailed, and completely client-focused. We begin by carefully analyzing your kundli and identifying planetary influences that affect different areas of your life. Based on this analysis, we suggest effective and easy-to-follow Vedic remedies that fit your situation. We ensure that every guidance is practical, clear, and result-oriented. Our goal is to make astrology understandable and useful for everyone so that people can apply it in daily life with confidence and clarity.",
    // keypoint: [
    //   "Accurate and authentic calculations",
    //   "Fast and instant results",
    //   "100% secure and private data",
    //   "Easy-to-understand reports",
    //   "Expert-backed insights and guidance"
    // ],
    // descriptionlower:
    //   "We are dedicated to delivering results that truly add value to your life.",
    image: "/assets/aboutpandit3.png",
    side: 'left'
  },
  {
    title: "Our Commitment",
    description:
      "At ई-Pandit ji, we are fully committed to honesty, accuracy, and spiritual authenticity in every consultation. We value trust and ensure that every client receives genuine and meaningful guidance without confusion or false promises. Our mission is to empower individuals with knowledge, positivity, and direction so they can overcome challenges and live a peaceful, successful, and fulfilling life. We continuously strive to improve our services and provide the best possible astrological support for long-term well-being.",
    // keypoint: [
    //   "Understand their strengths and weaknesses",
    //   "Make better life decisions",
    //   "Overcome challenges with confidence",
    //   "Achieve success, happiness, and peace"
    // ],
    // descriptionlower:
    //   "We believe that the answers you seek are already written in the stars — and at e-Pandit Ji, we help you discover them.",
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
                        <div className="xl:max-w-[90%] text-center md:text-left">
                          <Title title={data.title} Class={"text-white"} />
                          <Description
                            description={data.description}
                            Class={"text-white md:ps-4"}
                          />

                          {
                            data?.keypoint && (
                              <div className="pt-6 space-y-3 ps-7 lg:ps-10">
                                {data.keypoint.map((item, index) =>
                                  <li className="font-secondary text-xl text-white" key={index}>
                                    {item}
                                  </li>
                                )}
                              </div>
                            )
                          }

                          <Description
                            description={data.descriptionlower}
                            Class={"text-white mt-4 md:ps-4"}
                          />
                        </div>
                      </div>
                    </div>
                    :
                    <div key={index} className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-y-10 md:gap-5">
                      <div className="flex justify-center items-center order-2 md:order-1">
                        <div className="xl:max-w-[90%] text-center md:text-left">
                          <Title title={data.title} Class={"text-white"} />
                          <Description
                            description={data.description}
                            Class={"text-white md:ps-4"}
                          />

                           {
                            data?.keypoint && (
                              <div className="pt-6 space-y-3 ps-7 lg:ps-10">
                                {data.keypoint.map((item, index) =>
                                  <li className="font-secondary text-xl text-white" key={index}>
                                    {item}
                                  </li>
                                )}
                              </div>
                            )
                          }

                          <Description
                            description={data.descriptionlower}
                            Class={"text-white mt-4 md:ps-4"}
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

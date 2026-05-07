"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

const ALL_ZODIAC = [
  {
    name: "Aries",
    image: "/assets/aries.png",
    activeImage: "/assets/aries_black.png",
    description:
      "Aries is a fire sign known for confidence, leadership, and energy."
  },
  {
    name: "Taurus",
    image: "/assets/tauraus.png",
    activeImage: "/assets/tauraus_black.png",
    description:
      "Taurus is an earth sign that represents stability, comfort, and loyalty."
  },
  {
    name: "Gemini",
    image: "/assets/gemini.png",
    activeImage: "/assets/gemini_black.png",
    description:
      "Gemini is an air sign known for communication, intelligence, and adaptability."
  },
  {
    name: "Cancer",
    image: "/assets/cancer.png",
    activeImage: "/assets/cancer_black.png",
    description:
      "Cancer is a water sign associated with emotions, care, and intuition."
  },
  {
    name: "Leo",
    image: "/assets/leo.png",
    activeImage: "/assets/leo_black.png",
    description:
      "Leo is a fire sign known for confidence, creativity, and leadership."
  },
  {
    name: "Virgo",
    image: "/assets/virgo.png",
    activeImage: "/assets/virgo_black.png",
    description:
      "Virgo is an earth sign known for precision, practicality, and discipline."
  },
  {
    name: "Libra",
    image: "/assets/libra.png",
    activeImage: "/assets/libra_black.png",
    description:
      "Libra is an air sign that values balance, harmony, and relationships."
  },
  {
    name: "Scorpio",
    image: "/assets/scorpio.png",
    activeImage: "/assets/Scorpio_black.png",
    description:
      "Scorpio is a water sign known for intensity, passion, and transformation."
  },
  {
    name: "Sagittarius",
    image: "/assets/sagittarius.png",
    activeImage: "/assets/Sagittarius_black.png",
    description:
      "Sagittarius is a fire sign known for adventure, optimism, and freedom."
  },
  {
    name: "Capricorn",
    image: "/assets/capricorn.png",
    activeImage: "/assets/Capicorn_black.png",
    description:
      "Capricorn is an earth sign known for ambition, discipline, and responsibility."
  },
  {
    name: "Aquarius",
    image: "/assets/aquarius.png",
    activeImage: "/assets/Aquarius_black.png",
    description:
      "Aquarius is an air sign known for innovation, independence, and vision."
  },
  {
    name: "Pisces",
    image: "/assets/pisces.png",
    activeImage: "/assets/Pisces_black.png",
    description:
      "Pisces is a water sign known for empathy, imagination, and spirituality."
  }
];
const horoscopeTabs = [
  {
    title: "Personal Life",
    rating: "7/10",
    text:
      "A surprising twist could unfold at work, hinting at an unexpected romantic interest from a colleague. If the feeling is mutual, this connection may feel deeply fulfilling."
  },
  {
    title: "Profession",
    rating: "6/10",
    text:
      "An innovative idea catches your attention. Instead of rushing, gather more insights before making bold professional decisions."
  },
  {
    title: "Health",
    rating: "8/10",
    text:
      "Today is ideal for transforming your lifestyle. Lighter meals, whole grains, and nutritious foods can boost your energy."
  },
  {
    title: "Emotions",
    rating: "7/10",
    text:
      "Clarity of thought helps you understand your feelings better. Honest communication supports emotional balance."
  },
  {
    title: "Travel",
    rating: "5/10",
    text:
      "Short trips related to learning or networking may bring useful opportunities and fresh insights."
  },
  {
    title: "Luck",
    rating: "6/10",
    text:
      "Meaningful conversations and unexpected connections may bring fortunate outcomes today."
  }
];
export default function ZodiacSlider() {
  const zodiacTabs = useMemo(() => {
    const seen = new Set();
    return ALL_ZODIAC.filter((item) => {
      const key = item.name.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, []);

  const [selectedCardIdx, setSelectedCardIdx] = useState(0);
  const [selectedZodiac, setSelectedZodiac] = useState(zodiacTabs[0]);
  const [activeTab, setActiveTab] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(true);

  useEffect(() => {
    setIsContentVisible(false);
    const id = setTimeout(() => setIsContentVisible(true), 120);
    return () => clearTimeout(id);
  }, [selectedCardIdx]);

  return (
    <div id="daily-horoscope-tabs" className="mt-10 scroll-mt-24 max-md:overflow-x-hidden">
      <section className="w-full pb-6">
        <div className="w-full overflow-hidden pb-2 md:overflow-visible">
          <div className="overflow-x-auto [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden md:overflow-visible">
            <div className="inline-flex min-w-max flex-nowrap items-center gap-1.5 rounded-2xl border border-[#ffd400]/15 bg-black/35 p-1.5 md:grid md:min-w-0 md:w-full md:grid-cols-6 lg:grid-cols-12 md:gap-2 md:p-2">
            {zodiacTabs.map((card, index) => {
              const isActive = selectedCardIdx === index;
              return (
                <button
                  key={card.name}
                  type="button"
                  onClick={() => {
                    setSelectedCardIdx(index);
                    setSelectedZodiac(card);
                    setActiveTab(0);
                  }}
                  className={`group relative inline-flex shrink-0 flex-col items-center justify-center gap-1 rounded-lg border px-3.5 py-2 text-[11px] md:w-full md:px-5 md:py-2.5 md:text-[13px] hover:-translate-y-px ${
                    isActive
                      ? "border-[#ffd400] bg-[#ffd400] text-black shadow-[inset_0_-2px_0_rgba(245,197,24,0.8)]"
                      : "border-transparent bg-transparent text-white/70 hover:border-[#ffd400]/35 hover:text-[#ffd400]"
                  }`}
                >
                  <Image
                    src={isActive ? card.activeImage ?? card.image : card.image}
                    alt={card.name}
                    width={40}
                    height={40}
                    className={`h-9 w-9 object-contain transition-transform duration-300 md:h-[36px] md:w-[36px] ${isActive ? "scale-105" : "group-hover:scale-105"}`}
                  />
                  <span className="whitespace-nowrap font-medium leading-none tracking-[0.01em]">
                    {card.name}
                  </span>
                </button>
              );
            })}
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className="flex justify-center bg-transparent px-0 transition-all duration-500 ease-in-out">
          <div
            className={`relative w-full rounded-[28px] border border-[#ffd400]/40 bg-[#050505] shadow-[0_0_45px_rgba(255,212,0,0.25)] transition-all duration-300 ease-out ${
              isContentVisible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-90"
            }`}
          >
            <div className="relative overflow-hidden rounded-t-[28px] border-b border-[#ffd400]/25 px-6 py-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3d3200_0%,#080808_48%,#000_100%)]" />
              <div className="absolute inset-0 opacity-30 bg-[url('/images/zodiac-bg.jpg')] bg-cover bg-center" />

              <div className="relative z-10">
                <div className="flex justify-between w-100 items-center">
                <div className="mb-5 inline-flex rounded-full border border-[#ffd400]/40 px-4 py-1 text-[13px] font-semibold text-[#ffd400]">
                  Daily Horoscope
                </div>
                <p className="mt-0 text-[14px] font-medium text-[#ffd400]">
                        {new Date().toLocaleDateString('en-IN')}
                      </p>

                  </div>
               
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex gap-4 items-center">
                    <div className="flex h-[78px] w-[78px] items-center justify-center rounded-2xl border border-[#ffd400]/60 bg-black/60 text-[42px] text-[#ffd400] shadow-[0_0_25px_rgba(255,212,0,0.25)]">
                      <Image
                        src={selectedZodiac.image}
                        alt={selectedZodiac.name}
                        width={78}
                        height={78}
                        className="object-contain"
                      />
                    </div>

                    <div>
                      <h2 className="text-[32px] font-bold leading-none text-white">
                        {selectedZodiac.name}
                      </h2>
                     
                    </div>
                  </div>
                  <div className="flex flex-nowrap overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-2 justify-start md:justify-end md:overflow-visible">
                    {horoscopeTabs.map((tab, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`shrink-0 rounded-full border px-3 py-2 text-xs font-semibold whitespace-nowrap ${
                          activeTab === index
                          ? "border-[#ffd400] bg-transparent text-[#ffd400]"
                          : "border-[#ffd400]/35 text-[#ffd400]/80 hover:border-[#ffd400]/60 hover:text-[#ffd400]"
                          }`}
                      >
                        {tab.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 px-5 pt-5">
              <div className="rounded-[18px] border border-[#ffd400]/30 bg-[#101010] p-4 text-center">
                <p className="text-[15px] text-white/60">Luck</p>
                <h3 className="mt-1 text-[24px] font-bold text-[#ffd400]">
                  {horoscopeTabs[5].rating}
                </h3>
              </div>

              <div className="rounded-[18px] border border-[#ffd400]/30 bg-[#101010] p-4 text-center">
                <p className="text-[15px] text-white/60">Health</p>
                <h3 className="mt-1 text-[24px] font-bold text-[#ffd400]">
                  {horoscopeTabs[2].rating}
                </h3>
              </div>

              <div className="rounded-[18px] border border-[#ffd400]/30 bg-[#101010] p-4 text-center">
                <p className="text-[15px] text-white/60">Career</p>
                <h3 className="mt-1 text-[24px] font-bold text-[#ffd400]">
                  {horoscopeTabs[1].rating}
                </h3>
              </div>
            </div>

            <div className="space-y-4 px-5 pb-6 pt-5 gap-x-6 gap-y-4">
              <div className="">
                <div className="rounded-[20px] border border-[#ffd400]/25 bg-[#0f0f0f] p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-[20px] font-semibold text-[#ffd400]">
                      {horoscopeTabs[activeTab].title}
                    </h3>
                    <span className="rounded-full bg-[#ffd400] px-3 py-1 text-[12px] font-bold text-black">
                      {horoscopeTabs[activeTab].rating}
                    </span>
                  </div>
                  <p className="text-[15px] leading-8 text-white/80">
                    {horoscopeTabs[activeTab].text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
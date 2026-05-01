"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const ALL_ZODIAC = [
  {
    name: "Aries",
    image: "/assets/aries.webp",
    description:
      "Aries is a fire sign known for confidence, leadership, and energy. They are bold and ambitious."
  },
  {
    name: "Taurus",
    image: "/assets/taurus.webp",
    description:
      "Taurus is an earth sign that represents stability and patience. They value comfort and loyalty."
  },
  {
    name: "Gemini",
    image: "/assets/gimini.webp",
    description:
      "Gemini is an air sign known for communication, intelligence, and adaptability."
  },
  {
    name: "Cancer",
    image: "/assets/cancer.webp",
    description:
      "Cancer is a water sign associated with emotions, care, and intuition."
  },
  {
    name: "Leo",
    image: "/assets/aries.webp",
    description:
      "Leo is a fire sign known for confidence, creativity, and strong leadership qualities."
  },
  {
    name: "Virgo",
    image: "/assets/taurus.webp",
    description:
      "Virgo is an earth sign known for perfection, practicality, and attention to detail."
  },
  {
    name: "Libra",
    image: "/assets/gimini.webp",
    description:
      "Libra is an air sign focused on balance, harmony, and relationships."
  },
  {
    name: "Scorpio",
    image: "/assets/cancer.webp",
    description:
      "Scorpio is a water sign known for intensity, passion, and emotional depth."
  },
  {
    name: "Sagittarius",
    image: "/assets/aries.webp",
    description:
      "Sagittarius is a fire sign known for adventure, optimism, and freedom."
  },
  {
    name: "Capricorn",
    image: "/assets/taurus.webp",
    description:
      "Capricorn is an earth sign known for discipline, ambition, and responsibility."
  },
  {
    name: "Aquarius",
    image: "/assets/gimini.webp",
    description:
      "Aquarius is an air sign known for innovation, independence, and unique thinking."
  },
  {
    name: "Pisces",
    image: "/assets/cancer.webp",
    description:
      "Pisces is a water sign known for creativity, intuition, and compassion."
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
const TOTAL = ALL_ZODIAC.length;
const mod = (n, m) => (n % m + m) % m;

const ARC = {
  "-2": { rotZ: -8, ty: 44, op: 0 },
  "-1": { rotZ: -6, ty: 28, op: 1 },
  "0": { rotZ: 0, ty: 0, op: 1 },
  "1": { rotZ: 4, ty: 16, op: 1 },
  "2": { rotZ: 7, ty: 34, op: 1 },
  "3": { rotZ: 10, ty: 48, op: 0 }
};

export default function ZodiacSlider() {
  const [activeIdx, setActiveIdx] = useState(1);
  const [selectedZodiac, setSelectedZodiac] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const prev = useCallback(() => {
    setActiveIdx(i => mod(i - 1, TOTAL));
  }, []);

  const next = useCallback(() => {
    setActiveIdx(i => mod(i + 1, TOTAL));
  }, []);

  const [slots, setSlots] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateSlots = () => {
      if (window.innerWidth < 768) {
        setSlots([0]);
      } else if (window.innerWidth < 1200) {
        setSlots([-1, 0, 1]);
      } else {
        setSlots([-2, -1, 0, 1, 2]);
      }
    };

    updateSlots();
    window.addEventListener("resize", updateSlots);

    return () => window.removeEventListener("resize", updateSlots);
  }, []);
  if (!mounted) return null;
  return (
    <div>
      <section className="zroot">
        <div className="slider-shell">
          <button className="nav-btn" onClick={prev} aria-label="Previous">
            ←
          </button>

          <div className="vp">
            <div className="pstage">
              {slots.map(offset => {
                const cardIdx = mod(activeIdx + offset, TOTAL);
                const card = ALL_ZODIAC[cardIdx];
                const isActive = offset === 0;
                const { rotZ = 0, ty = 0, op = 1 } = ARC[String(offset)] || {};

                const tx = `calc(var(--unit) * ${offset + 1})`;

                return (
                  <div
                    key={`${cardIdx}-${offset}`}
                    className="cslot"
                    style={{
                      transform: `translateX(${tx}) translateY(${ty}px) rotate(${rotZ}deg)`,
                      opacity: op,
                      zIndex: isActive ? 10 : 5 - Math.abs(offset),
                      pointerEvents: op === 0 ? "none" : "auto"
                    }}
                    onClick={() => {
                      setSelectedZodiac(card);
                      setShowModal(true);
                    }}
                  >
                    <div
                      className={`card ${isActive ? "card--activewqewe" : ""}`}
                    >
                      <div className="img-box">
                        <Image
                          src={card.image}
                          alt={card.name}
                          fill
                          sizes="(max-width: 767px) 150px, (max-width: 1199px) 210px, 300px"
                          className="zimg"
                          priority={isActive}
                        />

                        <p className="text-xl  border-2 border-full italic w-7 h-7 flex items-center justify-center rounded-full text-primary absolute top-6 left-6">
                          i
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button className="nav-btn" onClick={next} aria-label="Next">
            →
          </button>
        </div>

        <style jsx>{`
          .zroot {
            --cw: 270px;
            --ch: 290px;
            --gap: 42px;
            --visible-cards: 4;
            --unit: calc(var(--cw) + var(--gap));
            --vp-w: calc(
              var(--visible-cards) * var(--cw) + (var(--visible-cards) - 1) * var(--gap)
            );

            width: 100%;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
          }

          .slider-shell {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 60px;
            padding: 80px 0 0px;
          }

          .vp {
            width: var(--vp-w);
          }

          .pstage {
            position: relative;
            height: calc(var(--ch) + 30px);
          }

          .cslot {
            position: absolute;
            top: 0;
            left: 0;
            width: var(--cw);
            cursor: pointer;
            will-change: transform, opacity;
            transition: transform 0.6s cubic-bezier(0.34, 1.18, 0.64, 1),
              opacity 0.45s ease;
          }

          .card--active {
            border-color: #f5c518;
            box-shadow: 0 0 22px rgba(245, 197, 24, 0.75),
              0 0 65px rgba(245, 197, 24, 0.35);
          }

          .img-box {
            position: relative;
            width: 100%;
            aspect-ratio: 1 / 1;
          }

          :global(.zimg) {
            object-fit: contain !important;
            filter: drop-shadow(0 0 10px rgba(245, 197, 24, 0.35));
            pointer-events: none;
          }

          .zlabel {
            margin-top: 18px;
            color: #f5c518;
            font-size: 30px;
            line-height: 1;
            font-weight: 500;
            text-align: center;
            font-family: Georgia, serif;
            text-shadow: 0 0 16px rgba(245, 197, 24, 0.5);
            white-space: nowrap;
          }

          .nav-btn {
            width: 58px;
            height: 58px;
            flex-shrink: 0;
            border-radius: 14px;
            border: 1.5px solid #f5c518;
            background: rgba(5, 6, 9, 0.85);
            color: #f5c518;
            font-size: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 0 22px rgba(245, 197, 24, 0.25);
            transition: all 0.25s ease;
          }

          .nav-btn:hover {
            transform: scale(1.07);
            box-shadow: 0 0 38px rgba(245, 197, 24, 0.55);
          }

          @media (max-width: 1500px) {
            .zroot {
              --cw: 285px;
              --ch: 320px;
              --gap: 36px;
            }

            .slider-shell {
              gap: 42px;
            }
          }

          /* Tablet: 3 cards */
          @media (max-width: 1199px) {
            .zroot {
              --visible-cards: 3;
              --cw: 230px;
              --ch: 270px;
              --gap: 26px;
              min-height: 540px;
            }

            .slider-shell {
              gap: 24px;
              padding: 50px 0 75px;
            }

            .zlabel {
              font-size: 24px;
            }
          }

          /* Mobile: 2 cards */
          @media (max-width: 767px) {
            .zroot {
              --visible-cards: 2;
              --cw: 150px;
              --ch: 190px;
              min-height: unset;
              padding-bottom: 30px;
            }

            .slider-shell {
              gap: 12px;
              padding: 10px 0 10px;
            }

            .vp {
              padding: 10px 0 10px;
            }

            .pstage {
              height: calc(var(--ch) + 55px);
            }

            .card {
              border-radius: 18px;
              padding: 18px 12px 16px;
            }

            .zlabel {
              font-size: 18px;
              margin-top: 10px;
            }

            .nav-btn {
              width: 38px;
              height: 38px;
              border-radius: 10px;
              font-size: 18px;
            }
            .cslot {
              width: 100%;
              transform: translate(3px, 3px) !important;
            }
          }

          @media (max-width: 420px) {
            .zroot {
              --cw: 135px;
              --ch: 175px;
              --gap: 14px;
            }

            .slider-shell {
              gap: 8px;
            }

            .nav-btn {
              width: 34px;
              height: 34px;
              font-size: 16px;
            }

            .zlabel {
              font-size: 16px;
            }
          }
        `}</style>
      </section>

      <div>
        <div
          className=" flex items-center justify-center bg-transparent px-4 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            onClick={e => e.stopPropagation()}
            className="relative w-full rounded-[28px] border border-[#ffd400]/40 bg-[#050505] shadow-[0_0_45px_rgba(255,212,0,0.25)]"
          >

            <div className="relative overflow-hidden rounded-t-[28px] border-b border-[#ffd400]/25 px-6 py-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3d3200_0%,#080808_48%,#000_100%)]" />
              <div className="absolute inset-0 opacity-30 bg-[url('/images/zodiac-bg.jpg')] bg-cover bg-center" />

              <div className="relative z-10">
                <div className="mb-5 inline-flex rounded-full border border-[#ffd400]/40 px-4 py-1 text-[13px] font-semibold text-[#ffd400]">
                  Daily Horoscope
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex gap-4 items-center">
                    <div className="flex h-[78px] w-[78px] items-center justify-center rounded-2xl border border-[#ffd400]/60 bg-black/60 text-[42px] text-[#ffd400] shadow-[0_0_25px_rgba(255,212,0,0.25)]">
                      ♈
                    </div>

                    <div>
                      <h2 className="text-[32px] font-bold leading-none text-white">
                        Aries
                      </h2>
                      <p className="mt-2 text-[14px] font-medium text-[#ffd400]">
                        19-3-2024
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-end gap-2">
                    {horoscopeTabs.map((tab, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`rounded-full px-3 py-2 text-xs font-semibold transition-all ${activeTab === index
                          ? "bg-[#ffd400] text-black"
                          : "border border-[#ffd400]/40 text-[#ffd400]"
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
                  6/10
                </h3>
              </div>

              <div className="rounded-[18px] border border-[#ffd400]/30 bg-[#101010] p-4 text-center">
                <p className="text-[15px] text-white/60">Health</p>
                <h3 className="mt-1 text-[24px] font-bold text-[#ffd400]">
                  8/10
                </h3>
              </div>

              <div className="rounded-[18px] border border-[#ffd400]/30 bg-[#101010] p-4 text-center">
                <p className="text-[15px] text-white/60">Career</p>
                <h3 className="mt-1 text-[24px] font-bold text-[#ffd400]">
                  6/10
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

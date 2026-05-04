"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState, useRef } from "react";

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
    name: "Aries",
    image: "/assets/aries.webp",
    description:
      "Aries is a bold and energetic fire sign known for leadership, confidence, and a strong drive to take action."
  },
  {
    name: "Cancer",
    image: "/assets/cancer.webp",
    description:
      "Cancer is a water sign associated with emotions, care, and intuition."
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
      "Cancer is a sensitive and nurturing water sign known for emotional depth, intuition, and strong family values."
  },
  {
    name: "Aries",
    image: "/assets/aries.webp",
    description:
      "Aries is a bold and energetic fire sign known for leadership, confidence, and a strong drive to take action."
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
      "Cancer is a sensitive and nurturing water sign known for emotional depth, intuition, and strong family values."
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



const eyeIcon = ((
  <svg width={30} height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_15_200)"> <rect width={30} height={30} fill="none" /> <circle cx={12} cy={13} r={2} stroke="currentColor" strokeLinejoin="round" />
      <path d="M12 7.5C7.69517 7.5 4.47617 11.0833 3.39473 12.4653C3.14595 12.7832 3.14595 13.2168 3.39473 13.5347C4.47617 14.9167 7.69517 18.5 12 18.5C16.3048 18.5 19.5238 14.9167 20.6053 13.5347C20.8541 13.2168 20.8541 12.7832 20.6053 12.4653C19.5238 11.0833 16.3048 7.5 12 7.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </g><defs><clipPath id="clip0_15_200"><rect width={30} height={30} fill="currentColor" /></clipPath>
    </defs>
  </svg>
))

const closeEyeIcon = ((

  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="style=linear">
      <g id="eye-close">
        <path
          id="vector"
          d="M15.6487 5.39489C14.4859 4.95254 13.2582 4.72021 12 4.72021C8.46997 4.72021 5.17997 6.54885 2.88997 9.71381C1.98997 10.9534 1.98997 13.037 2.88997 14.2766C3.34474 14.9051 3.83895 15.481 4.36664 16.0002M19.3248 7.69653C19.9692 8.28964 20.5676 8.96425 21.11 9.71381C22.01 10.9534 22.01 13.037 21.11 14.2766C18.82 17.4416 15.53 19.2702 12 19.2702C10.6143 19.2702 9.26561 18.9884 7.99988 18.4547"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="vector_2"
          d="M15 12C15 13.6592 13.6592 15 12 15M14.0996 9.85541C13.5589 9.32599 12.8181 9 12 9C10.3408 9 9 10.3408 9 12C9 12.7293 9.25906 13.3971 9.69035 13.9166"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="vector_3"
          d="M2 21.0002L22 2.7002"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </g>
  </svg>
))

export default function ZodiacSlider() {
  const [showDetails, setShowDetails] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedCardIdx, setSelectedCardIdx] = useState(0);
  const [selectedZodiac, setSelectedZodiac] = useState(ALL_ZODIAC[0]);
  const [activeTab, setActiveTab] = useState(0);

  // Drag/Swipe states
  const [dragStartX, setDragStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const dragThreshold = 50; // Minimum distance to trigger slide

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

  // Handle drag start (mouse or touch)
  const handleDragStart = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
    setIsDragging(true);
  };

  // Handle drag end (mouse or touch)
  const handleDragEnd = (e) => {
    if (!isDragging) return;

    let dragEndX;
    if (e.changedTouches) {
      dragEndX = e.changedTouches[0].clientX;
    } else {
      dragEndX = e.clientX;
    }

    const dragDistance = dragEndX - dragStartX;

    if (Math.abs(dragDistance) > dragThreshold) {
      if (dragDistance > 0) {
        // Swipe right - go to previous
        prev();
      } else {
        // Swipe left - go to next
        next();
      }
    }

    setIsDragging(false);
    setDragStartX(0);
  };

  // Handle drag move (prevent default to avoid text selection)
  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  if (!mounted) return null;

  return (
    <div>
      <section className="zroot">
        <div className="slider-shell">
          <button className="nav-btn" onClick={prev} aria-label="Previous">
            ←
          </button>

          <div
            className="vp"
            ref={sliderRef}
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onMouseMove={handleDragMove}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
            onTouchMove={handleDragMove}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div className="pstage">
              {slots.map(offset => {
                const cardIdx = mod(activeIdx + offset, TOTAL);
                const card = ALL_ZODIAC[cardIdx];
                const isActive = cardIdx === selectedCardIdx;
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
                      pointerEvents: op === 0 ? "none" : "auto",
                      transition: isDragging ? 'none' : 'transform 0.6s cubic-bezier(0.34, 1.18, 0.64, 1), opacity 0.45s ease'
                    }}
                    onClick={() => {
                      if (!isDragging) {
                        if (selectedCardIdx === cardIdx) {
                          setShowDetails(prev => !prev);
                        } else {
                          setShowDetails(false);
                          setTimeout(() => {
                            setSelectedCardIdx(cardIdx);
                            setSelectedZodiac(card);
                            setActiveTab(0);
                            setShowDetails(true);
                          }, 100);
                        }
                      }
                    }}
                  >
                    <div
                      className={`card ${isActive ? "card--activewqewe" : ""}`}
                    >
                      <div className="img-box relative">
                        <Image
                          src={card.image}
                          alt={card.name}
                          fill
                          sizes="(max-width: 767px) 150px, (max-width: 1199px) 210px, 300px"
                          className={`zimg transition-all duration-300 ${isActive ? "rounded-4xl shadow-[0_0_30px_rgba(245,197,24,0.5)]" : ""
                            }`}
                          priority={isActive}
                        />

                        <div className="group">
                         <p className="text-xl  text-primary bg-transparent w-7 h-7 flex items-center justify-center rounded-full absolute bottom-8 right-12 cursor-pointer">
                            {isActive ? eyeIcon : closeEyeIcon}
                          </p>

                        </div>
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
            user-select: none;
            -webkit-user-select: none;
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
          }

          .card {
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 20px;
            border: 2px solid transparent;
            transition: all 0.5s cubic-bezier(0.34, 1.18, 0.64, 1);
          }

          .card--activewqewe {
            border:0;
            box-shadow:none;
            transform: scale(1);
            border-radius:40px;
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
            z-index: 20;
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
              transform: translate(0px,0px) !important;
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
        <div className={`flex justify-center bg-transparent px-0 transition-all duration-500 ease-in-out`}>
          <div className={`relative w-full rounded-[28px] border border-[#ffd400]/40 bg-[#050505] transition-all duration-400 ease-out ${showDetails ? "opacity-100 translate-y-0 shadow-[0_0_45px_rgba(255,212,0,0.25)]" : "opacity-90 -translate-y-3"}`}>
            <div className="relative overflow-hidden rounded-t-[28px] border-b border-[#ffd400]/25 px-6 py-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3d3200_0%,#080808_48%,#000_100%)]" />
              <div className="absolute inset-0 opacity-30 bg-[url('/images/zodiac-bg.jpg')] bg-cover bg-center" />

              <div className="relative z-10">
                <div className="mb-5 inline-flex rounded-full border border-[#ffd400]/40 px-4 py-1 text-[13px] font-semibold text-[#ffd400]">
                  Daily Horoscope
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
                      <p className="mt-2 text-[14px] font-medium text-[#ffd400]">
                        {new Date().toLocaleDateString('en-IN')}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center md:justify-end gap-2">
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
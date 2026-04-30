"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const ALL_ZODIAC = [
  { name: "Aries", image: "/assets/aries.webp" },
  { name: "Taurus", image: "/assets/taurus.webp" },
  { name: "Gemini", image: "/assets/gimini.webp" },
  { name: "Cancer", image: "/assets/cancer.webp" },
  { name: "Aries", image: "/assets/aries.webp" },
  { name: "Taurus", image: "/assets/taurus.webp" },
  { name: "Gemini", image: "/assets/gimini.webp" },
  { name: "Cancer", image: "/assets/cancer.webp" },
    { name: "Aries", image: "/assets/aries.webp" },
  { name: "Taurus", image: "/assets/taurus.webp" },
  { name: "Gemini", image: "/assets/gimini.webp" },
  { name: "Cancer", image: "/assets/cancer.webp" },
];

const TOTAL = ALL_ZODIAC.length;
const mod = (n, m) => ((n % m) + m) % m;

const ARC = {
  "-2": { rotZ: -8, ty: 44, op: 0 },
  "-1": { rotZ: -6, ty: 28, op: 1 },
  "0": { rotZ: 0, ty: 0, op: 1 },
  "1": { rotZ: 4, ty: 16, op: 1 },
  "2": { rotZ: 7, ty: 34, op: 1 },
  "3": { rotZ: 10, ty: 48, op: 0 },
};

export default function ZodiacSlider() {
  const [activeIdx, setActiveIdx] = useState(1);

  const prev = useCallback(() => {
    setActiveIdx((i) => mod(i - 1, TOTAL));
  }, []);

  const next = useCallback(() => {
    setActiveIdx((i) => mod(i + 1, TOTAL));
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
    <section className="zroot">
      <div className="slider-shell">
        <button className="nav-btn" onClick={prev} aria-label="Previous">
          ←
        </button>

        <div className="vp">
          <div className="pstage">
            {slots.map((offset) => {
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
                    pointerEvents: op === 0 ? "none" : "auto",
                  }}
                  onClick={() => {
                    if (offset < 0) prev();
                    if (offset > 0) next();
                  }}
                >
                  <div className={`card ${isActive ? "card--activewqewe" : ""}`}>
                    <div className="img-box">
                      <Image
                        src={card.image}
                        alt={card.name}
                        fill
                        sizes="(max-width: 767px) 150px, (max-width: 1199px) 210px, 300px"
                        className="zimg"
                        priority={isActive}
                      />
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
          --cw: 300px;
          --ch: 340px;
          --gap: 42px;
          --visible-cards: 4;
          --unit: calc(var(--cw) + var(--gap));
          --vp-w: calc(
            var(--visible-cards) * var(--cw) +
              (var(--visible-cards) - 1) * var(--gap)
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
          transition:
            transform 0.6s cubic-bezier(0.34, 1.18, 0.64, 1),
            opacity 0.45s ease;
        }

       

        .card--active {
          border-color: #f5c518;
          box-shadow:
            0 0 22px rgba(245, 197, 24, 0.75),
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
           width : 100%;
           transform : translate(3px, 3px) !important;
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
  );
}
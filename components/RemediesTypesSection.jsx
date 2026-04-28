"use client";

import { useState } from "react";

const TABS = [
  "Puja & Rituals",
  "Gemstone Suggestions",
  "Mantra & Chanting",
  "Yantra & Spiritual Tools",
  "Simple Daily Remedies",
];

export default function RemediesTypesSection() {
  const [activeTab, setActiveTab] = useState("Puja & Rituals");

  return (
    <section className="relative overflow-hidden bg-[url('/assets/remedies-types-bg.png')] bg-cover bg-center bg-no-repeat pb-[70px] pt-14">
      <div className="absolute inset-0 z-1" />

      <div className="relative z-2 mx-auto max-w-[1540px] px-[70px] max-[991px]:px-5">
        <h2 className="mb-[22px] text-center text-[46px] font-extrabold leading-[1.08] text-white max-[991px]:text-[34px]">
          Types of Remedies We Offer
        </h2>

        <div className="mb-7 flex flex-wrap justify-center gap-[10px]">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`h-[54px] min-w-[168px] cursor-pointer rounded-[12px] border border-primary px-[18px] text-[16px] font-bold ${
                activeTab === tab
                  ? "bg-primary text-black"
                  : "bg-transparent text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-[1200px]">
          <h3 className="mb-[10px] text-[44px] font-extrabold leading-[1.08] text-primary max-[991px]:text-[32px]">
            What Are Puja & Rituals?
          </h3>

          <p className="mb-[18px] text-[18px] text-primary underline decoration-[#3aa7ff] decoration-2 underline-offset-[3px] max-[991px]:text-[15px]">
            Puja and rituals are sacred Vedic practices performed to balance
            planetary energies, remove doshas, and bring positivity into life.
            These rituals help reduce negative influences and attract success,
            peace, and prosperity.
          </p>

          <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-[1fr_1px_1fr]">
            <div>
              <h4 className="mb-3 text-[24px] font-extrabold text-primary">
                Types of Puja & Rituals
              </h4>

              {[
                {
                  title: "1. Dosha Nivaran Puja",
                  items: ["Mangal Dosha Puja", "Kaal Sarp Dosha Puja", "Pitra Dosha Puja"],
                  note: "Removes negative planetary effects and life obstacles",
                },
                {
                  title: "2. Graha Shanti Puja (Planetary Puja)",
                  items: ["Navgraha Shanti Puja", "Shani Shanti Puja", "Rahu-Ketu Shanti Puja"],
                  note: "Balances weak or malefic planets",
                },
                {
                  title: "3. Prosperity & Wealth Puja",
                  items: ["Lakshmi Puja", "Kuber Puja"],
                  note: "Attracts money, success, and financial growth",
                },
                {
                  title: "4. Marriage & Relationship Puja",
                  items: ["Vivah Puja", "Gauri Shankar Puja"],
                  note: "Helps in marriage delays and relationship harmony",
                },
                {
                  title: "5. Health & Protection Puja",
                  items: ["Maha Mrityunjaya Jaap", "Hanuman Puja"],
                  note: "Improves health and removes negative energies",
                },
                {
                  title: "6. Career & Success Puja",
                  items: ["Saraswati Puja", "Ganesh Puja"],
                  note: "Enhances career growth, education, and success",
                },
              ].map((g) => (
                <div key={g.title} className="mb-4">
                  <h5 className="mb-1 text-[18px] font-extrabold text-white">
                    {g.title}
                  </h5>
                  <ul className="mb-2 list-disc pl-[18px]">
                    {g.items.map((it) => (
                      <li key={it} className="text-[16px] leading-normal text-white max-[991px]:text-[15px]">
                        {it}
                      </li>
                    ))}
                  </ul>
                  <p className="m-0 text-[16px] leading-[1.45] text-white/90 max-[991px]:text-[15px]">
                    {g.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="hidden w-px bg-white/40 md:block" />

            <div>
              {[
                {
                  title: "Key Points",
                  items: [
                    "Performed on auspicious dates (Muhurat)",
                    "Can be done online/offline",
                    "Guided by expert astrologers",
                    "Based on Kundli analysis",
                  ],
                },
                {
                  title: "Benefits of Puja & Rituals",
                  items: [
                    "Removes negative energy",
                    "Improves financial condition",
                    "Strengthens relationships",
                    "Brings peace and mental clarity",
                    "Helps in career and growth",
                    "Protects from unseen obstacles",
                  ],
                },
                {
                  title: "Who Should Do Puja?",
                  items: [
                    "Facing continuous problems",
                    "Delays in marriage or career",
                    "Financial instability",
                    "Health issues",
                    "Negative energy or stress",
                  ],
                },
              ].map((b) => (
                <div key={b.title} className="mb-[22px]">
                  <h4 className="mb-3 text-[24px] font-extrabold text-primary">
                    {b.title}
                  </h4>
                  <ul className="m-0 list-disc pl-[18px]">
                    {b.items.map((it) => (
                      <li key={it} className="text-[16px] leading-normal text-white max-[991px]:text-[15px]">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <button className="mt-2 h-[60px] min-w-[290px] cursor-pointer rounded-[12px] bg-primary px-6 text-[18px] font-extrabold text-black">
                Get My Puja Recommendation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
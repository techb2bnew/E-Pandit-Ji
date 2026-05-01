// "use client";

// import { useState } from "react";
// import Title from "./Uiux/Title";

// const TABS = [
//   "Puja & Rituals",
//   "Gemstone Suggestions",
//   "Mantra & Chanting",
//   "Yantra & Spiritual Tools",
//   "Simple Daily Remedies",
// ];

// export default function RemediesTypesSection() {
//   const [activeTab, setActiveTab] = useState("Puja & Rituals");

//   return (
//     <section className="relative overflow-hidden bg-[url('/assets/remedies-types-bg.png')] bg-cover bg-center bg-no-repeat pb-2 lg:pb-14 xl:pb-18 2xl:pt-14">
//       <div className="absolute inset-0 z-1" />

//       <div className="relative z-2 mx-auto max-w-[1540px] px-[70px] max-[991px]:px-5">

//         <div className="text-center">
//         <Title
//          title={'Types of Remedies We Offer'}
//          Class={'text-white'}
//         />
//         </div>

//         <div className="mb-7 pt-8 flex flex-wrap justify-center gap-[10px]">
//           {TABS.map((tab) => (
//             <button
//               key={tab}
//               type="button"
//               onClick={() => setActiveTab(tab)}
//               className={`py-3 w-[45%] md:w-[30%] md:min-w-[168px] cursor-pointer rounded-[12px] border border-primary px-2 md:px-[18px] text-xs md:text-[16px] font-bold ${
//                 activeTab === tab
//                   ? "bg-primary text-black"
//                   : "bg-transparent text-white"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         <div className="mx-auto max-w-[1200px]">
//           <h3 className="mb-[10px] text-[44px] font-extrabold leading-[1.08] text-primary max-[991px]:text-[32px]">
//             What Are Puja & Rituals?
//           </h3>

//           <p className="mb-[18px] text-[18px] text-primary underline decoration-[#3aa7ff] decoration-2 underline-offset-[3px] max-[991px]:text-[15px]">
//             Puja and rituals are sacred Vedic practices performed to balance
//             planetary energies, remove doshas, and bring positivity into life.
//             These rituals help reduce negative influences and attract success,
//             peace, and prosperity.
//           </p>

//           <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-[1fr_1px_1fr]">
//             <div>
//               <h4 className="mb-3 text-[24px] font-extrabold text-primary">
//                 Types of Puja & Rituals
//               </h4>

//               {[
//                 {
//                   title: "1. Dosha Nivaran Puja",
//                   items: ["Mangal Dosha Puja", "Kaal Sarp Dosha Puja", "Pitra Dosha Puja"],
//                   note: "Removes negative planetary effects and life obstacles",
//                 },
//                 {
//                   title: "2. Graha Shanti Puja (Planetary Puja)",
//                   items: ["Navgraha Shanti Puja", "Shani Shanti Puja", "Rahu-Ketu Shanti Puja"],
//                   note: "Balances weak or malefic planets",
//                 },
//                 {
//                   title: "3. Prosperity & Wealth Puja",
//                   items: ["Lakshmi Puja", "Kuber Puja"],
//                   note: "Attracts money, success, and financial growth",
//                 },
//                 {
//                   title: "4. Marriage & Relationship Puja",
//                   items: ["Vivah Puja", "Gauri Shankar Puja"],
//                   note: "Helps in marriage delays and relationship harmony",
//                 },
//                 {
//                   title: "5. Health & Protection Puja",
//                   items: ["Maha Mrityunjaya Jaap", "Hanuman Puja"],
//                   note: "Improves health and removes negative energies",
//                 },
//                 {
//                   title: "6. Career & Success Puja",
//                   items: ["Saraswati Puja", "Ganesh Puja"],
//                   note: "Enhances career growth, education, and success",
//                 },
//               ].map((g) => (
//                 <div key={g.title} className="mb-4">
//                   <h5 className="mb-1 text-[18px] font-extrabold text-white">
//                     {g.title}
//                   </h5>
//                   <ul className="mb-2 list-disc pl-[18px]">
//                     {g.items.map((it) => (
//                       <li key={it} className="text-[16px] leading-normal text-white max-[991px]:text-[15px]">
//                         {it}
//                       </li>
//                     ))}
//                   </ul>
//                   <p className="m-0 text-[16px] leading-[1.45] text-white/90 max-[991px]:text-[15px]">
//                     {g.note}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <div className="hidden w-px bg-white/40 md:block" />

//             <div>
//               {[
//                 {
//                   title: "Key Points",
//                   items: [
//                     "Performed on auspicious dates (Muhurat)",
//                     "Can be done online/offline",
//                     "Guided by expert astrologers",
//                     "Based on Kundli analysis",
//                   ],
//                 },
//                 {
//                   title: "Benefits of Puja & Rituals",
//                   items: [
//                     "Removes negative energy",
//                     "Improves financial condition",
//                     "Strengthens relationships",
//                     "Brings peace and mental clarity",
//                     "Helps in career and growth",
//                     "Protects from unseen obstacles",
//                   ],
//                 },
//                 {
//                   title: "Who Should Do Puja?",
//                   items: [
//                     "Facing continuous problems",
//                     "Delays in marriage or career",
//                     "Financial instability",
//                     "Health issues",
//                     "Negative energy or stress",
//                   ],
//                 },
//               ].map((b) => (
//                 <div key={b.title} className="mb-[22px]">
//                   <h4 className="mb-3 text-[24px] font-extrabold text-primary">
//                     {b.title}
//                   </h4>
//                   <ul className="m-0 list-disc pl-[18px]">
//                     {b.items.map((it) => (
//                       <li key={it} className="text-[16px] leading-normal text-white max-[991px]:text-[15px]">
//                         {it}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}

//               <button className="mt-2 h-[60px] min-w-[290px] cursor-pointer rounded-[12px] bg-primary px-6 text-[18px] font-extrabold text-black">
//                 Get My Puja Recommendation
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState } from "react";
// import Title from "./Uiux/Title";
// import { remedyTabdata } from "./Data/Data";

// export default function RemediesTypesSection() {
//   const [activeTab, setActiveTab] = useState("Puja & Rituals");
//   const [animate, setAnimate] = useState(true);

//   const handleTab = (tab) => {
//     setAnimate(false);
//     setTimeout(() => {
//       setActiveTab(tab);
//       setAnimate(true);
//     }, 150);
//   };

//   const data = remedyTabdata[activeTab];

//   return (
//     <section className="relative overflow-hidden bg-[url('/assets/remedies-types-bg.png')] bg-cover bg-center bg-no-repeat pb-2 lg:pb-14 xl:pb-18 2xl:pt-14">
//       <div className="relative z-2 mx-auto max-w-[1540px] px-[70px] max-[991px]:px-5">

//         <div className="text-center">
//           <Title title={"Types of Remedies We Offer"} Class={"text-white"} />
//         </div>

//         {/* Tabs */}
//         <div className="mb-7 pt-8 flex flex-wrap justify-center gap-[10px]">
//           {Object.keys(remedyTabdata).map((tab) => (
//             <button
//               key={tab}
//               onClick={() => handleTab(tab)}
//               className={`py-3 w-[45%] md:w-[30%] md:min-w-[168px] rounded-[12px] border border-primary text-xs md:text-[16px] font-bold ${
//                 activeTab === tab
//                   ? "bg-primary text-black"
//                   : "text-white"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Content */}
//         <div
//           className={`transition-all duration-500 ${
//             animate
//               ? "opacity-100 translate-y-0"
//               : "opacity-0 translate-y-4"
//           }`}
//         >
//           <div className="mx-auto max-w-[1200px]">
//             <h3 className="text-[44px] font-extrabold text-primary">
//               {data.heading}
//             </h3>

//             <p className="text-[18px] text-primary underline">
//               {data.description}
//             </p>

//             <div className="grid md:grid-cols-[1fr_1px_1fr] gap-7">

//               {/* LEFT */}
//               <div>
//                 {data.left.map((g) => (
//                   <div key={g.title}>
//                     <h5 className="text-white font-bold">{g.title}</h5>
//                     <ul className="list-disc pl-5">
//                       {g.items.map((it) => (
//                         <li key={it} className="text-white">
//                           {it}
//                         </li>
//                       ))}
//                     </ul>
//                     {g.note && <p className="text-white/80">{g.note}</p>}
//                   </div>
//                 ))}
//               </div>

//               <div className="hidden md:block w-px bg-white/40" />

//               {/* RIGHT */}
//               <div>
//                 {data.right.map((b) => (
//                   <div key={b.title}>
//                     <h4 className="text-primary font-bold">{b.title}</h4>
//                     <ul className="list-disc pl-5">
//                       {b.items.map((it) => (
//                         <li key={it} className="text-white">
//                           {it}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import Title from "./Uiux/Title";

const DATA = {
  "Puja & Rituals": {
    heading: "What Are Puja & Rituals?",
    description:
      "Puja and rituals are sacred Vedic practices performed to align an individual’s life with cosmic energies. These rituals are designed to balance planetary influences (Grahas), remove doshas (astrological imbalances), and create harmony in personal, professional, and spiritual life. They are performed using specific mantras, offerings, and procedures guided by ancient scriptures. Regular or need-based pujas help reduce negative influences, attract prosperity, and bring peace, stability, and success.",

    left: [
      {
        title: "1. Dosha Nivaran Puja",
        items: [
          "Mangal Dosha Puja – Performed to reduce the negative effects of Mars, especially in marriage-related issues.",
          "Kaal Sarp Dosha Puja – Helps neutralize the effects of Kaal Sarp Yoga, which can cause obstacles and delays.",
          "Pitra Dosha Puja – Done to seek blessings from ancestors and remove ancestral karmic debts.",
        ],
        note:
          "Removes negative planetary effects, clears life obstacles, and restores balance in personal and professional life.",
      },
      {
        title: "2. Graha Shanti Puja (Planetary Puja)",
        items: [
          "Navgraha Shanti Puja – Balances all nine planets to bring overall harmony.",
          "Shani Shanti Puja – Reduces the malefic effects of Saturn (Shani), especially during Sade Sati.",
          "Rahu-Ketu Shanti Puja – Helps manage shadow planet influences causing confusion, fear, or instability.",
        ],
        note:
          "Strengthens weak planets, reduces malefic effects, and improves overall life stability and progress.",
      },
      {
        title: "3. Prosperity & Wealth Puja",
        items: [
          "Lakshmi Puja – Invokes Goddess Lakshmi for wealth, prosperity, and abundance.",
          "Kuber Puja – Worship of Lord Kuber for financial growth and asset accumulation.",
        ],
        note:
          "Attracts financial stability, success in business, and continuous flow of wealth and opportunities.",
      },
      {
        title: "4. Marriage & Relationship Puja",
        items: [
          "Vivah Puja – Helps remove obstacles and delays in marriage.",
          "Gauri Shankar Puja – Strengthens love, compatibility, and marital harmony.",
        ],
        note:
          "Improves relationships, resolves conflicts, and ensures a stable and happy married life.",
      },
    ],

    right: [
      {
        title: "Key Points",
        items: [
          "Performed on auspicious dates (Muhurat) for maximum effectiveness",
          "Can be conducted online or offline with proper rituals",
          "Guided by experienced astrologers and priests",
          "Completely based on individual Kundli (birth chart) analysis",
          "Personalized rituals ensure targeted results and benefits",
        ],
      },
      {
        title: "Benefits of Puja & Rituals",
        items: [
          "Removes negative energy and doshas",
          "Improves financial growth and stability",
          "Strengthens personal and professional relationships",
          "Brings mental peace, clarity, and emotional balance",
          "Enhances career opportunities and success",
          "Protects from unseen obstacles and negative influences",
          "Creates a positive and spiritually aligned environment",
        ],
      },
      {
        title: "Who Should Do Puja?",
        items: [
          "People facing continuous problems or life obstacles",
          "Individuals experiencing delays in marriage or career growth",
          "Those dealing with financial instability or losses",
          "People suffering from health issues or stress",
          "Anyone feeling negative energy, anxiety, or lack of direction",
          "Individuals seeking peace, success, and spiritual growth",
        ],
      },
    ],
  },

  "Gemstone Suggestions": {
    heading: "Gemstone Suggestion",
    description:
      "Gemstones balance planetary energies, improve weak planets, and enhance success, stability, health, and overall life progress.",

    left: [
      {
        title: "Ruby (Manikya)",
        items: [
          "Strengthens Sun and boosts confidence",
          "Improves leadership and decision-making ability",
          "Enhances career growth and recognition",
          "Increases vitality and personal power",
        ],
      },
      {
        title: "Pearl (Moti)",
        items: [
          "Strengthens Moon for emotional stability",
          "Reduces stress, anxiety, and mental confusion",
          "Improves peace of mind and calmness",
          "Enhances family harmony and relationships",
        ],
      },
      {
        title: "Emerald (Panna)",
        items: [
          "Strengthens Mercury for intelligence and communication",
          "Improves business skills and decision-making",
          "Supports education and career success",
          "Enhances creativity and expression",
        ],
      },
      {
        title: "Blue Sapphire (Neelam)",
        items: [
          "Strengthens Saturn for discipline and stability",
          "Brings sudden success and transformation",
          "Removes delays and obstacles in life",
          "Needs careful guidance before wearing",
        ],
      },
      {
        title: "Yellow Sapphire (Pukhraj)",
        items: [
          "Strengthens Jupiter for wisdom and fortune",
          "Improves marriage and relationship prospects",
          "Enhances financial growth and stability",
          "Brings knowledge and spiritual progress",
        ],
      },
      {
        title: "Red Coral (Moonga)",
        items: [
          "Strengthens Mars for courage and energy",
          "Helps overcome fear and hesitation",
          "Improves health and physical strength",
          "Supports success in competitive situations",
        ],
      },
    ],

    right: [
      {
        title: "Key Points",
        items: [
          "Recommended based on individual kundli analysis",
          "Natural gemstones selected for planetary balance",
          "Must be worn after proper astrological guidance",
          "Energized and activated before use",
          "Personalized suggestion ensures better results",
        ],
      },
      {
        title: "Benefits of Gemstone Remedies",
        items: [
          "Balances planetary influences in life",
          "Improves confidence, health, and stability",
          "Enhances career and financial growth",
          "Reduces negative effects of doshas",
          "Brings mental peace and positivity",
          "Strengthens personal and professional life",
          "Supports long-term success and harmony",
        ],
      },
      {
        title: "Who Should Wear Gemstones?",
        items: [
          "People facing continuous life struggles",
          "Individuals with weak planetary positions",
          "Those experiencing career or financial issues",
          "People dealing with stress or instability",
          "Individuals seeking success and growth",
          "Anyone wanting better luck and confidence",
        ],
      },
    ],
  },

  "Mantra & Chanting": {
    heading: "Mantra and Chanting",
    description:
      "Mantra chanting balances planetary energies, removes negativity, and brings peace, success, health, and spiritual growth in life.",

    left: [
      {
        title: "Surya Mantra (Sun Mantra)",
        items: [
          "Strengthens confidence, leadership, and willpower",
          "Improves success, fame, and recognition",
          "Removes weakness and lack of motivation",
          "Brings energy and positivity in life",
        ],
      },
      {
        title: "Chandra Mantra (Moon Mantra)",
        items: [
          "Calms mind and reduces emotional stress",
          "Improves mental peace and stability",
          "Helps in better sleep and focus",
          "Strengthens emotional balance and clarity",
        ],
      },
      {
        title: "Maha Mrityunjaya Mantra",
        items: [
          "Provides protection from health issues",
          "Reduces fear, negativity, and anxiety",
          "Brings healing and spiritual strength",
          "Supports long life and well-being",
        ],
      },
      {
        title: "Shani Mantra (Saturn Mantra)",
        items: [
          "Reduces delays and struggles in life",
          "Brings discipline, patience, and stability",
          "Helps during Sade Sati effects",
          "Improves long-term success and growth",
        ],
      },
      {
        title: "Lakshmi Mantra",
        items: [
          "Attracts wealth, prosperity, and abundance",
          "Removes financial obstacles and blocks",
          "Improves business and income growth",
          "Brings continuous financial stability",
        ],
      },
      {
        title: "Ganesh Mantra",
        items: [
          "Removes obstacles and challenges in life",
          "Brings success in new beginnings",
          "Improves decision-making and clarity",
          "Ensures smooth progress in work",
        ],
      },
    ],

    right: [
      {
        title: "Key Points",
        items: [
          "Chanting should be done daily with focus",
          "Best results come with correct pronunciation",
          "Guided by astrologer for personalized mantras",
          "Can be done at home or temple",
          "Most effective during early morning hours",
        ],
      },
      {
        title: "Benefits of Mantra and Chanting",
        items: [
          "Reduces negative energy and stress",
          "Improves mental peace and clarity",
          "Enhances focus and concentration",
          "Brings spiritual growth and awareness",
          "Attracts success and positive energy",
          "Strengthens planetary balance",
          "Supports overall life stability",
        ],
      },
      {
        title: "Who Should Do Mantra Chanting?",
        items: [
          "People facing stress and anxiety issues",
          "Individuals with continuous life obstacles",
          "Those seeking career and financial growth",
          "People experiencing emotional imbalance",
          "Anyone feeling negativity or confusion",
          "Individuals seeking peace and success",
        ],
      },
    ],
  },

  "Yantra & Spiritual Tools": {
    heading: "Yantra & Spiritual Tools",
    description:
      "Yantras and spiritual tools are energized sacred symbols that balance energies, remove negativity, and attract success, protection, and prosperity in life.",

    left: [
      {
        title: "Shree Yantra",
        items: [
          "Brings wealth, prosperity, and abundance",
          "Attracts positive energy and success",
          "Removes financial blockages and negativity",
          "Enhances spiritual growth and focus",
        ],
      },
      {
        title: "Kuber Yantra",
        items: [
          "Invokes Lord Kuber for financial stability",
          "Improves savings and money flow",
          "Supports business growth and profits",
          "Reduces financial stress and instability",
        ],
      },
      {
        title: "Maha Mrityunjaya Yantra",
        items: [
          "Provides protection from diseases and fear",
          "Promotes healing and long life",
          "Reduces negative energies and obstacles",
          "Strengthens mental and physical health",
        ],
      },
      {
        title: "Navgraha Yantra",
        items: [
          "Balances all nine planetary energies",
          "Reduces effects of planetary doshas",
          "Brings harmony in different life areas",
          "Supports overall life stability and progress",
        ],
      },
      {
        title: "Vastu Yantra",
        items: [
          "Corrects energy flow in home or office",
          "Removes Vastu defects and negativity",
          "Improves peace and relationships",
          "Attracts success and positivity in environment",
        ],
      },
      {
        title: "Durga Yantra",
        items: [
          "Provides protection from negative forces",
          "Builds courage and inner strength",
          "Removes fear and obstacles in life",
          "Enhances confidence and stability",
        ],
      },
    ],

    right: [
      {
        title: "Key Points",
        items: [
          "Must be energized before use by experts",
          "Should be placed in correct direction",
          "Works best with proper rituals and faith",
          "Based on individual kundli analysis",
          "Can be used at home or workplace",
        ],
      },
      {
        title: "Benefits of Yantra & Spiritual Tools",
        items: [
          "Attracts positive energy and success",
          "Removes obstacles and negativity",
          "Improves financial and career growth",
          "Brings mental peace and stability",
          "Strengthens spiritual connection",
          "Protects from harmful energies",
          "Enhances overall life balance",
        ],
      },
      {
        title: "Who Should Use Yantras?",
        items: [
          "People facing financial problems",
          "Individuals with continuous obstacles in life",
          "Those experiencing stress or negativity",
          "People seeking career growth and stability",
          "Individuals wanting spiritual protection",
          "Anyone aiming for success and peace",
        ],
      },
    ],
  },

  "Simple Daily Remedies": {
    heading: "Simple Daily Remedies",
    description:
      "Simple daily remedies are easy lifestyle practices that reduce negativity, balance energies, and bring peace, success, and stability in everyday life.",

    left: [
      {
        title: "Morning Sun Water Ritual",
        items: [
          "Drinking water facing rising Sun daily",
          "Improves energy, confidence, and positivity",
          "Strengthens Sun planet influence",
          "Brings clarity and motivation in life",
        ],
      },
      {
        title: "Tulsi Plant Worship",
        items: [
          "Offering water to Tulsi plant daily",
          "Removes negativity from surroundings",
          "Brings peace and spiritual protection",
          "Improves health and mental calmness",
        ],
      },
      {
        title: "Lighting Diya in Evening",
        items: [
          "Lighting ghee lamp in home temple",
          "Removes darkness and negative energies",
          "Attracts positivity and divine blessings",
          "Improves family harmony and peace",
        ],
      },
      {
        title: "Chanting Short Mantras Daily",
        items: [
          "Reciting simple mantras with focus",
          "Reduces stress and mental confusion",
          "Improves concentration and inner strength",
          "Brings stability and positivity",
        ],
      },
      {
        title: "Feeding Animals or Birds",
        items: [
          "Offering food to cows or birds",
          "Reduces karmic negativity and doshas",
          "Increases good karma and blessings",
          "Brings peace and satisfaction",
        ],
      },
      {
        title: "Keeping Clean and Organized Space",
        items: [
          "Maintaining cleanliness at home daily",
          "Improves energy flow and positivity",
          "Removes stagnant and negative energy",
          "Supports success and mental clarity",
        ],
      },
    ],

    right: [
      {
        title: "Key Points",
        items: [
          "Easy to follow in daily routine",
          "No complex rituals required",
          "Works gradually with consistency",
          "Suitable for all age groups",
          "Can be done at home anytime",
        ],
      },
      {
        title: "Benefits of Daily Remedies",
        items: [
          "Reduces stress and negativity",
          "Improves mental peace and focus",
          "Attracts positive energy in life",
          "Enhances health and well-being",
          "Supports financial and career growth",
          "Strengthens spiritual connection",
          "Brings harmony in daily life",
        ],
      },
      {
        title: "Who Should Follow Daily Remedies?",
        items: [
          "People facing daily stress or confusion",
          "Individuals with ongoing life problems",
          "Those seeking peace and stability",
          "People wanting positive lifestyle change",
          "Individuals with career or financial issues",
          "Anyone wanting simple spiritual growth",
        ],
      },
    ],
  },
};

export default function RemediesTypesSection() {
  const [activeTab, setActiveTab] = useState("Puja & Rituals");
  const [animate, setAnimate] = useState(true);

  const handleTab = (tab) => {
    setAnimate(false);
    setTimeout(() => {
      setActiveTab(tab);
      setAnimate(true);
    }, 150);
  };

  const data = DATA[activeTab];

  return (
    <section className="relative overflow-hidden bg-[url('/assets/remedies-types-bg.png')] bg-cover bg-center bg-no-repeat pb-2 lg:pb-14 xl:pb-18 2xl:pt-14">
      <div className="relative z-2 mx-auto max-w-[1540px] px-[70px] max-[991px]:px-5">

        <div className="text-center">
          <Title title={"Types of Remedies We Offer"} Class={"text-white"} />
        </div>

        {/* Tabs */}
        <div className="mb-7 pt-8 flex flex-wrap justify-center gap-[10px]">
          {Object.keys(DATA).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTab(tab)}
              className={`py-3 w-[45%] md:w-[30%] rounded-[12px] border border-primary text-xs md:text-[16px] font-bold ${activeTab === tab
                ? "bg-primary text-black"
                : "text-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          className={`transition-all duration-500 ${animate
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
            }`}
        >
          <div className="mx-auto max-w-[1200px]">

            <h3 className="text-[44px] font-extrabold text-primary mb-3">
              {data.heading}
            </h3>

            <p className="text-[18px] text-primary underline mb-6">
              {data.description}
            </p>

            <div
              className={`grid gap-7 ${activeTab === "Puja & Rituals"
                  ? "grid-cols-1 md:grid-cols-[1fr_1px_1fr]"
                  : "grid-cols-1 md:grid-cols-3"
                }`}
            >

              {/* LEFT */}
              <div className={activeTab === "Puja & Rituals" ? "" : "md:col-span-2"}>
              <div className={activeTab === "Puja & Rituals" ? '' : 'grid grid-cols-2'}>
                {data.left.map((g) => (
                  <div key={g.title} className="mb-6">
                    <h4 className="text-[22px] font-bold text-white mb-2">
                      {g.title}
                    </h4>

                    <ul className="list-disc pl-5 space-y-1">
                      {g.items.map((it, i) => (
                        <li key={i} className="text-white text-[15px]">
                          {it}
                        </li>
                      ))}
                    </ul>

                    {g.note && (
                      <p className="text-white/90 mt-2">{g.note}</p>
                    )}
                  </div>
                ))}
              </div>
              </div>

              {activeTab === "Puja & Rituals" && (
                <div className="hidden md:block w-px bg-white/40" />
              )}

              {/* RIGHT */}
              <div>
                {data.right.map((b) => (
                  <div key={b.title} className="mb-6">
                    <h4 className="text-[22px] font-bold text-primary mb-2">
                      {b.title}
                    </h4>

                    <ul className="list-disc pl-5 space-y-1">
                      {b.items.map((it, i) => (
                        <li key={i} className="text-white text-[15px]">
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
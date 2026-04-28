import { ChevronDown } from "lucide-react";

export default function KundliMatchingSection() {
  return (
    <section className="relative overflow-hidden bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat pb-[90px] pt-[70px] max-[991px]:pb-20 max-[991px]:pt-[60px]">
      <div className="absolute inset-0 z-1 bg-black/40" />
      <div className="pointer-events-none absolute right-[34px] top-[82px] z-2 h-[190px] w-[190px] bg-[url('/assets/images/astro-symbol.png')] bg-contain bg-center bg-no-repeat opacity-[0.12] max-[991px]:right-[10px] max-[991px]:top-[90px] max-[991px]:h-[150px] max-[991px]:w-[150px]" />

      <div className="relative z-3 mx-auto max-w-[1540px] px-[55px] max-[991px]:px-5">
        <div className="mb-[26px] text-center max-[576px]:text-left">
          <h3 className="mb-[6px] text-[26px] font-extrabold leading-[1.15] text-white max-[991px]:text-[22px]">
            Start Your Kundli Matching
          </h3>
          <p className="m-0 text-[16px] leading-[1.4] text-white/90 max-[991px]:text-[14px]">
            Fill in the details below to check compatibility and marriage
            success.
          </p>
        </div>

        <div className="mx-auto mb-16 grid max-w-[1030px] grid-cols-1 gap-3 max-[1100px]:max-w-[480px] md:grid-cols-3">
          {/* Boy Card */}
          <div className="overflow-hidden rounded-[14px] bg-[#f5f5f5] shadow-[0_12px_28px_rgba(0,0,0,0.22)]">
            <div className="flex h-[42px] items-center justify-center bg-primary text-[13px] font-extrabold text-black">
              Enter Boy Details
            </div>
            <div className="p-[14px_12px_12px]">
              <div className="mb-[10px] flex flex-col">
                <label className="mb-[5px] text-[11px] font-medium leading-[1.2] text-[#1f1f1f]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[11px] text-[#1f1f1f] outline-none ring-1 ring-[#e4e4e4] placeholder:text-[#989898]"
                />
              </div>

              <div className="mb-[10px] flex flex-col">
                <label className="mb-[5px] text-[11px] font-medium leading-[1.2] text-[#1f1f1f]">
                  Gender
                </label>
                <select
                  defaultValue="Male"
                  className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[11px] text-[#1f1f1f] outline-none ring-1 ring-[#e4e4e4]"
                >
                  <option>Male</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="mb-[10px] flex flex-col">
                  <label className="mb-[5px] text-[11px] font-medium leading-[1.2] text-[#1f1f1f]">
                    Birth Date
                  </label>
                  <input
                    type="text"
                    placeholder="DD / MM / YYYY"
                    className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[11px] text-[#1f1f1f] outline-none ring-1 ring-[#e4e4e4] placeholder:text-[#989898]"
                  />
                </div>

                <div className="mb-[10px] flex flex-col">
                  <label className="mb-[5px] text-[11px] font-medium leading-[1.2] text-[#1f1f1f]">
                    Birth Time
                  </label>
                  <input
                    type="text"
                    placeholder="HH : MM"
                    className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[11px] text-[#1f1f1f] outline-none ring-1 ring-[#e4e4e4] placeholder:text-[#989898]"
                  />
                </div>
              </div>

              <div className="mb-[10px] flex flex-col">
                <label className="mb-[5px] text-[11px] font-medium leading-[1.2] text-[#1f1f1f]">
                  Birth Place
                </label>
                <input
                  type="text"
                  placeholder="Start Typing, then choose nearest place from list"
                  className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[11px] text-[#1f1f1f] outline-none ring-1 ring-[#e4e4e4] placeholder:text-[#989898]"
                />
              </div>

              <div className="mb-[10px] flex flex-col">
                <label className="mb-[5px] text-[11px] font-medium leading-[1.2] text-[#1f1f1f]">
                  Marital Status
                </label>
                <select
                  defaultValue=""
                  className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[11px] text-[#989898] outline-none ring-1 ring-[#e4e4e4]"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option className="text-[#1f1f1f]">Single</option>
                  <option className="text-[#1f1f1f]">Divorced</option>
                  <option className="text-[#1f1f1f]">Widowed</option>
                </select>
              </div>

              <button className="mt-1 h-9 w-full cursor-pointer rounded-[6px] bg-primary text-[13px] font-extrabold text-black">
                Next
              </button>
            </div>
          </div>

          {/* Girl Card */}
          <div className="overflow-hidden rounded-[14px] bg-[#f5f5f5] shadow-[0_12px_28px_rgba(0,0,0,0.22)]">
            <div className="flex h-[42px] items-center justify-center bg-primary text-[13px] font-extrabold text-black">
              Enter Girl Details
            </div>
            <div className="p-[14px_12px_12px]">
              <div className="mb-[10px] flex flex-col">
                <label className="mb-[5px] text-[11px] font-medium leading-[1.2] text-[#1f1f1f]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[11px] text-[#1f1f1f] outline-none ring-1 ring-[#e4e4e4] placeholder:text-[#989898]"
                />
              </div>

              <div className="mb-[10px] flex flex-col">
                <label className="mb-[5px] text-[11px] font-medium leading-[1.2] text-[#1f1f1f]">
                  Gender
                </label>
                <select
                  defaultValue="Female"
                  className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[11px] text-[#1f1f1f] outline-none ring-1 ring-[#e4e4e4]"
                >
                  <option>Female</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="mb-[10px] flex flex-col">
                  <label className="mb-[5px] text-[11px] font-medium leading-[1.2] text-[#1f1f1f]">
                    Birth Date
                  </label>
                  <input
                    type="text"
                    placeholder="DD / MM / YYYY"
                    className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[11px] text-[#1f1f1f] outline-none ring-1 ring-[#e4e4e4] placeholder:text-[#989898]"
                  />
                </div>

                <div className="mb-[10px] flex flex-col">
                  <label className="mb-[5px] text-[11px] font-medium leading-[1.2] text-[#1f1f1f]">
                    Birth Time
                  </label>
                  <input
                    type="text"
                    placeholder="HH : MM"
                    className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[11px] text-[#1f1f1f] outline-none ring-1 ring-[#e4e4e4] placeholder:text-[#989898]"
                  />
                </div>
              </div>

              <div className="mb-[10px] flex flex-col">
                <label className="mb-[5px] text-[11px] font-medium leading-[1.2] text-[#1f1f1f]">
                  Birth Place
                </label>
                <input
                  type="text"
                  placeholder="Start Typing, then choose nearest place from list"
                  className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[11px] text-[#1f1f1f] outline-none ring-1 ring-[#e4e4e4] placeholder:text-[#989898]"
                />
              </div>

              <div className="mb-[10px] flex flex-col">
                <label className="mb-[5px] text-[11px] font-medium leading-[1.2] text-[#1f1f1f]">
                  Marital Status
                </label>
                <select
                  defaultValue=""
                  className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[11px] text-[#989898] outline-none ring-1 ring-[#e4e4e4]"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option className="text-[#1f1f1f]">Single</option>
                  <option className="text-[#1f1f1f]">Divorced</option>
                  <option className="text-[#1f1f1f]">Widowed</option>
                </select>
              </div>

              <button className="mt-1 h-9 w-full cursor-pointer rounded-[6px] bg-primary text-[13px] font-extrabold text-black">
                Continue
              </button>
            </div>
          </div>

          {/* Result Card */}
          <div className="overflow-hidden rounded-[14px] bg-[#f5f5f5] shadow-[0_12px_28px_rgba(0,0,0,0.22)]">
            <div className="flex h-[42px] items-center justify-center bg-primary text-[13px] font-extrabold text-black">
              Result
            </div>

            <div className="p-[14px_12px_12px]">
              <div className="mb-[14px] flex justify-center">
                <div className="grid h-[120px] w-[120px] place-items-center rounded-full bg-[conic-gradient(#f5c518_0deg_157deg,#000_157deg_360deg)]">
                  <div className="flex h-[94px] w-[94px] flex-col items-center justify-center rounded-full bg-white">
                    <div className="text-[20px] font-extrabold leading-none text-black">
                      14
                      <span className="text-[12px] font-extrabold text-primary">
                        /32
                      </span>
                    </div>
                    <div className="mt-[5px] text-[11px] font-bold leading-[1.2] text-black">
                      Similarity
                    </div>
                  </div>
                </div>
              </div>

              <p className="mb-[10px] text-[9.5px] leading-[1.55] text-[#2d2d2d]">
                A below-average match. Some important aspects need attention.
                This match shows moderate compatibility, while there are some
                positive areas like emotional understanding and communication,
                a few key aspects need more careful evaluation for mutual
                understanding.
              </p>

              <div>
                <h4 className="mb-[6px] text-[11px] font-extrabold leading-[1.2] text-black">
                  Compatibility Breakdown
                </h4>
                <ul className="mb-2 list-none p-0">
                  <li className="mb-[2px] text-[9px] leading-[1.45] text-[#222]">
                    <strong className="font-extrabold">Communication:</strong>{" "}
                    8/8
                  </li>
                  <li className="mb-[2px] text-[9px] leading-[1.45] text-[#222]">
                    <strong className="font-extrabold">
                      Emotional Bonding:
                    </strong>{" "}
                    3/7
                  </li>
                  <li className="mb-[2px] text-[9px] leading-[1.45] text-[#222]">
                    <strong className="font-extrabold">
                      Values &amp; Lifestyle:
                    </strong>{" "}
                    2/5
                  </li>
                  <li className="mb-[2px] text-[9px] leading-[1.45] text-[#222]">
                    <strong className="font-extrabold">Mutual Respect:</strong>{" "}
                    1/6
                  </li>
                  <li className="mb-[2px] text-[9px] leading-[1.45] text-[#222]">
                    <strong className="font-extrabold">Intellect:</strong> 0/6
                  </li>
                </ul>
              </div>

              <div className="mt-2 border-t border-[#d9d9d9]">
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between border-b border-[#d9d9d9] bg-transparent py-[10px] text-[10px] font-bold text-[#111]"
                >
                  <span>Dosha Analysis</span>
                  <ChevronDown size={16} />
                </button>

                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between border-b border-[#d9d9d9] bg-transparent py-[10px] text-[10px] font-bold text-[#111]"
                >
                  <span>Astrological Advice</span>
                  <ChevronDown size={16} />
                </button>

                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between border-b border-[#d9d9d9] bg-transparent py-[10px] text-[10px] font-bold text-[#111]"
                >
                  <span>Final Verdict</span>
                  <ChevronDown size={16} />
                </button>
              </div>

              <button className="mt-1 h-9 w-full cursor-pointer rounded-[6px] bg-primary text-[13px] font-extrabold text-black">
                Continue
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[900px]">
          <h3 className="mb-4 text-[34px] font-extrabold leading-[1.08] text-white max-[991px]:text-[28px] max-[576px]:text-[24px]">
            <span className="text-primary">Kundli Matching</span> – Find Your
            Perfect
            <br />
            Life Partner with e-Pandit Ji
          </h3>

          <p className="mb-[10px] max-w-[940px] text-[16px] leading-[1.55] text-white/95 max-[991px]:text-[15px] max-[576px]:text-[14px]">
            At E-Pandit Ji, we understand that marriage is not just a union of
            two individuals, but a sacred bond of two souls and families. Our
            Kundli Matching service is designed to help you find the most
            compatible life partner based on the ancient science of Vedic
            astrology.
          </p>

          <p className="mb-[10px] max-w-[940px] text-[16px] leading-[1.55] text-white/95 max-[991px]:text-[15px] max-[576px]:text-[14px]">
            Kundli Milan, also known as Gun Milan, is a traditional method used
            to analyze the compatibility between a bride and groom. It is based
            on the comparison of their birth charts, considering planetary
            positions, stars (nakshatras), and other astrological factors. Our
            platform provides accurate and reliable kundli matching results to
            guide you in making the right decision.
          </p>
        </div>
      </div>
    </section>
  );
}
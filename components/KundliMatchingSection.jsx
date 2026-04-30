import { ChevronDown } from "lucide-react";
import Title from "./Uiux/Title";
import Description from "./Uiux/Description";
import Button from "./Uiux/Button";

export default function KundliMatchingSection() {
  return (
    <section className="relative overflow-hidden bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat pt-10 pb-4">
      <div className="absolute inset-0 z-1 bg-black/40" />
      <div className="pointer-events-none absolute right-[34px] top-[82px] z-2 h-[190px] w-[190px] bg-[url('/assets/images/astro-symbol.png')] bg-contain bg-center bg-no-repeat opacity-[0.12] max-[991px]:right-[10px] max-[991px]:top-[90px] max-[991px]:h-[150px] max-[991px]:w-[150px]" />

      <div className="relative z-3 inn_container">
        <div className="mb-[26px] text-center ">
          <Title
            title={'Start Your Kundli Matching'}
            Class={'text-white'}
          />
          <div className="pt-2">
            <Description
              description={'Fill in the details below to check compatibility and marriage success.'}
              Class={'text-white'}
            />
          </div>
        </div>

        <div className="mx-auto mb-16 grid max-w-[1130px] grid-cols-1 gap-3 max-[1100px]:max-w-[480px] md:grid-cols-3 px-4 md:px-0">
          {/* Boy Card */}
          <div className="max-h-[580px] overflow-hidden rounded-[14px] bg-[#f5f5f5] shadow-[0_12px_28px_rgba(0,0,0,0.22)]">
            <div className="flex py-3 items-center justify-center bg-primary text-[24px] text-black">
              Enter Boy Details
            </div>
            <div className="p-[14px_12px_12px] flex flex-col justify-around h-[88%]">
              <div className="mb-[10px] flex flex-col">
                <label className="mb-[5px] text-[16px]  leading-[1.2] text-[#1f1f1f]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[14px] text-[#1f1f1f] outline-none ring-1 ring-[#e4e4e4] placeholder:text-[#989898]"
                />
              </div>

              <div className="mb-[10px] flex flex-col">
                <label className="mb-[5px] text-[16px]  leading-[1.2] text-[#1f1f1f]">
                  Gender
                </label>
                <select
                  defaultValue="Male"
                  className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[14px] text-[#1f1f1f] outline-none ring-1 ring-[#e4e4e4]"
                >
                  <option>Male</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="mb-[10px] flex flex-col">
                  <label className="mb-[5px] text-[16px]  leading-[1.2] text-[#1f1f1f]">
                    Birth Date
                  </label>
                  <input
                    type="text"
                    placeholder="DD / MM / YYYY"
                    className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[14px] text-[#1f1f1f] outline-none ring-1 ring-[#e4e4e4] placeholder:text-[#989898]"
                  />
                </div>

                <div className="mb-[10px] flex flex-col">
                  <label className="mb-[5px] text-[16px]  leading-[1.2] text-[#1f1f1f]">
                    Birth Time
                  </label>
                  <input
                    type="text"
                    placeholder="HH : MM"
                    className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[14px] text-[#1f1f1f] outline-none ring-1 ring-[#e4e4e4] placeholder:text-[#989898]"
                  />
                </div>
              </div>

              <div className="mb-[10px] flex flex-col">
                <label className="mb-[5px] text-[16px]  leading-[1.2] text-[#1f1f1f]">
                  Birth Place
                </label>
                <input
                  type="text"
                  placeholder="Start Typing, then choose nearest place from list"
                  className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[14px] text-[#1f1f1f] outline-none ring-1 ring-[#e4e4e4] placeholder:text-[#989898]"
                />
              </div>

              <div className="mb-[10px] flex flex-col">
                <label className="mb-[5px] text-[16px]  leading-[1.2] text-[#1f1f1f]">
                  Marital Status
                </label>
                <select
                  defaultValue=""
                  className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[14px] text-[#989898] outline-none ring-1 ring-[#e4e4e4]"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option className="text-[#1f1f1f]">Single</option>
                  <option className="text-[#1f1f1f]">Divorced</option>
                  <option className="text-[#1f1f1f]">Widowed</option>
                </select>
              </div>

              <button className="w-full px-8 py-2.5 bg-primary text-black font-primary text-lg rounded-2xl">
                Next
              </button>
            </div>
          </div>

          {/* Girl Card */}
          <div className="max-h-[580px] overflow-hidden rounded-[14px] bg-[#f5f5f5] shadow-[0_12px_28px_rgba(0,0,0,0.22)]">
            <div className="flex py-3 items-center justify-center bg-primary text-[24px] text-black">
              Enter Girl Details
            </div>
            <div className="p-[14px_12px_12px] flex flex-col justify-around h-[88%]">
              <div className="mb-[10px] flex flex-col">
                <label className="mb-[5px] text-[16px]  leading-[1.2] text-[#1f1f1f]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[14px] text-[#1f1f1f] outline-none ring-1 ring-[#e4e4e4] placeholder:text-[#989898]"
                />
              </div>

              <div className="mb-[10px] flex flex-col">
                <label className="mb-[5px] text-[16px]  leading-[1.2] text-[#1f1f1f]">
                  Gender
                </label>
                <select
                  defaultValue="Male"
                  className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[14px] text-[#1f1f1f] outline-none ring-1 ring-[#e4e4e4]"
                >
                  <option>Female</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="mb-[10px] flex flex-col">
                  <label className="mb-[5px] text-[16px]  leading-[1.2] text-[#1f1f1f]">
                    Birth Date
                  </label>
                  <input
                    type="text"
                    placeholder="DD / MM / YYYY"
                    className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[14px] text-[#1f1f1f] outline-none ring-1 ring-[#e4e4e4] placeholder:text-[#989898]"
                  />
                </div>

                <div className="mb-[10px] flex flex-col">
                  <label className="mb-[5px] text-[16px]  leading-[1.2] text-[#1f1f1f]">
                    Birth Time
                  </label>
                  <input
                    type="text"
                    placeholder="HH : MM"
                    className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[14px] text-[#1f1f1f] outline-none ring-1 ring-[#e4e4e4] placeholder:text-[#989898]"
                  />
                </div>
              </div>

              <div className="mb-[10px] flex flex-col">
                <label className="mb-[5px] text-[16px]  leading-[1.2] text-[#1f1f1f]">
                  Birth Place
                </label>
                <input
                  type="text"
                  placeholder="Start Typing, then choose nearest place from list"
                  className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[14px] text-[#1f1f1f] outline-none ring-1 ring-[#e4e4e4] placeholder:text-[#989898]"
                />
              </div>

              <div className="mb-[10px] flex flex-col">
                <label className="mb-[5px] text-[16px]  leading-[1.2] text-[#1f1f1f]">
                  Marital Status
                </label>
                <select
                  defaultValue=""
                  className="h-[34px] w-full rounded bg-[#ececec] px-[10px] text-[14px] text-[#989898] outline-none ring-1 ring-[#e4e4e4]"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option className="text-[#1f1f1f]">Single</option>
                  <option className="text-[#1f1f1f]">Divorced</option>
                  <option className="text-[#1f1f1f]">Widowed</option>
                </select>
              </div>

              <button className="w-full px-8 py-2.5 bg-primary text-black font-primary text-lg rounded-2xl">
                Next
              </button>
            </div>
          </div>

          {/* Result Card */}
          <div className="overflow-hidden rounded-[14px] bg-[#f5f5f5] shadow-[0_12px_28px_rgba(0,0,0,0.22)]">
            <div className="flex py-3 items-center justify-center bg-primary text-[24px] text-black">
              Result
            </div>

            <div className="p-[14px_12px_12px]">
              <div className="mb-[14px] flex justify-center">
                <div className="grid h-[160px] w-[160px] place-items-center rounded-full bg-[conic-gradient(#f5c518_0deg_157deg,#000_157deg_360deg)]">
                  <div className="flex h-[134px] w-[134px] flex-col items-center justify-center rounded-full bg-white">
                    <div className="text-4xl font-extrabold leading-none text-black">
                      14
                      <span className="text-3xl font-extrabold text-primary">
                        /32
                      </span>
                    </div>
                    <div className="mt-[5px] text-[16px] font-bold leading-[1.2] text-black">
                      Similarity
                    </div>
                  </div>
                </div>
              </div>

              <p className="mb-[10px] text-[14px] leading-[1.55] text-[#2d2d2d] text-center">
                A below-average match. Some important aspects need attention.
                <br />
                This match shows moderate compatibility, while there are some
                positive areas like emotional understanding and communication,
                a few key aspects need more careful evaluation for mutual
                understanding.
              </p>

              <div>
                <h4 className="mb-[6px] text-lg font-extrabold leading-[1.2] text-black">
                  Compatibility Breakdown
                </h4>
                <ul className="mb-2 list-none p-0">
                  <li className="mb-[2px] text-[14px] leading-[1.45] text-[#222]">
                    <strong className="font-extrabold">Communication:</strong>{" "}
                    8/8
                  </li>
                  <li className="mb-[2px] text-[14px] leading-[1.45] text-[#222]">
                    <strong className="font-extrabold">
                      Emotional Bonding:
                    </strong>{" "}
                    3/7
                  </li>
                  <li className="mb-[2px] text-[14px] leading-[1.45] text-[#222]">
                    <strong className="font-extrabold">
                      Values &amp; Lifestyle:
                    </strong>{" "}
                    2/5
                  </li>
                  <li className="mb-[2px] text-[14px] leading-[1.45] text-[#222]">
                    <strong className="font-extrabold">Mutual Respect:</strong>{" "}
                    1/6
                  </li>
                  <li className="mb-[2px] text-[14px] leading-[1.45] text-[#222]">
                    <strong className="font-extrabold">Intellect:</strong> 0/6
                  </li>
                </ul>
              </div>

              <div className="mt-2 border-t border-[#d9d9d9]">
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between border-b border-[#d9d9d9] bg-transparent py-[10px] text-base font-primary text-[#111]"
                >
                  <span>Dosha Analysis</span>
                  <ChevronDown size={16} />
                </button>

                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between border-b border-[#d9d9d9] bg-transparent py-[10px] text-base font-primary text-[#111]"
                >
                  <span>Astrological Advice</span>
                  <ChevronDown size={16} />
                </button>

                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between border-b border-[#d9d9d9] bg-transparent py-[10px] text-base font-primary text-[#111]"
                >
                  <span>Final Verdict</span>
                  <ChevronDown size={16} />
                </button>
              </div>

              <button className="w-full px-8 py-2.5 bg-primary text-black font-primary text-lg rounded-2xl">
                Continue
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl text-center md:text-left">

          <Title
            title={'<span class="text-primary">Kundli Matching</span> – Find Your  Perfect Life Partner with e-Pandit Ji'}
            Class={''}
          />

          <div className="pt-4 space-y-3">
            <Description
              description={'At E-Pandit Ji, we understand that marriage is not just a union of two individuals, but a sacred bond of two souls and families. Our Kundli Matching service is designed to help you find the most compatible life partner based on the ancient science of Vedic astrology.'}
              Class={'text-white'}
            />
            <Description
              description={'Kundli Milan, also known as Gun Milan, is a traditional method used to analyze the compatibility between a bride and groom. It is based on the comparison of their birth charts, considering planetary positions, stars (nakshatras), and other astrological factors. Our platform provides accurate and reliable kundli matching results to guide you in making the right decision.'}
              Class={'text-white'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
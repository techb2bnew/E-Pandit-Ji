import Image from "next/image";

export default function KundliAboutAnalysis() {
  return (
    <section className="relative overflow-hidden bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat pb-[70px] pt-20 max-[991px]:py-[60px]">
      <div className="absolute inset-0 z-1 bg-black/40" />

      <div className="relative z-2 mx-auto max-w-[1540px] px-[50px] max-[991px]:px-5">
        <div className="mt-6 grid grid-cols-1 items-center gap-6 md:grid-cols-[360px_1fr] md:gap-[42px]">
          <div className="flex items-end justify-center">
            <div className="relative h-[260px] w-[50%] min-w-[240px] max-w-[320px] max-[991px]:h-[260px] md:h-[320px] md:w-[320px]">
              <Image
                src="/assets/ganesh.png"
                alt="Ganesh Kundli"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="max-w-full md:max-w-[760px]">
            <h3 className="mb-[14px] text-[32px] font-extrabold leading-[1.05] text-white max-[991px]:text-[28px] max-[576px]:text-[24px]">
              What We Analyze in
              <br />
              Your Kundli
            </h3>

            <p className="mb-[14px] text-[16px] leading-normal text-white/90 max-[991px]:text-[15px]">
              Our Kundli creation process provides detailed insights into:
            </p>

            <ul className="m-0 list-disc pl-[18px]">
              <li className="mb-[6px] text-[16px] leading-[1.65] text-white/95 max-[991px]:text-[15px]">
                <strong className="font-bold text-white">
                  Lagna (Ascendant):
                </strong>{" "}
                Your personality and life direction
              </li>
              <li className="mb-[6px] text-[16px] leading-[1.65] text-white/95 max-[991px]:text-[15px]">
                <strong className="font-bold text-white">
                  Rashi (Moon Sign):
                </strong>{" "}
                Emotional nature and mindset
              </li>
              <li className="mb-[6px] text-[16px] leading-[1.65] text-white/95 max-[991px]:text-[15px]">
                <strong className="font-bold text-white">Nakshatra:</strong>{" "}
                Your strengths and destiny patterns
              </li>
              <li className="mb-[6px] text-[16px] leading-[1.65] text-white/95 max-[991px]:text-[15px]">
                <strong className="font-bold text-white">
                  Planetary Positions:
                </strong>{" "}
                Influence of planets on your life
              </li>
              <li className="mb-[6px] text-[16px] leading-[1.65] text-white/95 max-[991px]:text-[15px]">
                <strong className="font-bold text-white">
                  Doshas (if any):
                </strong>{" "}
                Identify challenges and imbalances
              </li>
              <li className="mb-[6px] text-[16px] leading-[1.65] text-white/95 max-[991px]:text-[15px]">
                <strong className="font-bold text-white">Dasha Periods:</strong>{" "}
                Timing of important life events
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
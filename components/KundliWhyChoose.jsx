export default function KundliWhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat pb-[90px] pt-[70px] max-[991px]:pb-20 max-[991px]:pt-[60px]">
      <div className="absolute inset-0 z-1 bg-black/40" />

      <div className="relative z-2 mx-auto max-w-[1540px] px-[60px] max-[991px]:px-5">
        <div className="mb-[100px] max-w-[760px] max-[991px]:mb-[70px] max-[576px]:mb-[55px]">
          <h2 className="mb-7 text-[34px] font-extrabold leading-[1.1] text-white max-[991px]:text-[28px] max-[576px]:text-[24px]">
            Why Choose e-Pandit Ji ?
          </h2>

          <h3 className="mb-3 text-[24px] font-medium leading-tight text-white max-[991px]:text-[21px] max-[576px]:text-[19px]">
            Get Accurate Kundli Instantly
          </h3>

          <p className="mb-[18px] max-w-[760px] text-[17px] leading-[1.55] text-white/90 max-[991px]:text-[15px]">
            We combine traditional Vedic astrology with modern technology to
            deliver quick and precise Kundli reports.
          </p>

          <ul className="m-0 list-disc pl-[22px] max-[576px]:pl-[18px]">
            <li className="mb-[2px] text-[17px] leading-[1.9] text-white/95 max-[991px]:text-[15px] max-[576px]:leading-[1.7]">
              Accurate and instant Kundli generation
            </li>
            <li className="mb-[2px] text-[17px] leading-[1.9] text-white/95 max-[991px]:text-[15px] max-[576px]:leading-[1.7]">
              Easy-to-use online platform
            </li>
            <li className="mb-[2px] text-[17px] leading-[1.9] text-white/95 max-[991px]:text-[15px] max-[576px]:leading-[1.7]">
              Detailed analysis with clear explanations
            </li>
            <li className="mb-[2px] text-[17px] leading-[1.9] text-white/95 max-[991px]:text-[15px] max-[576px]:leading-[1.7]">
              Trusted Vedic astrology calculations
            </li>
            <li className="mb-[2px] text-[17px] leading-[1.9] text-white/95 max-[991px]:text-[15px] max-[576px]:leading-[1.7]">
              Expert guidance and remedies
            </li>
          </ul>
        </div>

        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="mb-[14px] text-[36px] font-extrabold leading-[1.1] text-white max-[991px]:text-[30px] max-[576px]:text-[26px]">
            Make Your <span className="text-primary">Kundli</span> Today
          </h2>

          <p className="mx-auto mb-[10px] max-w-[700px] text-[17px] leading-normal text-white/95 max-[991px]:text-[15px]">
            Take the first step toward understanding your future. Enter your
            birth details and get your personalized Kundli report instantly.
          </p>

          <p className="mb-6 text-[20px] leading-[1.4] text-white max-[991px]:text-[18px] max-[576px]:text-[17px]">
            Find compatibility. Build trust. Begin your journey together.
          </p>

          <button className="h-12 min-w-[265px] cursor-pointer rounded-[10px] bg-primary px-[26px] text-[17px] font-extrabold text-black max-[576px]:w-full max-[576px]:min-w-0">
            Get Started Now
          </button>

          <p className="mt-[10px] text-[14px] leading-[1.4] text-white">
            100% private | Fast delivery
          </p>
        </div>
      </div>
    </section>
  );
}
export default function NumerologyCTA() {
  return (
    <section className="relative overflow-hidden bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat pb-[90px] pt-[72px]">
      <div className="absolute inset-0 z-1 bg-black/65" />

      <div className="relative z-2 mx-auto max-w-[980px] px-6 text-center">
        <h2 className="mb-3 text-[34px] font-extrabold leading-[1.1] text-white">
          Start Your <span className="text-primary">Numerology</span> Today
        </h2>

        <p className="mx-auto mb-[10px] max-w-[760px] text-[16px] leading-[1.55] text-white/95">
          Take the first step towards a successful and harmonious numerology
          life. Enter your details and let E-Pandit Ji guide you with accurate
          numerology insights.
        </p>

        <p className="mb-6 text-[20px] leading-[1.4] text-white">
          Find compatibility. Build trust. Begin your journey together.
        </p>

        <button className="h-12 min-w-[205px] cursor-pointer rounded-lg bg-primary px-6 text-[18px] font-extrabold text-black">
          Get Started Now
        </button>

        <p className="mt-[10px] text-[15px] text-white">
          100% private | Fast delivery
        </p>
      </div>
    </section>
  );
}
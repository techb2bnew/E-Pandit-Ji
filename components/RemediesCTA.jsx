export default function RemediesCTA() {
  return (
    <section className="relative overflow-hidden bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat pb-[54px] pt-[34px]">
      <div className="absolute inset-0 z-1 bg-black/80" />

      <div className="relative z-2 mx-auto max-w-[900px] px-6 text-center">
        <h2 className="mb-2 text-[48px] font-extrabold leading-[1.08] text-white">
          Start Your <span className="text-primary">Journey</span> Today
        </h2>

        <p className="mb-1 text-[17px] leading-[1.45] text-white/95">
          Discover your true path. Understand your destiny. Start your journey
          with e-Pandit Ji today.
        </p>

        <p className="mb-[18px] text-[18px] leading-[1.45] text-white">
          Find compatibility. Build trust. Begin your journey together.
        </p>

        <button className="h-[54px] min-w-[220px] cursor-pointer rounded-lg bg-primary px-6 text-[18px] font-extrabold text-black">
          Get Started Now
        </button>

        <p className="mt-[10px] text-[15px] text-white">
          100% private | Fast delivery
        </p>
      </div>
    </section>
  );
}
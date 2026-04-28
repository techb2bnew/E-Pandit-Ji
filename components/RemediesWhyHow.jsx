export default function RemediesWhyHow() {
  return (
    <section className="relative overflow-hidden bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat pb-6 pt-[34px]">
      <div className="absolute inset-0 z-1 bg-black/70" />

      <div className="relative z-2 mx-auto grid max-w-[1540px] grid-cols-1 items-start gap-[34px] px-[84px] md:grid-cols-[1fr_1px_1fr] max-[991px]:px-5">
        <div>
          <h2 className="mb-[10px] text-[38px] font-extrabold leading-[1.05] text-white max-[991px]:text-[30px]">
            Why Choose e-Pandit Ji
            <br />
            Remedies
          </h2>

          <ul className="m-0 list-disc pl-[18px]">
            {[
              "Based on accurate Kundli analysis",
              "Simple and easy to follow",
              "Effective and result-oriented",
              "No harmful or complicated rituals",
              "Trusted Vedic practices",
            ].map((t) => (
              <li key={t} className="text-[16px] leading-[1.65] text-white">
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden min-h-[160px] w-px bg-white/30 md:block max-[991px]:hidden" />

        <div>
          <h2 className="mb-[10px] text-[38px] font-extrabold leading-[1.05] text-white max-[991px]:text-[30px]">
            How It Works
          </h2>

          <ul className="m-0 list-disc pl-[18px]">
            {[
              "Enter your birth details",
              "We analyze your Kundli",
              "Identify doshas and issues",
              "Get personalized remedies instantly",
            ].map((t) => (
              <li key={t} className="text-[16px] leading-[1.65] text-white">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
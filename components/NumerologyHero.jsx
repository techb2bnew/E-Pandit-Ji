export default function NumerologyHero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat pb-[120px] pt-[190px] max-[991px]:min-h-0 max-[991px]:pb-20 max-[991px]:pt-[140px]">
      <div className="absolute inset-0 z-1 bg-black/70" />

      <div className="relative z-2 mx-auto max-w-[1100px] px-6 text-center">
        <p className="mb-[14px] text-[27px] font-medium text-primary max-[991px]:text-[18px]">
          Trusted By 10k+ Users...
        </p>

        <h1 className="mx-auto mb-[18px] max-w-[1100px] text-[44px] font-extrabold leading-[1.12] text-white max-[991px]:text-[34px] max-[576px]:text-[28px]">
          Unlock the Power of <span className="text-primary">Numerology</span>{" "}
          in Your Life
        </h1>

        <p className="mx-auto mb-7 max-w-[980px] text-[25px] leading-[1.45] text-white/95 max-[991px]:text-[18px] max-[576px]:text-[16px]">
          Discover your destiny through numbers. Get instant numerology reports
          powered by advanced API &amp; expert analysis.
        </p>

        <button className="h-14 min-w-[205px] cursor-pointer rounded-[10px] bg-primary px-[26px] text-[19px] font-extrabold text-black max-[991px]:h-[50px] max-[991px]:text-[17px] max-[576px]:w-full max-[576px]:min-w-0">
          Calculate My Number
        </button>

        <p className="mt-[14px] text-[18px] text-white max-[991px]:text-[15px]">
          100% private | Fast delivery
        </p>
      </div>
    </section>
  );
}
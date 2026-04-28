import Image from "next/image";

export default function KundliHero() {

  return (
    <section className="relative min-h-screen w-full overflow-hidden pb-20 pt-[180px] max-[991px]:pt-[120px]">
      <div className="absolute inset-0 z-0 bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(40,0,80,0.2)_0%,rgba(0,0,0,0.7)_70%)]" />
      </div>

      <div className="relative z-2 mx-auto grid max-w-[1540px] grid-cols-[1.1fr_1fr] items-center px-6 max-[991px]:grid-cols-1 max-[991px]:gap-[30px] max-[991px]:text-center">
        {/* LEFT CONTENT */}
        <div className="max-w-[680px] max-[991px]:mx-auto">
          <p className="mb-[14px] text-[22px] font-bold text-primary">
            Trusted By 10k+ Users...
          </p>

          <h1 className="mb-5 text-[72px] font-extrabold leading-[1.05] text-white underline decoration-[#5fa8ff] decoration-[4px] underline-offset-[6px] max-[1280px]:text-[60px] max-[991px]:text-[40px]">
            Create Your Accurate
            <br />
            Kundli Instantly
          </h1>

          <p className="mb-8 text-[26px] leading-normal text-white/90 max-[1280px]:text-[22px] max-[991px]:text-[18px]">
            Get your detailed birth chart (Janam Kundli) with precise Vedic
            calculations. Understand your future, career, marriage, and life
            path.
          </p>

          {/* <button className={styles.cta} href="#kundliFormSection">
            Get Started Now
          </button> */}
          <button
            className="mb-[14px] h-16 cursor-pointer rounded-[14px] bg-primary px-8 text-[26px] font-extrabold text-black max-[1280px]:h-[58px] max-[1280px]:text-[22px] max-[991px]:w-full max-[991px]:text-[18px]"
            onClick={() => {
              document.getElementById("kundliFormSection")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Get Started Now
          </button>
          <p className="text-[20px] text-white max-[991px]:text-[16px]">
            100% private | Fast delivery
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-[620px] max-[991px]:mx-auto max-[991px]:max-w-[380px]">
            <Image
              src="/assets/kundli-2.png"
              alt="Kundli"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
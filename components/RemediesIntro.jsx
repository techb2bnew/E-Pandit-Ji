import Image from "next/image";

export default function RemediesIntro() {
  return (
    <section className="relative overflow-hidden bg-[url('/assets/night-sky-2.png')] bg-cover bg-center bg-no-repeat py-[86px]">
      <div className="absolute inset-0 z-1 bg-black/45" />

      <div className="relative z-2 mx-auto grid max-w-[1540px] grid-cols-1 items-center gap-10 px-[76px] md:grid-cols-[430px_1fr] max-[991px]:px-5">
        <div>
          <div className="relative h-[328px] w-full overflow-hidden rounded-[30px] max-[991px]:h-60">
            <Image
              src="/assets/remedies-intro.png"
              alt="What are astrological remedies"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-[54px] font-extrabold leading-[1.04] text-white max-[991px]:text-[34px]">
            What Are Astrological
            <br />
            Remedies?
          </h2>

          <p className="mb-[18px] text-[22px] leading-[1.45] text-white/95 max-[991px]:text-[18px]">
            At e-Pandit Ji, we provide trusted and effective remedies based on
            Vedic astrology principles. These remedies are designed to reduce
            the negative effects of planetary positions and enhance positive
            influences in your life.
          </p>

          <p className="mb-[18px] text-[22px] leading-[1.45] text-white/95 max-[991px]:text-[18px]">
            Whether you are facing issues in career, marriage, health, or
            finances, our remedies help restore balance and guide you toward
            success and peace.
          </p>
        </div>
      </div>
    </section>
  );
}
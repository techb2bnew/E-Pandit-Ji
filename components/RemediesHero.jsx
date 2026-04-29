import Image from "next/image";
import Title from "./Uiux/Title";
import Button from "./Uiux/Button";

export default function RemediesHero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[url('/assets/remedy-hero-bg.png')] bg-cover bg-center bg-no-repeat pb-20 pt-[180px] max-[991px]:min-h-0 max-[991px]:pb-[70px] max-[991px]:pt-[140px]">
      <div className="absolute inset-0 z-1" />

      <div className="relative z-2 mx-auto grid max-w-[1540px] grid-cols-1 items-center gap-[30px] px-14 text-center md:grid-cols-[1.05fr_1fr] md:text-left max-[991px]:px-5">
        <div className="max-w-[640px] max-[991px]:mx-auto">
          <p className="text-primary text-xl md:text-2xl 2xl:text-[26px] font-semibold mb-4">
            Powerful Astrological Solutions
          </p>

       

          <Title 
           title={'Effective Remedies to Improve Your Life'}
           Class={'text-white'}
           />

          <p className="mb-6 max-w-[620px] text-[24px] leading-[1.45] text-white/95 max-[991px]:text-[18px]">
            Overcome life challenges with simple and powerful Vedic remedies.
            Balance your energies, reduce doshas, and attract positivity.
          </p>

          <Button
           button_name={'Get Personalized Remedies'}
           Class={'text-black'}
           variant={'primary'}
           />

          <p className="mt-3 text-[18px] text-white max-[991px]:text-[15px]">
            100% private | Fast delivery
          </p>
        </div>

        <div className="relative flex min-h-[520px] items-center justify-center max-[991px]:min-h-[380px]">
          <div className="absolute inset-0 z-1 bg-[url('/assets/zodiac-bg.png')] bg-contain bg-center bg-no-repeat opacity-40" />
          <div className="relative z-2 aspect-square w-full max-w-[620px]">
            <Image
              src="/assets/remedies-hero.png"
              alt="Astrological remedies"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
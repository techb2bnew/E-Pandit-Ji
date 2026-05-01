import Image from "next/image";
import Title from "./Uiux/Title";
import Button from "./Uiux/Button";
import MobileBannerBar from "./Uiux/MobileBannerBar";
import Link from "next/link";

export default function RemediesHero() {
  return (
    <section className="relative lg:min-h-[760px] overflow-hidden bg-[url('/assets/remedy-hero-bg.png')] bg-cover bg-center bg-no-repeat md:pb-16 2xl:pb-20 pt-[180px] max-[991px]:min-h-0 max-[991px]:pt-[130px]">
      <div className="absolute inset-0 z-1" />

      <div className="relative z-2 mx-auto grid max-w-[1540px] grid-cols-1 items-center gap-[30px] px-14 text-center md:grid-cols-[1.05fr_1fr] md:text-left max-[991px]:px-5">
        <div className="max-w-[640px] max-[991px]:mx-auto order-2 md:order-1">
          <p className="text-primary text-xl md:text-2xl 2xl:text-[26px] font-semibold mb-4">
            Effective Vedic Remedies
          </p>
          <Title
            title={'Vedic Remedies for Peace & Prosperity in Life '}
            Class={'text-white'}
          />

          <p className="mb-6 max-w-[620px] text-[24px] leading-[1.45] text-white/95 max-[991px]:text-[18px]">
            Vedic remedies by our astrologers help bring peace, prosperity, and solutions to life problems by balancing energies, removing obstacles, and improving overall well-being naturally. 
          </p>

         <Link
          href={'/remedy#Remedies_We_Offer'}
          >
          <Button
            button_name={'Vedic Remedies we Offer'}
            Class={'text-black'}
            variant={'primary'}
          />
          </Link>

          <p className="mt-3 text-[18px] text-white max-[991px]:text-[15px]">
            100% private | Fast delivery
          </p>
        </div>

        <div className="order-1 md:order-2">
          <MobileBannerBar />
          <div className="relative flex items-center justify-center">
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
      </div>
    </section>
  );
}
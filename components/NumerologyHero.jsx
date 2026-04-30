import Button from "./Uiux/Button";
import Description from "./Uiux/Description";
import MobileBannerBar from "./Uiux/MobileBannerBar";
import Title from "./Uiux/Title";

export default function NumerologyHero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat pb-[120px] pt-[190px] max-[991px]:min-h-0 max-[991px]:pb-1 max-[991px]:pt-[140px]">
      <div className="absolute inset-0 z-1 bg-black/70" />

      <div className="relative z-2 inn_container text-center md:pt-22 md:pb-16">
        <MobileBannerBar />
        <p className="text-primary text-xl md:text-2xl 2xl:text-[26px] font-semibold mb-4 pt-12">
          Trusted By 10k+ Users...
        </p>


         <Title
          title={"Unlock the Power of <span class='text-primary'> Numerology <span/> in Your Life"}
          Class={''}
        />

        <Description
         description={'Discover your destiny through numbers. Get instant numerology reports powered by advanced API &amp; expert analysis.'}
         Class={'text-white max-w-5xl mx-auto'}
        />

        <div className="pt-8">
          
          <Button
           button_name={'Calculate My Number'}
           variant={'primary'}
           Class={'text-black'}
          />

        <p className="text-[20px] text-white max-[991px]:text-[16px] pt-3">
          100% private | Fast delivery
        </p>
        </div>
      </div>
    </section>
  );
}
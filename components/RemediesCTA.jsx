import Link from "next/link";
import Button from "./Uiux/Button";
import Description from "./Uiux/Description";
import Title from "./Uiux/Title";

export default function RemediesCTA() {
  return (
    <section className="relative overflow-hidden  pb-8 md:pb-[54px] pt-[34px]">
      {/* <div className="absolute inset-0 z-1 bg-black/80" /> */}

      <div className="mx-auto max-w-[820px] text-center 2xl:pt-15">

          <Title
            title={'Start Your <span class="text-primary">Journey</span> Today'}
            Class={'text-white'}
          />

          <Description
            description={'Discover your true path. Understand your destiny. Start your journey with e-Pandit Jee today.'}
            variant={'secondary'}
            Class={'text-white'}
          />

          <Description
            description={'Find compatibility. Build trust. Begin your journey together.'}
            Class={'text-white pt-2'}
          />
         
          <Link
           href={'/remedy#Remedies_We_Offer'}
           >
          <Button
            button_name={'Get Started Now'}
            variant={'primary'}
            Class={'text-black mt-8'}
          />
          </Link>
          <p className="mt-4 text-[18px] leading-[1.4] text-white">
            100% private | Fast delivery
          </p>
        </div>
    </section>
  );
}
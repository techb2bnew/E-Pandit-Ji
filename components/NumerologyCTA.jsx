import Link from "next/link";
import Button from "./Uiux/Button";
import Description from "./Uiux/Description";
import Title from "./Uiux/Title";

export default function NumerologyCTA({black_bg}) {
  return (
    <section className="relative overflow-hidden bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat pb-10 md:pb-[90px] pt-[72px]">
      {
        black_bg === false ? 
        null :
        <div className="absolute inset-0 z-1 bg-black/65" />
      }
      

      <div className="relative z-2 mx-auto max-w-[980px] px-6 text-center">
        <h2 className="mb-3 text-[34px] font-extrabold leading-[1.1] text-white">

        </h2>
        <Title
          title={'Check Your <span class="text-primary">Numerology</span> Report Today'}
          Class={'text-white'}
        />

        <Description
          description={'Numerology reports help to understand your life path, hidden strengths, challenges, and future opportunities for success and growth.'}
          // variant={'secondary'}
          Class={'text-white'}
        />

        {/* <Description
          description={' Find compatibility. Build trust. Begin your journey together.'}
          Class={'text-white mt-4'}
        /> */}

        <div className="pt-8">
          <Link
           href={'/numerology#numerology_card'}
           >
           <Button
             button_name={'Get Started Now'}
             Class={'text-black'}
             variant={'primary'}
           />
          </Link>
        </div>

        <p className="mt-[10px] text-xl text-white">
          100% private | Fast delivery
        </p>
      </div>
    </section>
  );
}
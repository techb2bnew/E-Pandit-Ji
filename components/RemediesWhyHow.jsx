import Description from "./Uiux/Description";
import Title from "./Uiux/Title";

export default function RemediesWhyHow() {
  return (
    <section className="relative overflow-hidden pb-6 pt-[34px]">
      {/* <div className="absolute inset-0 z-1 bg-black/70" /> */}

      <div className="relative z-2 mx-auto grid max-w-[1540px] grid-cols-1 items-start gap-3 md:gap-[34px] px-[84px] md:grid-cols-[1fr_1px_1fr] max-[991px]:px-5 text-center md:text-start">
        <div>
          <Title
            title={'Why Choose e-Pandit Ji Remedies'}
            Class={'text-white'}
          />

          <ul className="mt-5 list-disc pl-[18px]">
            {[
              "Based on accurate Kundli analysis",
              "Simple and easy to follow",
              "Effective and result-oriented",
              "No harmful or complicated rituals",
              "Trusted Vedic practices",
            ].map((t) => (

              <Description
                key={t}
                description={t}
                variant={'secondary'}
                Class={'text-white'}
              />
            ))}
          </ul>
        </div>

        <div className="hidden min-h-[160px] w-px bg-white/30 md:block max-[991px]:hidden" />

        <div>
           <Title
            title={'How It Works'}
            Class={'text-white'}
          />
          <ul className="m-0 list-disc pl-[18px]">
            {[
              "Enter your birth details",
              "We analyze your Kundli",
              "Identify doshas and issues",
              "Get personalized remedies instantly",
            ].map((t) => (
             <Description
                key={t}
                description={t}
                variant={'secondary'}
                Class={'text-white'}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
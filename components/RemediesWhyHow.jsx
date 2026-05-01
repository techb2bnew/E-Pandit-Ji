import Description from "./Uiux/Description";
import Title from "./Uiux/Title";

export default function RemediesWhyHow() {
  return (
    <section className="relative overflow-hidden pb-6 pt-[34px]">
      {/* <div className="absolute inset-0 z-1 bg-black/70" /> */}

      <div className="relative z-2 mx-auto grid max-w-[1580px] grid-cols-1 items-start gap-3 md:gap-[34px] px-[84px] md:grid-cols-[1fr_1px_1fr] max-[991px]:px-5 text-center md:text-start">
        <div>
          <Title
            title={'Why Choose ई-Pandit ji'}
            Class={'text-white'}
          />

          <ul className="mt-5 list-disc pl-[18px] space-y-2.5">
            {[
              "Accurate Kundli Analysis for Better Guidance Provides precise horoscope reading for clear life direction",
              "Experienced and Knowledgeable Astrologers Available Skilled experts ensure reliable and authentic astrological solutions",
              "Personalized Remedies Based on Individual Kundli Tailored solutions for specific life problems and needs",
              "Simple and Effective Vedic Solutions Offered Easy remedies that bring positive and lasting results",
              "Trusted Platform for Astrology and Guidance Provides honest, reliable, and spiritually aligned consultations and support",
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
            title={'How It Works?'}
            Class={'text-white'}
          />
          <ul className="m-0 list-disc pl-[18px] space-y-2.5">
            {[
              "Collects Birth Details for Kundli Creation Uses accurate date, time, and place of birth",
              "Analyzes Planetary Positions in Horoscope Chart Studies planets to understand life patterns and influences",
              "Identifies Doshas and Life Imbalances Clearly Detects problems affecting marriage, career, and health",
              "Suggests Personalized Vedic Remedies and Solutions Provides mantras, puja, gemstones, and simple daily remedies",
              "Guides Through Expert Astrologer Consultation Support Offers clear advice for better life decisions and growth"
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
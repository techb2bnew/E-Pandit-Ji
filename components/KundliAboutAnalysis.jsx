import Image from "next/image";
import Title from "./Uiux/Title";
import Description from "./Uiux/Description";
import Button from "./Uiux/Button";


const key_points = [
  'Lagna (Ascendant): Your personality and life direction',
  'Rashi (Moon Sign): Emotional nature and mindset',
  'Nakshatra: Your strengths and destiny patterns',
  'Planetary Positions: Influence of planets on your life',
  'Doshas (if any): Identify challenges and imbalances',
  'Dasha Periods: Timing of important life events'
]
export default function KundliAboutAnalysis() {
  return (
    <div className="bg-black/40">
      <div className="inn_container py-14  bg-cover bg-center bg-no-repeat">
        <div className="text-center md:text-start">
          <Title
            title={"Create Accurate Kundli <span class='text-white'> – Discover <br/> Your Life Path with e-Pandit Ji </span"}
            Class={'text-primary'}
          />

          <div className="pt-5 space-y-3">
            {
              [
                'At e-Pandit Ji, we believe your birth chart is the key to understanding your true potential and life journey. Our platform is designed to generate accurate and detailed Janam Kundli using precise Vedic astrology calculations.',
                'Your Kundli is created based on your date, time, and place of birth, helping you gain deep insights into your personality, career, relationships, and future opportunities.',
                'Our advanced system ensures fast, reliable, and easy-to-understand reports, so you can make better life decisions with confidence.'
              ].map((item, index) => (
                <Description
                  key={index}
                  description={item}
                  Class={'text-white'}
                />
              ))
            }
          </div>
        </div>

        <div className="pt-12 grid md:grid-cols-[2fr_3fr] gap-8">
          <div>
            <Image
              src="/assets/ganeshnew.png"
              alt="Ganesh Kundli"
              className="object-contain"
              width={1000}
              height={500}
            />
          </div>
          <div className="flex items-center">
            <div className="md:max-w-[90%] mx-auto">

              <div className="text-center md:text-start">
                <Title
                  title={'What We Analyze in Your Kundli'}
                  Class={'text-white'}
                />
                <Description
                  description={'Our Kundli creation process provides detailed insights into:'}
                  Class={'text-white'}
                />
              </div>

              <div className="pt-2 ps-4 space-y-2">
                {
                  key_points.map((item, index) => (
                    <Description
                      description={item}
                      Class={'text-white'}
                      variant={'secondary'}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <div className="text-center md:text-start">
            <Title
              title={'Why Choose e-Pandit Ji ?'}
              Class={'text-white'}
            />
            <Description
              description={'Get Accurate Kundli Instantly'}
              Class={'text-white pt-2'}
            />
            <Description
              description={'We combine traditional Vedic astrology with modern technology to deliver quick and precise Kundli reports.'}
              Class={'text-white pt-2'}
              variant={'secondary'}
            />
          </div>
          <div className="pt-4 ps-4 space-y-2">
            {
              key_points.map((item, index) => (
                <Description
                  description={item}
                  Class={'text-white'}
                  variant={'secondary'}
                />
              ))
            }
          </div>
        </div>

        <div className="mx-auto max-w-[820px] text-center pt-15">

          <Title
            title={' Make Your <span class="text-primary">Kundli</span> Today'}
            Class={'text-white'}
          />

          <Description
            description={'Take the first step toward understanding your future. Enter your birth details and get your personalized Kundli report instantly.'}
            variant={'secondary'}
            Class={'text-white'}
          />

          <Description
            description={'Find compatibility. Build trust. Begin your journey together.'}
            Class={'text-white pt-2'}
          />

          <Button
            button_name={'Get Started Now'}
            variant={'primary'}
            Class={'text-black mt-8'}
          />

          <p className="mt-4 text-[18px] leading-[1.4] text-white">
            100% private | Fast delivery
          </p>
        </div>
      </div>
    </div>

  );
}
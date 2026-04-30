import Image from "next/image";
import Title from "./Uiux/Title";
import Description from "./Uiux/Description";

export default function RemediesIntro() {
  return (
    <section className="relative overflow-hidden bg-[url('/assets/night-sky-2.png')] bg-cover bg-center bg-no-repeat py-12 xl:py-18 2xl:py-22">
      <div className="absolute inset-0 z-1 bg-black/45" />

      <div className="inn_container">
        <div className="relative z-2 mx-auto grid grid-cols-1 gap-y-10 lg:grid-cols-2 ">
          <div>
            <div className="relative">
              <Image
                src="/assets/remedies-intro.png"
                alt="What are astrological remedies"
                width={1000}
                height={500}
                className=""
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="md:max-w-[90%] mx-auto text-center md:text-start">
              <Title
                title={'What Are Astrological Remedies?'}
                Class={'text-white'}
              />

              <div className="pt-5 space-y-4">
                {
                  [
                    'At e-Pandit Ji, we provide trusted and effective remedies based on Vedic astrology principles. These remedies are designed to reduce the negative effects of planetary positions and enhance positive influences in your life.',
                    'Whether you are facing issues in career, marriage, health, or finances, our remedies help restore balance and guide you toward success and peace.'
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
          </div>
        </div>
      </div>
    </section>
  );
}
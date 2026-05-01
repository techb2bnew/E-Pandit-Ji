import Image from "next/image";
import Title from "./Uiux/Title";
import Description from "./Uiux/Description";
import Button from "./Uiux/Button";




export default function KundliAboutAnalysis({Ganeshsectiondata,whychoosedata}) {
  return (
    <div className="bg-black/40">
      <div className="inn_container py-14  bg-cover bg-center bg-no-repeat">
        <div className="text-center md:text-start">
          <Title
            title={"Accurate Kundli <span class='text-white'> –  Preparation <br/> by Expert Astrologers</span"}
            Class={'text-primary'}
          />

          <div className="pt-5 space-y-3">
            {
              [
                'Our qualified Pandit Ji and astrologers carefully analyze grah, nakshatra, stars, and Panchang to create a detailed and accurate Kundli. It includes comprehensive grah charts and precise predictions about your personality, career, relationships, health, and future. With deep insights into life events, opportunities, and challenges, our Kundli helps you understand your path better and make informed decisions with clarity, confidence, and trusted astrological guidance.',
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
                  title={Ganeshsectiondata?.title}
                  Class={'text-white'}
                />
                <Description
                  description={Ganeshsectiondata?.description}
                  Class={'text-white'}
                />
              </div>

              <div className="pt-2  space-y-2">
                {
                  Ganeshsectiondata?.keys.map((item, index) => (
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

        
        
          <div className="pt-12 grid md:grid-cols-[3fr_2fr] gap-8">
            <div className="flex items-center">
            <div className="md:max-w-[90%] mx-auto">

              <div className="text-center md:text-start">
                <Title
                  title={whychoosedata?.title}
                  Class={'text-white'}
                />
                <Description
                  description={whychoosedata?.description}
                  Class={'text-white'}
                />
              </div>

              <div className="pt-2  space-y-2">
                {
                  whychoosedata?.keys.map((item, index) => (
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
          <div>
            <Image
              src="/assets/aboutpandit1.png"
              alt="Ganesh Kundli"
              className="object-contain max-w-[80%] mx-auto"
              width={1000}
              height={500}
            />
          </div>
          
        </div>
   

        <div className="mx-auto max-w-[820px] text-center pt-15">

          <Title
            title={' Make Your <span class="text-primary">Kundli</span> to Predict Future Outcomes'}
            Class={'text-white'}
          />

          <Description
            description={'Make your Kundli with expert astrologers to receive accurate predictions about your life, career, relationships, and future. Our detailed analysis helps you understand opportunities and challenges, guiding you to make better, confident decisions with clarity and trust.'}
            variant={'secondary'}
            Class={'text-white'}
          />
{/* 
          <Description
            description={'Find compatibility. Build trust. Begin your journey together.'}
            Class={'text-white pt-2'}
          /> */}

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
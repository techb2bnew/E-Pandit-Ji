import Image from "next/image";
import Title from "./Uiux/Title";
import Button from "./Uiux/Button";
import MobileBannerBar from "./Uiux/MobileBannerBar";

export default function KundliHero({ top_bar, title, description, button_name, lower_bar, banner_image, bg_gradient }) {

  return (
    <section className="relative min-h-screen w-full overflow-hidden pb-10 md:pb-20 pt-[180px] max-[991px]:pt-30">\
      {
        bg_gradient === false ? null : (
          <div className="absolute inset-0 z-0 bg-[url('/assets/GALAXY20.webp')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(40,0,80,0.2)_0%,rgba(0,0,0,0.7)_70%)]" />
          </div>
        )
      }


      <div className="relative z-2 mx-auto grid max-w-[1540px] grid-cols-[1.1fr_1fr] items-center px-6 max-[991px]:grid-cols-1 max-[991px]:gap-[10px] max-[991px]:text-center">

        <div className="max-w-[680px] max-[991px]:mx-auto order-2 md:order-1 ">
          <p className="text-primary text-xl md:text-2xl 2xl:text-[26px] font-semibold mb-4">
            {top_bar}
          </p>

          <Title
            title={title}
            Class={'text-white'}
            isH1
          />

          <p className="mt-4 xl:mt-6 text-white text-xl md:text-[22px] xl:text-3xl  font-secondary">
            {description}
          </p>

          <div className="pt-8">
            <Button
              onClick={() => {
                document.getElementById("kundliFormSection")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              button_name={button_name}
              variant={'primary'}
              Class={'text-black'}
            />
          </div>
          <p className="text-[20px] text-white max-[991px]:text-[16px] pt-3">
            {lower_bar}
          </p>
        </div>

        <div>
          <MobileBannerBar />
          <div className="flex items-center justify-center order-1 md:order-2 ">
            <div className="relative aspect-square w-full max-w-[620px] max-[991px]:mx-auto max-[991px]:max-w-[380px]">
              <Image
                src={banner_image}
                alt="Kundli"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
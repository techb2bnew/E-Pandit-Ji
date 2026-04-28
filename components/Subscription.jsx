import Image from "next/image";
import Button from "./Uiux/Button";
import Title from "./Uiux/Title";

const plans = [
  {
    tag: "Weekly",
    price: "300",
    duration: "/week",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet"
    ]
  },
  {
    tag: "Monthly",
    price: "1500",
    duration: "/month",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet"
    ],
    featured: true
  },
  {
    tag: "Yearly",
    price: "12000",
    duration: "/year",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet"
    ]
  }
];

export default function Subscription() {
  return (
    <section className="relative w-full overflow-hidden bg-black px-6 py-14">
      <div className="mx-auto max-w-[1280px] text-center">
        <p className="mb-2 text-[22px] xl:text-2xl 2xl:text-[26px] font-medium 2xl:leading-[1.2] text-primary max-md:text-[16px]">
          Click To Choose
        </p>

        <Title title={"Our Subscription"} Class={"text-white"} />

        <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-[26px] max-md:gap-[14px]">
          <Button
            button_name={"Kundli"}
            variant={"primary"}
            Class={"text-black"}
          />
          <Button
            button_name={"Numerology"}
            variant={"secondary"}
            Class={"text-primary"}
          />
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {plans.map(plan =>
            <div
              key={plan.tag}
              className="relative flex  flex-col rounded-[28px] border-[1.5px] border-[#caa300] bg-black/95 px-7 pt-12 pb-6 max-w-[350px] mx-auto"
            >
              <div className="absolute left-1/2 top-[-16px] inline-flex h-9 min-w-[110px] -translate-x-1/2 items-center justify-center rounded-[12px] bg-primary px-[18px] text-[18px] font-bold text-[#111111] max-md:h-8 max-md:min-w-[96px] max-md:text-[16px]">
                {plan.tag}
              </div>

              <div className="flex justify-center gap-1 text-center items-center">
                <span className="translate-y-[-6px] text-[34px] font-bold leading-none text-white max-md:text-[28px]">
                  ₹
                </span>
                <span className="text-4xl xl:text-[45px] 2xl:text-[54px] font-primary leading-none text-white ">
                  {plan.price}
                </span>
                <span className="mb-2 text-[30px] font-normal leading-[1.2] text-white max-md:text-[22px]">
                  {plan.duration}
                </span>
              </div>

              <p className="mt-3 text-[16px] font-normal leading-[1.65] text-white/90 max-md:text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="mt-[26px] flex flex-col gap-[14px]">
                {plan.features.map((feature, index) =>
                  <div
                    key={index}
                    className="flex items-center gap-[10px] text-[16px] font-normal leading-[1.4] text-white max-md:text-[15px]"
                  >
                    <span className="shrink-0 text-[16px] leading-none text-primary">
                      <Image
                        src={"/icons/check-primary.svg"}
                        width={22}
                        height={22}
                        alt=""
                        className=""
                      />
                    </span>
                    <span>
                      {feature}
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-10">
                <Button
                  button_name={"Book Now"}
                  variant={"primary"}
                  Class={"text-black w-full"}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

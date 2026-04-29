// import Image from "next/image";
// import styles from "@/styles/components/Hero.module.css";

// export default function Hero() {

//   return (
//     <section className={styles.hero}>
//       <div className={styles.backgroundMedia}>
//         <video autoPlay muted loop playsInline className={styles.video}>
//           <source
//             src="/assets/videos/6575338_Spacecraft_Nature_3840x2160.mp4"
//             type="video/mp4"
//           />
//         </video>
//         <div className={styles.overlay}></div>
//       </div>

//       <div className={styles.container}>
//         <div className={styles.leftContent}>
//           <div className={styles.welcomeBadge}>Welcome to Pandit Ji</div>

//           <h1 className={styles.mainTitle}>
//             Accurate Kundli & Instant Astrology Guidance
//           </h1>

//           <p className={styles.description}>
//             From Kundli to Numerology-discover what the stars say about your
//             life today.
//           </p>

//           <button
//             className={styles.ctaBtn}
//             onClick={() => {
//               document.getElementById("kundliFormSection")?.scrollIntoView({
//                 behavior: "smooth",
//               });
//             }}
//           >
//            Get Customized Kundli
//           </button>

//         </div>

//         <div className={styles.rightContent}>
//           <div className={styles.zodiacCircle}></div>

//           <div className={styles.bookContainer}>
//             <Image
//               src="/assets/kundli-book.png"
//               alt="Premium Personalized Kundli"
//               width={520}
//               height={700}
//               className={styles.bookImg}
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Title from "./Uiux/Title";
import Button from "./Uiux/Button";
import Link from "next/link";
const services = [
  {
    title: "Kundli",
    image: "/assets/kundli.png",
    href: "/kundli",
  },
  {
    title: "Numerology",
    image: "/assets/numerology.png",
    href: "/numerology",
  },
  {
    title: "Match Making",
    image: "/assets/match-making.png",
    href: "/match-making",

  },
  {
    title: "Remedy",
    image: "/assets/remedy.png",
    href: "/remedy",
  },
];
export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#050816] pt-[160px] pb-12 md:pb-[80px]  flex items-center">
      {/* Background */}
      <div className="absolute  z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover "
        >
          <source
            src="/assets/videos/6575338_Spacecraft_Nature_3840x2160.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay (strong like screenshot) */}
        <div className="absolute inset-0 " />
      </div>

      {/* Content */}
      <div className="inn_container pt-30 md:pt-10 2xl:pt-14">
        <div className="relative z-10  w-full mx-auto grid lg:grid-cols-2 items-center gap-6 2xl:gap-10">
          {/* LEFT */}
          <div className="text-center lg:text-start order-2 md:order-1">
            <p className="text-primary text-xl md:text-2xl 2xl:text-[26px] font-semibold mb-4">
              Welcome to Pandit Ji
            </p>

            <Title title="Accurate Kundli & Instant Astrology Guidance" isH1 />

            <p className="mt-4 xl:mt-6 text-white text-xl md:text-[22px] xl:text-3xl 2xl:text-4xl font-secondary">
              From Kundli to Numerology-discover what the stars say about your
              life today.
            </p>

            <div className="mt-6 lg:mt-12">
              <Button
                variant={'primary'}
                button_name={"Get Customized Kundli"}
                Class={"text-black"}
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center items-center order-1 md:order-2">
            {/* Zodiac Circle */}
            <div className="absolute w-full h-full md:left-[20%]
            bg-[url('/assets/zodiac-circle.png')] bg-contain bg-no-repeat
            opacity-20" />

            {/* Book */}
            <div className="relative z-10 md:translate-x-10 ">
              <Image
                src="/assets/kundli-book.webp"
                alt="kundli"
                width={510}
                height={650}
                className="drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] max-w-[300px] md:max-w-[400px] 2xl:max-w-[510px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-22 block md:hidden">
        <div className="mt-14 grid grid-cols-4 gap-1 md:gap-3 max-w-7xl mx-auto max-w-[90%]">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col items-center"
            >
              <div className="flex aspect-square w-full max-w-[270px] items-center justify-center rounded-[18px] bg-[#efe0b3] p-2 md:p-[18px] transition-[transform,box-shadow] duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_12px_28px_rgba(245,197,24,0.12)] max-md:max-w-[220px] max-md:rounded-[16px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={240}
                  height={240}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="mt-2 text-xs">
                {service.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

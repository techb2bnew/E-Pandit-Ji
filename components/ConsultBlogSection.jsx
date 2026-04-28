// import Image from "next/image";
// import { CalendarDays } from "lucide-react";
// import Title from "./Uiux/Title";

// const consultItems = [
//   {
//     title: "Love & Relationship",
//     image: "/assets/love.png",
//   },
//   {
//     title: "Marriage & Kundli",
//     image: "/assets/marriage.png",
//   },
//   {
//     title: "Career",
//     image: "/assets/career.png",
//   },
//   {
//     title: "Women Astrologer",
//     image: "/assets/women.png",
//   },
//   {
//     title: "Business",
//     image: "/assets/business.png",
//   },
//   {
//     title: "Money",
//     image: "/assets/money.png",
//   },
// ];



// export default function ConsultBlogSection() {
//   return (
//     <section className="relative w-full overflow-hidden bg-black px-6 pb-[90px] pt-[70px] max-md:px-4 max-md:pb-[70px] max-md:pt-14">
//       <div className="inn_container">
//         {/* Top consult section */}
//         <div className="text-center">

//            <Title
//             title={'Consult The <br /> Right Astrologer For You'}
//             Class={'text-primary'}
//           />

//           <div className="grid grid-cols-6 gap-6 pt-12">
//             {consultItems.map((item) => (
//               <div key={item.title} className="flex flex-col items-center">
//                 <div className="flex h-[170px] w-[170px] items-center justify-center max-md:h-24 max-md:w-24">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     width={500}
//                     height={500}
//                     className="h-full w-full object-contain"
//                   />
//                 </div>
//                 <p className="mt-[14px] max-w-[150px] text-center text-[18px] font-normal leading-[1.3] text-white max-md:max-w-[120px] max-md:text-[15px]">
//                   {item.title}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>


//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import Title from "./Uiux/Title";
import { CalendarDays } from "lucide-react";
import { FaCalendarAlt } from "react-icons/fa";
import Description from "./Uiux/Description";
const consultItems = [
  {
    title: "Love & Relationship",
    image: "/assets/love.png",
  },
  {
    title: "Marriage & Kundli",
    image: "/assets/marriage.png",
  },
  {
    title: "Career",
    image: "/assets/career.png",
  },
  {
    title: "Women Astrologer",
    image: "/assets/women.png",
  },
  {
    title: "Business",
    image: "/assets/business.png",
  },
  {
    title: "Money",
    image: "/assets/money.png",
  },
];
const blogCards = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    date: "01March, 2026",
    image: "/assets/blogs-3.png",
    large: true,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "01March, 2026",
    image: "/assets/blogs-1.png",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "01March, 2026",
    image: "/assets/blogs-2.png",
  },
];
export default function ConsultBlogSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black md:pb-14   min-h-[560px] md:pt-10">
      <div className="inn_container relative">

        {/* Title */}
        <div className="text-center absolute w-full">
          <Title
            title={"Consult The <br /> Right Astrologer For You"}
            Class={"text-primary w-fit mx-auto relative right-[3%]"}
          />
        </div>

        {/* Curved Layout */}
        <div className="relative grid grid-cols-2 md:block mx-auto pt-5 mt-10 md:h-[450px]  top-[80px] md:max-w-[90%] 2xl:max-w-full gap-y-8">
          {consultItems.map((item, index) => {

            const positions = [
              "left-[5%] top-[-50px] max-md:left-[20%] max-md:top-[20px]",
              "left-[22%] top-[50px] max-md:left-[50%] max-md:top-[20px]",
              "left-[40%] top-[140px] max-md:left-[80%] max-md:top-[20px]",
              "left-[60%] top-[140px] max-md:left-[20%] max-md:top-[190px]",
              "left-[78%] top-[50px] max-md:left-[50%] max-md:top-[190px]",
              "left-[95%] top-[-50px] max-md:left-[80%] max-md:top-[190px]",
            ];

            return (
              <div
                key={item.title}
                className={`md:absolute ${positions[index]} flex md:-translate-x-1/2 flex-col items-center`}
              >
                {/* Icon */}
                <div className="flex h-[100px] md:h-[130px] 2xl:h-[150px] w-[100px] md:w-[130px] 2xl:w-[150px] items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Text */}
                <p className="mt-2 max-w-[110px] text-center text-base md:text-[22px]  text-white">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
        {/* Bottom */}
        <div className="mt-[70px] grid grid-cols-1 items-start gap-7 max-md:mt-[46px] md:grid-cols-[1fr_0.92fr] md:gap-9 lg:px-10">
          <div className="overflow-hidden rounded-[24px] border border-white/20 bg-[rgba(8,8,8,0.95)]">
            <div className="h-[360px] w-full overflow-hidden max-md:h-60">
              <Image
                src={blogCards[0].image}
                alt={blogCards[0].title}
                width={620}
                height={360}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="px-7 pb-6 pt-[22px] max-md:px-[18px] max-md:pb-5 max-md:pt-[18px]">
              <h3 className="text-2xl line-clamp-2 md:text-3xl 2xl:text-4xl font-primary text-white">
                {blogCards[0].title}
              </h3>

              <Description
                description={blogCards[0].desc}
                Class={'text-white'}
              />
              <div className="mt-5 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
                <div className="inline-flex items-center gap-[10px] text-lg md:text-xl xl:text-[22px] font-secondary text-primary">
                  <FaCalendarAlt className="text-2xl md:text-3xl" />
                  <span>{blogCards[0].date}</span>
                </div>

                <button className="h-[46px] min-w-[145px] cursor-pointer rounded-[12px] border-[1.5px] border-[#caa300] bg-transparent text-[16px] font-medium text-primary hover:bg-[rgba(245,197,24,0.08)] max-md:h-[42px] max-md:min-w-[120px] max-md:text-[15px]">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="h-full flex items-center">
            <div className="pt-0 md:pt-[6px]">
              <div className="text-center md:text-start">
                <p className="mb-[6px] text-[22px] xl:text-2xl 2xl:text-[26px] font-medium text-primary">
                  Blogs
                </p>

                <Title
                  title={'Guidance In Our Blog'}
                  Class={'text-white'}
                />

                <Description
                  description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'}
                  Class={'text-white'}
                />
              </div>
              <div className="mt-[22px] flex flex-col gap-4">
                {blogCards.slice(1).map((item) => (
                  <div
                    key={item.image}
                    className="grid grid-cols-1 overflow-hidden rounded-[20px] border border-white/20 bg-[rgba(8,8,8,0.95)] md:grid-cols-[210px_1fr]"
                  >
                    <div className="h-[200px] w-full overflow-hidden md:h-[167px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={210}
                        height={150}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-center p-4">
                      <div className="inline-flex items-center gap-2 text-[18px] font-medium text-primary">
                        <FaCalendarAlt size={22} />
                        <span>{item.date}</span>
                      </div>

                      <h3 className="mt-3 text-[22px] md:text-2xl 2xl:text-3xl font-primary text-white line-clamp-2">
                        {item.title}
                      </h3>

                      <button className="mt-[14px] h-[38px] w-[116px] cursor-pointer rounded-[10px] border-[1.5px] border-[#caa300] bg-transparent text-[14px] font-medium text-primary hover:bg-[rgba(245,197,24,0.08)]">
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
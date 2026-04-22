import Image from "next/image";
import { CalendarDays } from "lucide-react";
import styles from "@/styles/components/ConsultBlogSection.module.css";

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
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Top consult section */}
        <div className={styles.consultWrap}>
          <h2 className={styles.consultHeading}>
            Consult The
            <br />
            Right Astrologer For You
          </h2>

          <div className={styles.consultGrid}>
            {consultItems.map((item) => (
              <div key={item.title} className={styles.consultItem}>
                <div className={styles.consultImageWrap}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={110}
                    height={110}
                    className={styles.consultImage}
                  />
                </div>
                <p className={styles.consultTitle}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom blog section */}
        <div className={styles.blogLayout}>
          <div className={styles.leftBlogCard}>
            <div className={styles.blogImageLargeWrap}>
              <Image
                src={blogCards[0].image}
                alt={blogCards[0].title}
                width={620}
                height={360}
                className={styles.blogImageLarge}
              />
            </div>

            <div className={styles.blogContent}>
              <h3 className={styles.blogTitleLarge}>{blogCards[0].title}</h3>
              <p className={styles.blogDesc}>{blogCards[0].desc}</p>

              <div className={styles.blogFooter}>
                <div className={styles.dateWrap}>
                  <CalendarDays size={22} />
                  <span>{blogCards[0].date}</span>
                </div>

                <button className={styles.readMoreBtn}>Read More</button>
              </div>
            </div>
          </div>

          <div className={styles.rightBlogArea}>
            <p className={styles.blogLabel}>Blogs</p>
            <h2 className={styles.blogHeading}>Guidance In Our Blog</h2>
            <p className={styles.blogTopDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>

            <div className={styles.smallBlogList}>
              {blogCards.slice(1).map((item) => (
                <div key={item.image} className={styles.smallBlogCard}>
                  <div className={styles.smallBlogImageWrap}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={210}
                      height={150}
                      className={styles.smallBlogImage}
                    />
                  </div>

                  <div className={styles.smallBlogContent}>
                    <div className={styles.smallDateWrap}>
                      <CalendarDays size={18} />
                      <span>{item.date}</span>
                    </div>

                    <h3 className={styles.smallBlogTitle}>{item.title}</h3>

                    <button className={styles.smallReadMoreBtn}>
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
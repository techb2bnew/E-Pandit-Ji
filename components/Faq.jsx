"use client";

import { useState, useRef, useEffect } from "react";
// import Image from "next/image";.

import styles from "@/styles/components/Faq.module.css";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Try to play the video
      const playVideo = async () => {
        try {
          await video.play();
          console.log('Video started playing');
        } catch (error) {
          console.log('Video autoplay failed:', error);
        }
      };
      playVideo();
    }
  }, []);

  return (
    <section className={styles.section} >
      <div className={styles.symbolBg} ></div>

      <div className={styles.container}>
        <div className={styles.leftContent}>
          <p className={styles.smallLabel}>FAQ’s</p>
          <h2 className={styles.heading}>Common Question About kundli</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className={styles.accordion}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className={styles.faqItem}>
                  <button
                    className={styles.faqButton}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    type="button"
                  >
                    <span className={styles.question}>{faq.question}</span>
                    <span className={styles.icon}>{isOpen ? "⌃" : "⌄"}</span>
                  </button>

                  {isOpen && (
                    <div className={styles.answerWrap}>
                      <p className={styles.answer}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.rightContent}>
          <div className={styles.videoWrapper}>
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="metadata"
              className={styles.video}
            >
              <source
                src="/assets/videos/0_Earth_Planet_1080x1920.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
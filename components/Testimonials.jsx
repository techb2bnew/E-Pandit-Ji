"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/components/Testimonials.module.css";

const testimonials = [
  {
    name: "Dinesh Kumar",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Rahul Sharma",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Priya Verma",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <div className={styles.imageFrame}>
            <Image
              src="/assets/palmistry-hand.png"
              alt="Palmistry hand"
              width={620}
              height={620}
              className={styles.handImage}
            />
          </div>
        </div>

        <div className={styles.rightContent}>
          <p className={styles.smallLabel}>Testimonials</p>
          <h2 className={styles.heading}>Our Client Say</h2>

          <div className={styles.testimonialCard}>
            <div className={styles.quoteMark}>❝❝</div>

            <p className={styles.testimonialText}>
              {activeTestimonial.text}
            </p>

            <p className={styles.clientName}>{activeTestimonial.name}</p>
          </div>

          <div className={styles.navButtons}>
            <button
              type="button"
              className={styles.navButton}
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              ←
            </button>

            <button
              type="button"
              className={styles.navButton}
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
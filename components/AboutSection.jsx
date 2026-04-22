import Image from "next/image";
import styles from "@/styles/components/AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bgVideoWrap}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={styles.bgVideo}
        >
          <source
            src="/assets/videos/GettyImages-1071921688.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.circleWrap}>
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className={styles.imageVideo}
                >
                <source
                    src="/assets/videos/0_Cosmic_Sky_2160x3840.mp4"
                    type="video/mp4"
                />
            </video>
        </div>

        <div className={styles.contentCol}>
          <p className={styles.label}>About us</p>
          <h2 className={styles.heading}>What we do</h2>

          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>

          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </section>
  );
}
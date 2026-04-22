import styles from "@/styles/components/KundliFormSection.module.css";
import { useState } from "react";

export default function KundliFormSection() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [result, setResult] = useState(null);

  const handleGetCustomizedKundli = async () => {
    try {
      setLoading(true);
      setApiError("");
      setResult(null);

      const response = await fetch("/api/get-kundli", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: 10,
          month: 5,
          year: 1990,
          hour: 19,
          min: 55,
          lat: 19.2,
          lon: 25.2,
          tzone: 5.5,
          ayanamsha: "LAHIRI",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Failed to fetch kundli details");
      }

      setResult(data);
      console.log("Your Kundli:", data);
    } catch (error) {
      setApiError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kundliFormSection" className={styles.section}>
      <div className={styles.bgOverlay}></div>
      <div className={styles.symbol}></div>

      <div className={styles.container}>
        <div className={styles.formWrap}>
          <h2 className={styles.heading}>Fill this Form for your kundli</h2>

          <form className={styles.form}>
            <div className={styles.grid}>
              <div className={styles.field}>
                <label>Full Name</label>
                <input type="text" placeholder="Enter Your Full Name" />
              </div>

              <div className={styles.field}>
                <label>Date of Birth</label>
                <input type="text" placeholder="01/04/2026" />
              </div>

              <div className={styles.field}>
                <label>Time of Birth</label>
                <input type="text" placeholder="12:00 AM" />
              </div>

              <div className={styles.field}>
                <label>Place of Birth</label>
                <input type="text" placeholder="Enter Your Place of Birth" />
              </div>

              <div className={styles.field}>
                <label>Gender</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Select Your Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className={styles.field}>
                <label>Phone Number</label>
                <input type="text" placeholder="Enter Your Mob. Number" />
              </div>

              <div className={styles.field}>
                <label>Email Address</label>
                <input type="email" placeholder="Enter Your Email Address" />
              </div>

              <div className={styles.field}>
                <label>Select Service</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Select Your Service
                  </option>
                  <option>Basic Kundli</option>
                  <option>Detailed Kundli</option>
                  <option>Marriage Kundli</option>
                  <option>Career Kundli</option>
                </select>
              </div>
            </div>

            <div className={styles.messageField}>
              <label>Message / Special Question</label>
              <textarea rows="5" />
            </div>

            <label className={styles.checkboxRow}>
              <input type="checkbox" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida.
              </span>
            </label>

            {/* <button type="submit" className={styles.submitBtn}>
              Get My Kundli
            </button> */}

            <button
              className={styles.submitBtn}
              onClick={handleGetCustomizedKundli}
              disabled={loading}
            >
              {loading ? "Loading..." : "Get My Kundli"}
            </button>
            {apiError ? <p style={{ color: "red", marginTop: 12 }}>{apiError}</p> : null}
          </form>
        </div>

        <div className={styles.topContent}>
          <h2 className={styles.mainHeading}>
            <span>Create Accurate Kundli</span> – Discover
            <br />
            Your Life Path with e-Pandit Ji
          </h2>

          <p className={styles.paragraph}>
            At e-Pandit Ji, we believe your birth chart is the key to
            understanding your true potential and life journey. Our platform is
            designed to generate accurate and detailed Janam Kundli using
            precise Vedic astrology calculations.
          </p>

          <p className={styles.paragraph}>
            Your Kundli is created based on your date, time, and place of
            birth, helping you gain deep insights into your personality,
            career, relationships, and future opportunities.
          </p>

          <p className={styles.paragraph}>
            Our advanced system ensures fast, reliable, and easy-to-understand
            reports, so you can make better life decisions with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
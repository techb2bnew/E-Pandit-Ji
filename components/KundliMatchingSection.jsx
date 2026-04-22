import { UserRound, FileText, Workflow, ShieldCheck, ChevronDown } from "lucide-react";
import styles from "@/styles/components/KundliMatchingSection.module.css";

export default function KundliMatchingSection() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>
      <div className={styles.symbol}></div>

      <div className={styles.container}>
        <div className={styles.topHeader}>
          <h3 className={styles.mainHeading}>Start Your Kundli Matching</h3>
          <p className={styles.subHeading}>
            Fill in the details below to check compatibility and marriage success.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {/* Boy Card */}
          <div className={styles.formCard}>
            <div className={styles.cardHeader}>Enter Boy Details</div>

            <div className={styles.cardBody}>
              <div className={styles.field}>
                <label>Full Name</label>
                <input type="text" placeholder="Enter Your Full Name" />
              </div>

              <div className={styles.field}>
                <label>Gender</label>
                <select defaultValue="Male">
                  <option>Male</option>
                </select>
              </div>

              <div className={styles.twoCol}>
                <div className={styles.field}>
                  <label>Birth Date</label>
                  <input type="text" placeholder="DD / MM / YYYY" />
                </div>

                <div className={styles.field}>
                  <label>Birth Time</label>
                  <input type="text" placeholder="HH : MM" />
                </div>
              </div>

              <div className={styles.field}>
                <label>Birth Place</label>
                <input
                  type="text"
                  placeholder="Start Typing, then choose nearest place from list"
                />
              </div>

              <div className={styles.field}>
                <label>Marital Status</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Single</option>
                  <option>Divorced</option>
                  <option>Widowed</option>
                </select>
              </div>

              <button className={styles.primaryBtn}>Next</button>
            </div>
          </div>

          {/* Girl Card */}
          <div className={styles.formCard}>
            <div className={styles.cardHeader}>Enter Girl Details</div>

            <div className={styles.cardBody}>
              <div className={styles.field}>
                <label>Full Name</label>
                <input type="text" placeholder="Enter Your Full Name" />
              </div>

              <div className={styles.field}>
                <label>Gender</label>
                <select defaultValue="Female">
                  <option>Female</option>
                </select>
              </div>

              <div className={styles.twoCol}>
                <div className={styles.field}>
                  <label>Birth Date</label>
                  <input type="text" placeholder="DD / MM / YYYY" />
                </div>

                <div className={styles.field}>
                  <label>Birth Time</label>
                  <input type="text" placeholder="HH : MM" />
                </div>
              </div>

              <div className={styles.field}>
                <label>Birth Place</label>
                <input
                  type="text"
                  placeholder="Start Typing, then choose nearest place from list"
                />
              </div>

              <div className={styles.field}>
                <label>Marital Status</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Single</option>
                  <option>Divorced</option>
                  <option>Widowed</option>
                </select>
              </div>

              <button className={styles.primaryBtn}>Continue</button>
            </div>
          </div>

          {/* Result Card */}
          <div className={styles.resultCard}>
            <div className={styles.cardHeader}>Result</div>

            <div className={styles.resultBody}>
              <div className={styles.scoreWrap}>
                <div className={styles.scoreRing}>
                  <div className={styles.scoreInner}>
                    <div className={styles.scoreValue}>
                      14<span>/32</span>
                    </div>
                    <div className={styles.scoreLabel}>Similarity</div>
                  </div>
                </div>
              </div>

              <p className={styles.resultText}>
                A below-average match. Some important aspects need attention.
                This match shows moderate compatibility, while there are some
                positive areas like emotional understanding and communication,
                a few key aspects need more careful evaluation for mutual
                understanding.
              </p>

              <div className={styles.breakdown}>
                <h4>Compatibility Breakdown</h4>
                <ul>
                  <li>
                    <strong>Communication:</strong> 8/8
                  </li>
                  <li>
                    <strong>Emotional Bonding:</strong> 3/7
                  </li>
                  <li>
                    <strong>Values &amp; Lifestyle:</strong> 2/5
                  </li>
                  <li>
                    <strong>Mutual Respect:</strong> 1/6
                  </li>
                  <li>
                    <strong>Intellect:</strong> 0/6
                  </li>
                </ul>
              </div>

              <div className={styles.accordionList}>
                <button type="button" className={styles.accordionItem}>
                  <span>Dosha Analysis</span>
                  <ChevronDown size={16} />
                </button>

                <button type="button" className={styles.accordionItem}>
                  <span>Astrological Advice</span>
                  <ChevronDown size={16} />
                </button>

                <button type="button" className={styles.accordionItem}>
                  <span>Final Verdict</span>
                  <ChevronDown size={16} />
                </button>
              </div>

              <button className={styles.primaryBtn}>Continue</button>
            </div>
          </div>
        </div>

        <div className={styles.bottomContent}>
          <h3 className={styles.bottomHeading}>
            <span>Kundli Matching</span> – Find Your Perfect
            <br />
            Life Partner with e-Pandit Ji
          </h3>

          <p>
            At E-Pandit Ji, we understand that marriage is not just a union of
            two individuals, but a sacred bond of two souls and families. Our
            Kundli Matching service is designed to help you find the most
            compatible life partner based on the ancient science of Vedic
            astrology.
          </p>

          <p>
            Kundli Milan, also known as Gun Milan, is a traditional method used
            to analyze the compatibility between a bride and groom. It is based
            on the comparison of their birth charts, considering planetary
            positions, stars (nakshatras), and other astrological factors. Our
            platform provides accurate and reliable kundli matching results to
            guide you in making the right decision.
          </p>
        </div>
      </div>
    </section>
  );
}
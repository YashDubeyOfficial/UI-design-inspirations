import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Chapter One — Process</div>
        <h2>Three short <em>paragraphs.</em></h2>
        <p>That is all the process this needs. The rest is reading and answering.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>I.</div>
          <div>
            <h3>The manuscript arrives</h3>
            <p>PYQs, scans, banks — up to three hundred pages, laid on the desk.</p>
            <div className={styles["step-visual"]}>
              <div className={styles["mini-row"]}><span>History_Optional.pdf</span><span>8.2 MB</span></div>
            </div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>II.</div>
          <div>
            <h3>The editors set it</h3>
            <p>Duration, marking, sections — composed in forty seconds flat.</p>
            <div className={styles["step-visual"]}>
              <div className={styles["mini-grid"]}>
                <div><small>Duration</small><strong>180 min</strong></div>
                <div><small>Marking</small><strong>+4 −1</strong></div>
                <div><small>Sections</small><strong>3</strong></div>
                <div><small>Questions</small><strong>90</strong></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>III.</div>
          <div>
            <h3>You read and answer</h3>
            <p>Timer, marginalia, auto-submit. The hall, footnoted.</p>
            <div className={styles["step-visual"]}>
              <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

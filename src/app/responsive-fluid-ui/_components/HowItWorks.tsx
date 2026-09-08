import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Breakpoints</div>
        <h2>Pour, <em>reshape, attempt.</em></h2>
        <p>Try narrowing this page. Go on.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>XS</div>
          <h3>Phone pour</h3>
          <p>Full hall in your palm. Thumb-ready palette.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>any_size.pdf</span><span>fits all</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>MD</div>
          <h3>Tablet drift</h3>
          <p>Two columns, same pressure.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-grid"]}>
              <div><small>Duration</small><strong>180 min</strong></div>
              <div><small>Marking</small><strong>+4 −1</strong></div>
              <div><small>Sections</small><strong>3</strong></div>
              <div><small>Questions</small><strong>90</strong></div>
            </div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>XL</div>
          <h3>Desktop dive</h3>
          <p>The full river, all 90 questions wide.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

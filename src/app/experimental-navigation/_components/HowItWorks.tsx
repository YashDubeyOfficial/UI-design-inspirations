import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>Stops 1-3</div>
        <h2>Follow <em>the signs.</em></h2>
        <p>The page is the map. Scrolling is navigating.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>→ 01</div>
          <h3>Gate: drop PDF</h3>
          <p>All papers enter through the gate.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>route_map.pdf</span><span>3 STOPS</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>→ 02</div>
          <h3>Junction: parse</h3>
          <p>Duration, marking, sections signposted.</p>
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
          <div className={styles["step-num"]}>→ 03</div>
          <h3>Hall: attempt</h3>
          <p>Timer, palette, auto-submit at journey’s end.</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

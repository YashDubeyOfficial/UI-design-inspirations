import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles["section-head"]}>
        <div className={styles.kicker}>How 2 HTML</div>
        <h2>Three <em>easy steps!!</em></h2>
        <p>Best viewed at 800x600. Works in Netscape 4.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-num"]}>1.</div>
          <h3>Upload teh PDF!!</h3>
          <p>Any file, even BMPS. We luv all formats!!</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>my_homework_DO_NOT_READ.pdf</span><span>56k modem</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles["step-num"]}>2.</div>
          <h3>AI does stuff</h3>
          <p>Duration n marking n sections — automagically!!</p>
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
          <div className={styles["step-num"]}>3.</div>
          <h3>Take teh test!!</h3>
          <p>Timer goes tick tock!! Palette changes color!!</p>
          <div className={styles["step-visual"]}>
            <div className={styles["mini-row"]}><span>Q 14 / 90</span><span>01:42:11</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

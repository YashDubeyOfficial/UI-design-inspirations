import styles from "../page.module.css";

export default function HeroVisual() {
  return (
    <div className={styles["hero-visual"]}>
      <div className={styles.monitor}>
        <div className={styles["screen-top"]}><span>Parakh Studio — Mock 01</span><span><b>● REC</b> 02:47:12</span></div>
        <div className={styles["screen-body"]}>
          <div className={styles["screen-left"]}>
            <div className={styles["meta-label"]}>Q14 · Physics · +4 −1</div>
            <div className={styles.q}>If α and β are roots of x² − 6x + 4 = 0, then α³ + β³ = ?</div>
            <div className={styles.opt}><b>A</b> 144</div>
            <div className={`${styles.opt} ${styles.sel}`}><b>B</b> 136 — Selected</div>
            <div className={styles.opt}><b>C</b> 128</div>
            <div className={styles.opt}><b>D</b> 120</div>
          </div>
          <div className={styles["screen-right"]}>
            <div className={styles["meta-label"]}>Palette · 14 / 90</div>
            <div className={styles.timer}>02:47:12</div>
            <div className={styles["timer-sub"]}>graded · auto-cut at zero</div>
            <div className={styles.palette}>
              <span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.ans}`}>2</span><span className={styles.pal}>3</span><span className={`${styles.pal} ${styles.mark}`}>4</span><span className={styles.pal}>5</span><span className={styles.pal}>6</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.stand}></div>
    </div>
  );
}

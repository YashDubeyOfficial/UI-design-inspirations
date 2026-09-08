import styles from "../page.module.css";

export default function HeroDemo() {
  return (
    <div className={`${styles['hero-demo']}`}>
      <div className={`${styles['demo-top']}`}><span>Parakh CBT — Minimal</span><span>02:47:12</span></div>
      <div className={`${styles['demo-body']}`}>
        <div className={`${styles['demo-tabs']}`}><span className={styles.active}>Physics</span><span>Chemistry</span><span>Maths</span></div>
        <div className={`${styles['q-label']}`}><span>Q14 • Single correct • +4 −1</span><span>14 / 90</span></div>
        <div className={`${styles['q-title']}`}>If α and β are roots of x² − 6x + 4 = 0, then α³ + β³ = ?</div>
        <div className={`${styles['lines-demo']}`}>
          <div className={`${styles['line-row']}`}><b>A</b> 144</div>
          <div className={`${styles['line-row']} ${styles.active}`}><b>B</b> 136 — Selected</div>
          <div className={`${styles['line-row']}`}><b>C</b> 128</div>
          <div className={`${styles['line-row']}`}><b>D</b> 120</div>
        </div>
        <div className={`${styles['demo-actions']}`}><span>← Previous</span><span className={styles.dark}>Save & Next →</span></div>
        <div className={`${styles['demo-right']}`}>
          <div className={`${styles['palette-label']}`}><span>Question palette</span><span>42s parsed</span></div>
          <div className={styles.palette}>
            <span className={`${styles.pal} ${styles.filled}`}>1</span><span className={`${styles.pal} ${styles.filled}`}>2</span><span className={styles.pal}>3</span><span className={`${styles.pal} ${styles.accent}`}>4</span><span className={styles.pal}>5</span><span className={styles.pal}>6</span><span className={`${styles.pal} ${styles.outline}`}>7</span><span className={`${styles.pal} ${styles.filled}`}>8</span><span className={styles.pal}>9</span><span className={`${styles.pal} ${styles.accent}`}>10</span>
          </div>
          <div className={styles.legend}><span><i className={styles.f}></i> Answered</span><span><i className={styles.a}></i> Marked</span><span><i className={styles.o}></i> Not visited</span></div>
        </div>
      </div>
    </div>
  );
}

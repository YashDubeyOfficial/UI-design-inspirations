import styles from "../page.module.css";
import { expList } from "../_data/content";

export default function Experience() {
  return (
    <section className={styles.experience}>
      <div className={`${styles['exp-wrap']}`}>
        <div className={`${styles['exp-card']}`}>
          <div className={`${styles['exp-top']}`}><strong>PARAKH M3 • UPSC 2022 — Mock 01</strong><span className={`${styles['timer-m3']}`}>● 01:32:14</span></div>
          <div className={`${styles['exp-body']}`}>
            <div className={styles.segmented}><span className={styles.active}>GS I • 100</span><span>CSAT</span><span>Essay</span></div>
            <div className={styles.question}>Q14. With reference to medieval India, which statements correct?</div>
            <div className={styles.options}>
              <div className={styles.opt}><b>A</b> 1 only</div>
              <div className={`${styles.opt} ${styles.selected}`}><b>B</b> 1 and 2 only — Selected</div>
              <div className={styles.opt}><b>C</b> 2 and 3</div>
              <div className={styles.opt}><b>D</b> 1,2,3</div>
            </div>
            <div className={`${styles['card-actions']}`}><button className={`${styles['btn-text']}`}>Previous</button><button className={`${styles['btn-filled']}`}>Save & Next</button><button className={`${styles['btn-text']}`}>Mark</button></div>
          </div>
        </div>
        <div className={`${styles['exp-copy']}`}>
          <div className={`${styles['kicker-m3']}`}><i></i> ELEVATION IS MEANING</div>
          <h2>Feels like <strong>NTA,</strong> with Material motion.</h2>
          <p>We kept hall pressure — countdown, palette, auto-submit — and gave it Material motion and elevation overlays so state changes feel tactile.</p>
          <div className={styles.list}>
            {expList.map((item) => (
              <div key={item.title} className={styles.item}><i>{item.icon}</i><span><strong>{item.title}</strong> {item.text}</span></div>
            ))}
          </div>
          <a href="#try" className={`${styles['filled-btn']}`}>Try Material CBT →</a>
        </div>
      </div>
    </section>
  );
}

import styles from "../page.module.css";
import { compareNew, compareOld } from "../_data/content";

export default function Compare() {
  return (
    <section className={styles.section} id="compare">
      <div className={`${styles['section-head']}`}>
        <div className={styles.kicker}><i></i> OLD QUIZ vs AURORA HALL</div>
        <h2>Stop <em>practising</em> like a quiz. <em>Start</em> like the day.</h2>
        <p>The difference isn’t just UI — it’s temperament. Aurora builds the hall’s hush and hush + tick, so exam day feels like déjà vu.</p>
      </div>
      <div className={styles.compare}>
        <div className={`${styles.cmp} ${styles.old}`}>
          <h4>✕ The old way — flat quizzes</h4>
          <ul>
            {compareOld.map((item) => (
              <li key={item.title}><i>✕</i><span><b>{item.title}</b> {item.text}</span></li>
            ))}
          </ul>
        </div>
        <div className={`${styles.cmp} ${styles.new}`}>
          <h4>✦ With Aurora — real hall under lights</h4>
          <ul>
            {compareNew.map((item) => (
              <li key={item.title}><i>✓</i><span><b>{item.title}</b> {item.text}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

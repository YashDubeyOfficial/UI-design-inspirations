import styles from "../page.module.css";
import { testimonials } from "../_data/content";

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={`${styles['section-head']}`}>
        <div className={styles.kicker}><i></i> LOVED AFTER DARK</div>
        <h2>Midnight mocks<br /><em>that feel final.</em></h2>
      </div>
      <div className={styles.testis}>
        {testimonials.map((t) => (
          <div key={t.name} className={styles.testi}>
            <div className={`${styles['testi-top']}`}><div className={styles.avatar} style={t.avatarStyle}>{t.initial}</div><div><strong>{t.name}</strong><br /><span>{t.meta}</span></div><span style={{marginLeft:'auto', color:'var(--lime)', fontSize:'11px'}}>★★★★★</span></div>
            <p>{t.quote}</p>
            <span className={styles.tag}>{t.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
